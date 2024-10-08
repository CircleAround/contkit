import { FC } from 'react'
import { Link, PageProps, graphql } from 'gatsby'

import Layout from '../components/layout'
import { Markdown } from '../components/Markdown'
import * as styles from './blog-post.module.css'

interface BlogPost {
  slug: string
  title: string
  body: string
}

interface BlogPostTemplateProps extends PageProps {
  data: {
    blog: BlogPost
    previous?: BlogPost
    next?: BlogPost
  }
}

const BlogPostTemplate: FC<BlogPostTemplateProps> = ({ data: { blog: post, previous, next }, location }) => {
  const body = post?.body ?? ''

  return (
    <Layout>
      <div className={styles.container}>
        <h1>{post?.title ?? 'Untitled'}</h1>
        <div className={styles.article}>
          <div className={styles.body}>
            {body && <Markdown text={body} />}
          </div>
          {(previous || next) && (
            <nav>
              <ul className={styles.articleNavigation}>
                {previous && (
                  <li>
                    <Link to={`/blog/${previous.slug}`} rel="prev">
                      ← {previous.title}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link to={`/blog/${next.slug}`} rel="next">
                      {next.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    blog(slug: { eq: $slug }) {
      slug
      title
      body
    }
    previous: blog(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: blog(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
