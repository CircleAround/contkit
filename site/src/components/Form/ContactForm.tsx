import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Label } from "@/components/Form/Label"
import { Input } from "@/components/Form/Input/Input"
import { Textarea } from "@/components/Form/Textarea/Textarea"
import { FormMessage } from "@/components/Form/FormMessage/FormMessage"
import { Select } from "@/components/Form/Select/Select"
import { Checkbox } from "@/components/Form/Checkbox/Checkbox"
import { Button } from "@/components/Button/Button"

//「ご用件」の選択肢
const selects = [
  {
    value: '導入について相談したい',
    name: '導入について相談したい',
  },
  {
    value: '価格について知りたい',
    name: '価格について知りたい',
  },
  {
    value: '製品についての詳細説明を希望',
    name: '製品についての詳細説明を希望',
  },
  {
    value: '見積もりを希望',
    name: '見積もりを希望',
  },
  {
    value: 'その他',
    name: 'その他',
  },
];

//「サービスを知ったきっかけ」の選択肢
const checkItems = [
  {
    id: 'web-search',
    label: 'ウェブ検索（Google、Bingなど）'
  },
  {
    id: 'sns',
    label: 'SNS（X、Facebookなど）'
  },
  {
    id: 'seminar',
    label: '業界関連のセミナーや展示会'
  },
  {
    id: 'newsletter',
    label: 'メールマガジン・ニュースレター'
  },
  { id:
    'ad',
    label: '広告（オンライン広告、リスティング広告、雑誌広告など）'
  },
  {
    id: 'recommendation',
    label: '口コミ・紹介'
  },
  {
    id: 'media',
    label: '業界専門誌やメディア記事'
  },
]

const formSchema = z.object({
  username: z.string().min(2, {
    message: "お名前は必須項目です",
  }),
  email: z.string().email({
    message: "メールアドレスは必須項目です",
  }),
  purpose: z.string().min(2, {
    message: "ご要件は必須項目です",
  }),
  description: z.string().min(2, {
    message: "",
  }),
  multipleSelection: z.array(z.string()).min(1, {
    message: "少なくとも1つの項目を選択してください",
  }),
  agreePrivacyPolicy: z.boolean().refine((value) => value === true, {
    message: "プライバシーポリシーへの同意が必須です",
  }),
})

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
        purpose: "",
        description: "",
        multipleSelection: [],
        agreePrivacyPolicy: false,
      },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <Label state="required">お名前</Label>
                <FormControl>
                  <Input placeholder="田中 太郎" {...field} />
                </FormControl>
                <FormMessage state="danger"/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label state="required">メールアドレス</Label>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage state="danger"/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem>
                <Label state="required">ご用件</Label>
                <FormControl>
                  <Select
                    selects={selects}
                    onValueChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage state="danger"/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <Label>ご内容</Label>
                <FormControl>
                  <Textarea placeholder="お問い合わせ内容をご記入ください。例：導入をご検討の背景や、具体的な課題について" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="multipleSelection"
            render={({ field }) => (
              <FormItem>
                <Label state="required">サービスを知ったきっかけ</Label>
                <FormControl>
                  <ul className="space-y-1">
                    {checkItems.map((checkItem) => (
                      <li key={checkItem.id}>
                        <Checkbox
                          caption={checkItem.label}
                          checked={field.value.includes(checkItem.id)} // 選択状態をチェック
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...field.value, checkItem.id]
                              : field.value.filter((value) => value !== checkItem.id);
                            field.onChange(newValue); // 配列を更新
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </FormControl>
                <FormMessage state="danger" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreePrivacyPolicy"
            render={({ field }) => (
              <FormItem>
                <Label state="required">プライバシーポリシー</Label>
                <FormControl>
                  <Checkbox
                    caption="同意する"
                    checked={field.value}
                    onCheckedChange={field.onChange} // チェック状態の変更を onCheckedChange に渡す
                  />
                </FormControl>
                <FormMessage state="danger" />
                <span className="mt-8 text-xs">
                  <a href="http://" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-500 underline">
                    プライバシーポリシー
                  </a>をお読みいただき、同意いただける場合は次へ進んでください
                </span>
              </FormItem>
            )}
          />

          <div className="mt-10 flex justify-center">
            <Button type="submit">同意の上、入力内容を送信</Button>
          </div>
        </form>
      </Form>
    )
  }
