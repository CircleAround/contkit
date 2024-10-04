import { lazy } from 'react'
import { RouterSupport, Router, scope, pageSchema, crud } from 'bistrio/client'
import {
  taskCreateWithTagsSchema,
  taskUpdateWithTagsSchema,
} from '../params'
import { Middlewares } from '../middlewares'
import TaskLayout from '../components/tasks/TaskLayout'

const UserLayout = lazy(() => import(/* webpackMode: "eager" */ '../components/UserLayout'))

export function routes(r: Router, _support: RouterSupport<Middlewares>) {
  r = r.layout({ Component: UserLayout }).options({ hydrate: true })

  r.pages('/', ['/'])

  scope(r, (r) => {
    r = r.layout({ element: TaskLayout }) // set layout

    r.resources('tasks', {
      name: 'tasks',
      actions: crud(),
      inputs: {
        list: { schema: pageSchema, sources: ['query', 'params'] },
        create: taskCreateWithTagsSchema,
        update: taskUpdateWithTagsSchema,
      },
    })
  })
}
