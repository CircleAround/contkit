import { CreatePagesArgs } from 'gatsby'
import { resolve } from 'path'
import { GatsbyNode } from 'gatsby'

const blogPostPath = resolve('./src/templates/blog-post.tsx')

exports.createPages = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
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
      path: `/blogs/${post.slug}/`,
      component: blogPostPath,
      context: {
        slug: post.slug,
        previousPostSlug,
        nextPostSlug,
      },
    })
  })
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": resolve(__dirname, "src")
      },
    },
  })
}
