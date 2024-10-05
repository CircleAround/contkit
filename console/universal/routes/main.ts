import { lazy } from 'react'
import { RouterSupport, Router, scope, pageSchema, crud } from 'bistrio/client'
import { blogCreateSchema, blogLoadSchema, blogUpdateSchema } from '../params'
import { Middlewares } from '../middlewares'

const UserLayout = lazy(() => import(/* webpackMode: "eager" */ '../components/UserLayout'))

export function routes(r: Router, _support: RouterSupport<Middlewares>) {
  r = r.layout({ Component: UserLayout }).options({ hydrate: true })

  r.pages('/', ['/'])

  scope(r, (r) => {
    r.resources('blogs', {
      name: 'blogs',
      actions: crud(),
      inputs: {
        list: { schema: pageSchema, sources: ['query', 'params'] },
        load: blogLoadSchema,
        create: blogCreateSchema,
        update: blogUpdateSchema,
      },
    })
  })
}
