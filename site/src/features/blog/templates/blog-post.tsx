import { FC } from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import Layout from '@/components/layout'
import { Markdown } from '@/components/Markdown'
import * as styles from './blog-post.module.css'
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { Badge } from '@/components/Badge/Badge';
import {
  FacebookIcon,
  FacebookShareButton,
  XIcon,
  TwitterShareButton
} from 'react-share'

const BlogPostTemplate: FC<PageProps<Queries.BlogPostBySlugQuery>> = ({
  data: { blog: post, previous, next }
}) => {
  const body = post?.body ?? ''
  const title = post?.title ?? ''
  const slug = post?.slug ?? ''

  // ダミー
  const imgsrc = 'https://techlib.circlearound.co.jp/static/28ba383fd275be0db126f951f18eae15/73f08/rest-history-and-foundation-knowledge.png'
  const tags = [
    { label: 'React', link: '/tags/react' },
    { label: 'Gatsby', link: '/tags/gatsby' },
  ]
  const description = 'REST（Representational state transfer）について、話者が最初に出会った体験や、基本的な考え方についてお伝えしました。導入で20分、より丁寧なRESTだけの掘り下げを30分程度の動画で行いました。'
  const publishDate = '2021/10/15 15:00'

  return (
    <Layout>
      <div>
        <img
          src={imgsrc}
          alt=''
          className='w-full h-auto object-cover object-center'
        />
      </div>
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
          <ShareButtonList
            title={title}
            url={`https://techlib.circlearound.co.jp/entries/${slug}`}
          />
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
                  <Link to={`/entries/${previous.slug}`} rel='prev'>
                    ← {previous.title}
                  </Link>
                </li>
              )}
              {next && (
                <li className='flex justify-end'>
                  <Link to={`/entries/${next.slug}`} rel='next'>
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

const ShareButtonList = ({ title, url } : { title: string, url: string }) => {
  return (
    <div className='mt-4 flex flex-wrap space-x-2'>
      <FacebookShareButton
        title={title}
        url={url}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px 0 2px',
          backgroundColor: '#0965FE',
          borderRadius: 5
        }}
      >
        <FacebookIcon size={40} round/>
        <span className='text-white'>Facebook</span>
      </FacebookShareButton>

      <TwitterShareButton
        title={title}
        url={url}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px 0 2px',
          backgroundColor: '#000000',
          borderRadius: 5
        }}
      >
        <XIcon size={40} round/>
        <span className='text-white'>X（旧Twitter）</span>
      </TwitterShareButton>
    </div>
  );
};

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
