import { Suspense } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useRenderSupport } from '@bistrio/routes/main'
import { tasks$index } from '@/.bistrio/routes/main/named_endpoints'

export function Page() {
  const params = useParams()

  const id = Number(params.id)
  return (
    <Suspense fallback="...">
      <Task id={id} />
      <hr />
    </Suspense>
  )
}

function Task({ id }: { id: number }) {
  const rs = useRenderSupport()
  const task = rs.suspendedResources().tasks.load({ id })
  return (
    <>
      <h2>
        <Link to={tasks$index.path()}>Task</Link> / {task.title}
      </h2>
      <div>{task.description}</div>
    </>
  )
}

