import { FC } from 'react'
import { HeadFC, Link, PageProps, graphql } from 'gatsby'
import Layout from '@/components/layout'
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { Badge } from '@/components/Badge/Badge';
import { BadgeList } from '@/components/Badge/BadgeList';
import {
  FacebookIcon,
  FacebookShareButton,
  XIcon,
  TwitterShareButton
} from 'react-share'
import moment from 'moment'
import { Seo } from '@/components/Seo';
import { CircleArrowRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import MarkdownContent from './MarkdownContent';

const BlogPostTemplate: FC<PageProps<Queries.BlogPostBySlugQuery>> = ({
  data: { blog, site, previous, next }
}) => {
  if(!blog) {
    throw new Error('post is required')
  }

  const {body, title, slug, createdAt} = blog
  if(!slug) {
    throw new Error('slug is required')
  }
  if(!title) {
    throw new Error(`title is required on blog: ${slug}`)
  }
  if(!createdAt) {
    throw new Error(`createdAt is required on blog: ${slug}`)
  }

  const siteUrl = site?.siteMetadata?.siteUrl
  if(!siteUrl) {
    throw new Error('site.siteMetadata.siteUrl is required')
  }
  const blogUrl = `${siteUrl}/entries/${slug}`
  const publishedAtStr = createdAt ? moment(createdAt).local().format('YYYY/MM/DD HH:mm') : ''

  // ダミー
  const imgsrc = 'https://techlib.circlearound.co.jp/static/28ba383fd275be0db126f951f18eae15/73f08/rest-history-and-foundation-knowledge.png'
  const tags = [
    { label: 'React', link: '/tags/react' },
    { label: 'Gatsby', link: '/tags/gatsby' },
  ]
  const description = 'REST（Representational state transfer）について、話者が最初に出会った体験や、基本的な考え方についてお伝えしました。導入で20分、より丁寧なRESTだけの掘り下げを30分程度の動画で行いました。'
  const youtubeUrl = 'https://www.youtube.com/embed/7sbi6NE2f_g?si=k6V1AmyDWLY9DZKU'
  const youtubeUrl2 = 'https://www.youtube.com/embed/mLWD-LBAUME?si=HeS0hkm5pVPzLe4i'

  return (
    <Layout>
      <div>
        <img
          src={imgsrc}
          alt=''
          className='h-auto w-full object-cover object-center'
        />
      </div>
      <div className="mx-auto max-w-6xl px-8 py-7">
        <Breadcrumb className="ml-0 mt-auto [&_a]:text-blue-600 [&_a]:underline"/>
        <div>
          <BadgeList className='mt-4'>
            {tags?.map((tag) => (
              <li key={tag.link}>
                <Link
                  to={tag.link}
                  className="no-underline"
                >
                  <Badge
                    variant="primary"
                    shape="sm"
                    className="bg-palePurple-600 py-0.5 text-[10px]"
                  >
                    {tag.label}
                  </Badge>
                </Link>
              </li>
            ))}
          </BadgeList>
          <h1 className="mt-4 text-3xl font-bold text-blue-600">{title}</h1>
          <ShareButtonList
            title={title}
            url={blogUrl}
          />
          <p className='mt-4 text-base'>{publishedAtStr}</p>
          <p className='mt-4 text-base'>{description}</p>
          <div className="mt-4 flex flex-wrap bg-black">
            {youtubeUrl &&
              <Youtube key={youtubeUrl} src={youtubeUrl} />
            }
            {youtubeUrl2 &&
              <Youtube key={youtubeUrl2} src={youtubeUrl2} />
            }
          </div>
          {body &&
            <MarkdownContent body={body}/>
          }
        </div>

        {(previous || next) && (
          <nav className='mt-4'>
            <ul
              className={twMerge(
                'flex list-none flex-wrap p-0',
                (previous && next && 'justify-between') || (previous && 'justify-start') || 'justify-end'
              )}
            >
              {previous && (
                <li>
                  <Link to={`/entries/${previous.slug}`} rel='prev' className='flex items-center space-x-2'>
                    <CircleArrowRight className='rotate-180 stroke-blue-600'/>
                    <span>{previous.title}</span>
                  </Link>
                </li>
              )}
              {next && (
                <li className='flex justify-end'>
                  <Link to={`/entries/${next.slug}`} rel='next' className='flex items-center space-x-2'>
                    <span>{next.title}</span>
                    <CircleArrowRight className='stroke-blue-600'/>
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
    <div className='mt-4 flex flex-wrap gap-2'>
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

function Youtube( { src } : { src: string }) {
  return (
    <iframe
      className='mx-auto block max-w-[500px]'
      title="youtube"
      width="560"
      height="315"
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
  )
}


export default BlogPostTemplate

export const Head: HeadFC<PageProps<Queries.BlogPostBySlugQuery>> = ({ data }) => {
  const description = 'REST（Representational state transfer）について、話者が最初に出会った体験や、基本的な考え方についてお伝えしました。導入で20分、より丁寧なRESTだけの掘り下げを30分程度の動画で行いました。'
  return (
    <Seo
      title={data.blog.title}
      description={description}
    />
  )
};

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    blog(slug: { eq: $slug }) {
      slug
      title
      body
      createdAt
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
