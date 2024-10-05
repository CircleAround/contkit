import { UseSubmitProps as TUseSubmitProps, useSubmit } from 'bistrio/client'
import { Blog, blogCreateSchema } from '@/universal/params'
import { ErrorPanel } from '../ErrorPanel'

export const formSchema = blogCreateSchema
export type FormAttrs = typeof formSchema
export type UseSubmitProps = TUseSubmitProps<FormAttrs, Blog>

export function Form({ source = { title: '', body: '' }, ...props }: UseSubmitProps) {
  const { handleSubmit, invalid, pending } = useSubmit<FormAttrs, Blog>(props)

  return (
    <>
      {invalid && <ErrorPanel err={invalid}></ErrorPanel>}
      <form onSubmit={handleSubmit}>
        <fieldset disabled={pending}>
          <div>
            <input name="title" defaultValue={source.title}></input>
          </div>
          <div>
            <textarea name="body" defaultValue={source.body}></textarea>
          </div>
          <input type="submit"></input>
        </fieldset>
      </form>
    </>
  )
}
