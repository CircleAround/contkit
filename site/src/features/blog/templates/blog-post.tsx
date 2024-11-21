import { FC } from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import Layout from '@/components/layout'
import { Markdown } from '@/components/Markdown'
import * as styles from './blog-post.module.css'
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { Badge } from '@/components/Badge/Badge';

const BlogPostTemplate: FC<PageProps<Queries.BlogPostBySlugQuery>> = ({
  data: { blog: post, previous, next }
}) => {
  const body = post?.body ?? ''
  const title = post?.title ?? ''
  const slug = post?.slug ?? ''

  // ダミー
  const tags = [
    { label: 'React', link: '/tags/react' },
    { label: 'Gatsby', link: '/tags/gatsby' },
  ]
  const description = 'REST（Representational state transfer）について、話者が最初に出会った体験や、基本的な考え方についてお伝えしました。導入で20分、より丁寧なRESTだけの掘り下げを30分程度の動画で行いました。'
  const publishDate = '2021/10/15 15:00'

  return (
    <Layout>
      <div className={styles.container}>
        <Breadcrumb className="ml-0 mt-auto [&_a]:text-blue-600 [&_a]:underline"/>
        <div className={styles.article}>
          <div className='mt-4 flex flex-wrap gap-1'>
            {tags?.map((tag) => (
              <a
                key={tag.label}
                href={tag.link}
              >
                <Badge
                  variant="primary"
                  shape="sm"
                  className="bg-palePurple-600 py-0.5 text-[10px]"
                >
                  {tag.label}
                </Badge>
              </a>
            ))}
          </div>
          <h1 className="mt-4 text-3xl font-bold text-blue-600">{title}</h1>
          <p>{publishDate}</p>
          <p>{description}</p>
          <div className={styles.body}>{body && <Markdown text={body} />}</div>
        </div>

        {(previous || next) && (
          <nav className='mt-4'>
            <ul
              className={`flex list-none flex-wrap p-0 ${
                (previous && next && 'justify-between') || (previous && 'justify-start') || 'justify-end'
              }`}
              >
              {previous && (
                <li>
                  <Link to={`/blogs/${previous.slug}`} rel='prev'>
                    ← {previous.title}
                  </Link>
                </li>
              )}
              {next && (
                <li className='flex justify-end'>
                  <Link to={`/blogs/${next.slug}`} rel='next'>
                    {next.title} →
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
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
