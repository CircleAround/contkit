import { Link } from 'react-router-dom'
import { useNavigate } from 'bistrio/client'
import { Form, UseSubmitProps, formSchema } from '../../components/blogs/Form'
import { useRenderSupport } from '@bistrio/routes/main'
import { blogs$index } from '@/.bistrio/routes/main/named_endpoints'

export function Build() {
  const navigate = useNavigate()
  const rs = useRenderSupport()

  const props: UseSubmitProps = {
    action: (params) => rs.resources().blogs.create(params),
    onSuccess: (result) =>
      navigate(blogs$index.path(), {
        purge: true,
        flashMessage: { text: `Blog created '${result.title}'`, type: 'info' },
      }),
    schema: formSchema,
  }

  const l = rs.getLocalizer()

  return (
    <div>
      <h2>{l.t`Create new blog`}</h2>
      <Form {...props} />
      <Link to={blogs$index.path()}>To Top</Link>
    </div>
  )
}

export { Build as Page }
