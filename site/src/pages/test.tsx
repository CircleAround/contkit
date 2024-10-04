import * as React from "react"
import { PageProps, graphql } from "gatsby";

const TestPage: React.FC<PageProps> = ({ data }) => {
  return (
    <div>
      <h1>Test Page</h1>
      <h2>{data.site.siteMetadata.title}</h2>
      <ul>
        {data.allBlog.edges.map(({node: {id, body, createdAt}}) => (<li>
          <div>{id}</div>
          <div>{body}</div>
          <div>{createdAt}</div>
        </li>))
        }
      </ul>
    </div>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allBlog{
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
export default TestPage