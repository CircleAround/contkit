import { string, object, infer as zinfer, date } from 'zod'

export const idSchema = string()

export const blogCoreSchema = object({
  title: string().min(3).max(255),
  body: string(),
})

const idParamSchema = object({ id: idSchema })
const timestampsSchema = object({
  createdAt: date(),
  updatedAt: date(),
})

export const blogLoadSchema = idParamSchema
export const blogCreateSchema = blogCoreSchema
export const blogUpdateSchema = idParamSchema.merge(blogCoreSchema)
export const blogDestroySchema = idParamSchema

export const blogSchema = blogUpdateSchema.merge(timestampsSchema)
export type Blog = zinfer<typeof blogSchema>