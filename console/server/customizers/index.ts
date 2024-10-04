import { ActionOptions, buildActionOptions, CreateActionOptionsFunction } from 'bistrio'

export type CustomActionOptions = {
} & ActionOptions

export const createActionOptions: CreateActionOptionsFunction = () => {
  return buildActionOptions({})
}
