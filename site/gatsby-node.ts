import { CreatePagesArgs } from 'gatsby'
import { resolve } from 'path'

const blogPostPath = resolve('./src/templates/blog-post.tsx')

exports.createPages = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
  const { createPage } = actions

  const result = await graphql<{allBlog: {nodes: {title:string, slug:string}[]}}>(
    `
      {
        allBlog {
          nodes {
            title
            slug
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading allBlog nodes`,
      result.errors
    )
    return
  }

  const posts = result.data!.allBlog.nodes

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPostPath,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
}
