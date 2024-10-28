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
import { Button } from "@/components/Button/Button"

//「ご用件」の選択肢
const selects = [
  {
    value: '資料請求',
    name: '資料請求',
  },
  {
    value: '見積もり',
    name: '見積もり',
  },
];


const formSchema = z.object({
  username: z.string().min(2, {
    message: "お名前は必須項目です",
  }),
  email: z.string().email({
    message: "メールアドレスは必須項目です",
  }),
  description: z.string().min(2, {
    message: "ご内容は必須項目です",
  }),
})

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <Label state="required">ご用件</Label>
                <FormControl>
                  <Select selects={selects} />
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

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  }
