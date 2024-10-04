import { number, string, object, array, coerce } from 'zod'

const taskCoreProps = {
  title: string().min(3).max(255),
  description: string().min(3).max(4096),
}

const withTags = {
  tags: array(string()).optional().default([]),
}

const taskWithTagsCoreProps = {
  ...taskCoreProps,
  ...withTags,
}

export const taskCreateSchema = object(taskCoreProps)
export const taskCreateWithTagsSchema = object(taskWithTagsCoreProps)
export const taskUpdateSchema = object({
  id: number(),
  ...taskCoreProps,
  done: coerce.boolean().default(false), // from view's value is string, change to boolean
})
export const taskUpdateWithTagsSchema = taskUpdateSchema.extend(withTags)

export const taskIdSchema = object({
  taskId: number(),
})

export type TaskIdParams = Zod.infer<typeof taskIdSchema>
