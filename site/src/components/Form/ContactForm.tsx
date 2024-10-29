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
})

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
        purpose: "",
        description: "",
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
                <Label>サービスを知ったきっかけ</Label>
                <FormControl>
                  <ul className="space-y-1">
                    <li>
                      <Checkbox checkboxCaption="ウェブ検索（Google、Bingなど）" {...field} />
                    </li>
                    <li>
                      <Checkbox checkboxCaption="SNS（X、Facebookなど）" {...field} />
                    </li>
                    <li>
                      <Checkbox checkboxCaption="業界関連のセミナーや展示会" {...field} />
                    </li>
                    <li>
                      <Checkbox checkboxCaption="メールマガジン・ニュースレター" {...field} />
                    </li>
                    <li>
                      <Checkbox checkboxCaption="広告（オンライン広告、リスティング広告、雑誌広告など）" {...field} />
                    </li>
                    <li>
                      <Checkbox checkboxCaption="口コミ・紹介" {...field} />
                    </li>
                    <li>
                      <Checkbox checkboxCaption="業界専門誌やメディア記事" {...field} />
                    </li>
                  </ul>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox checkboxCaption="Recents" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  }
