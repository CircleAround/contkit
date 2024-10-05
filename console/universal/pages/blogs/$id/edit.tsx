import { Suspense } from 'react'

import { useNavigate } from 'bistrio/client'
import { useRenderSupport } from '@bistrio/routes/main'
import { Form, UseSubmitProps, formSchema } from '@/universal/components/blogs/Form'
import { useParams } from 'react-router-dom'
import { blogs$index } from '@/.bistrio/routes/main/named_endpoints'

function MyForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const rs = useRenderSupport()

  if (id === undefined) {
    throw new Error('id is required')
  }

  const source = rs.suspendedResources().blogs.load({ id })

  const props: UseSubmitProps = {
    action: (params) => rs.resources().blogs.update({ ...params, id }),
    onSuccess: (result) =>
      navigate(blogs$index.path(), {
        purge: true,
        flashMessage: { text: `Blog updated '${result.title}'`, type: 'info' },
      }),
    schema: formSchema,
    source,
  }

  return <Form {...props} />
}

export function Edit() {
  return (
    <>
      <h2>Update Blog</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <MyForm />
      </Suspense>
    </>
  )
}

export { Edit as Page }
