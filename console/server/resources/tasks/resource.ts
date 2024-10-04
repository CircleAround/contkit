import { defineResource, Paginated } from 'bistrio'
import { TaskWithTags } from '@/universal/types'
import { CustomActionOptions } from '@/server/customizers'
import { TasksResource } from '@bistrio/resources'

type Task = {
  test: boolean
}

export default defineResource(
  () =>
    ({
      list: (params): Promise<Paginated<Task>> => {
        return Promise.resolve({
          data: [],
          count: 0,
          params,
        })
      },

      load: (_params): Promise<TaskWithTags> => {
        return Promise.resolve({ test: true })
      },

      create: (_params) => {
        return Promise.resolve({ test: true})
      },

      update: async (_params) => {
        return Promise.resolve({ test: true})
      },

      destroy: async () => Promise.resolve({ test: true}),
    }) as const satisfies TasksResource<CustomActionOptions>,
)
