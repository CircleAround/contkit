import { CreatePagesArgs } from 'gatsby'
import { resolve } from 'path'
import { GatsbyNode } from 'gatsby'
import { createPages as createBlogPages } from './src/features/blog/index'

export const createPages = async (args: CreatePagesArgs) => {
  await createBlogPages(args)
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": resolve(__dirname, "src")
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
  })
}
