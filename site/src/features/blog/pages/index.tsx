import { HeadFC, PageProps, graphql } from 'gatsby'

const BlogIndexPage: React.FC<PageProps<Queries.TestPageQuery>> = ({ data }) => {
  return (
    <div>
      <h1>BlogIndex</h1>
      <h2>{data.site?.siteMetadata?.title}</h2>
      <ul>
        {data.allBlog.edges.map(({ node: { id, title, slug, createdAt } }) => (
          <li>
            <div>
              <a href={`/blogs/${slug}`}>{title} ({id})</a>
              <div>
                {createdAt}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query TestPage {
    site {
      siteMetadata {
        title
      }
    }
    allBlog {
      edges {
        node {
          id
          title
          slug
          createdAt
        }
      }
    }
  }
`

export const Head: HeadFC = () => <>
  <title>Blog index</title>
  <meta name="description" content="Blog index" />
</>

export default BlogIndexPage
