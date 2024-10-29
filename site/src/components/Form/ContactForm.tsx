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
import { FormMessage } from "@/components/Form/Message"
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
  multipleSelection: z.string().min(2, {
    message: "",
  }),
  agreePrivacyPolicy: z.string().min(2, {
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
        multipleSelection: "",
        agreePrivacyPolicy: "",
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
                <FormMessage />
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
                <FormMessage />
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
                <FormMessage />
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
                <Label>サービスを知ったきっかけ</Label>
                <FormControl>
                  <ul className="space-y-1">
                    <li>
                      <Checkbox caption="ウェブ検索（Google、Bingなど）" {...field} />
                    </li>
                    <li>
                      <Checkbox caption="SNS（X、Facebookなど）" {...field} />
                    </li>
                    <li>
                      <Checkbox caption="業界関連のセミナーや展示会" {...field} />
                    </li>
                    <li>
                      <Checkbox caption="メールマガジン・ニュースレター" {...field} />
                    </li>
                    <li>
                      <Checkbox caption="広告（オンライン広告、リスティング広告、雑誌広告など）" {...field} />
                    </li>
                    <li>
                      <Checkbox caption="口コミ・紹介" {...field} />
                    </li>
                    <li>
                      <Checkbox caption="業界専門誌やメディア記事" {...field} />
                    </li>
                  </ul>
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-center mt-11">
            <span className="text-xs"><a href="http://" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium underline">プライバシーポリシー</a>に同意の上、送信してください。</span>
          </div>

          <FormField
            control={form.control}
            name="agreePrivacyPolicy"
            render={({ field }) => (
              <FormItem className="flex justify-center">
                <FormControl>
                  <Checkbox required caption="個人情報の取り扱いに同意する" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-center mt-10">
            <Button type="submit">同意の上、入力内容を送信</Button>
          </div>
        </form>
      </Form>
    )
  }
