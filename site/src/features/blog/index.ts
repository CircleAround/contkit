import { CreatePagesArgs } from 'gatsby'
import { resolve } from 'path'

const blogPostPath = resolve('./src/features/blog/templates/blog-post.tsx')

export const createPages = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
  const { createPage } = actions

  const result = await graphql<Queries.GetAllBlogPostsQuery>(
    `
      query GetAllBlogPosts {
        allBlog(sort: { createdAt:DESC }) {
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
  posts.forEach((post, index) => {
    const previousPostSlug = index === 0 ? null : posts[index - 1].slug
    const nextPostSlug =
      index === posts.length - 1 ? null : posts[index + 1].slug

    createPage({
      path: `/entries/${post.slug}/`,
      component: blogPostPath,
      context: {
        slug: post.slug,
        previousPostSlug,
        nextPostSlug,
      },
    })
  })
}