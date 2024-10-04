import { HeadFC, PageProps, graphql } from 'gatsby'
import { Markdown } from '../components/Markdown'

const TestPage: React.FC<PageProps<Queries.TestPageQuery>> = ({ data }) => {
  return (
    <div>
      <h1>Test Page</h1>
      <h2>{data.site?.siteMetadata?.title}</h2>
      <ul>
        {data.allBlog.edges.map(({ node: { id, body, createdAt } }) => (
          <li>
            <div>{id}</div>
            {body && <Markdown text={body} />}
            <div>{createdAt}</div>
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
          body
          createdAt
        }
      }
    }
  }
`

export const Head: HeadFC = () => <>
  <title>Test Page</title>
  <meta name="description" content="Test page description" />
</>

export default TestPage
