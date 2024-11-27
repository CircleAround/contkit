import { HeadFC, PageProps, graphql } from 'gatsby'
import moment from 'moment'
import Layout from '@/components/layout'
import { SectionTitle } from '@/components/SectionTitle/SectionTitle'
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { Seo } from '@/components/Seo'
import { Sidebar } from '@/components/Sidebar'
import { BlogCard } from '@/components/BlogCard'

const BlogIndexPage: React.FC<PageProps<Queries.BlogIndexQuery>> = ({ data: { allBlog } }) => {
  if(!allBlog) {
    throw new Error('post is required')
  }

  return (
    <Layout>
      <div className="py-8">
        <div className="grid grid-cols-1 gap-8 px-8 md:grid-cols-12 md:divide-x md:divide-gray-300">

          <section className="md:col-span-9">
            <Breadcrumb className="ml-0 mt-auto [&_a]:text-blue-600 [&_a]:underline"/>

            <SectionTitle
              className="relative mt-4 border-b border-gray-300 pb-3 pl-8 text-3xl font-medium leading-relaxed text-blue-950	 before:absolute before:left-0
              before:top-0 before:h-full before:w-4 before:bg-blue-700 lg:text-3xl lg:leading-relaxed"
            >
              コンテンツ一覧
            </SectionTitle>

            {/* 検索欄 ※後日実装 */}
            <div className="mt-12"></div>

            <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[5vmin]">
              {allBlog.edges.map(({ node: { id, title, slug, createdAt } }) => {
                return (
                  <li key={id}>
                    <BlogCardWrap title={title} slug={slug} createdAt={createdAt} />
                  </li>
                )
              })}
            </ul>
          </section>

          <Sidebar className='md:col-span-3 md:pl-4'/>
        </div>
      </div>
    </Layout>
  )
}

const BlogCardWrap = ({ title, slug, createdAt }: {title: string|null, slug: string|null, createdAt: string|null}) => {
  if(!slug) {
    throw new Error('slug is required')
  }
  if(!title) {
    throw new Error(`title is required on blog: ${slug}`)
  }
  if(!createdAt) {
    throw new Error(`createdAt is required on blog: ${slug}`)
  }
  const blogUrl = `/entries/${slug}`
  const publishedAtStr = createdAt ? moment(createdAt).local().format('YYYY/MM/DD HH:mm') : ''

  // ダミー
  const imgsrc = 'https://techlib.circlearound.co.jp/static/28ba383fd275be0db126f951f18eae15/73f08/rest-history-and-foundation-knowledge.png'
  const tags = [
    { label: 'React', link: '/tags/react' },
    { label: 'Gatsby', link: '/tags/gatsby' },
  ]
  return (
    <BlogCard
      blogUrl={blogUrl}
      title={title}
      imgsrc={imgsrc}
      publishedAtStr={publishedAtStr}
      tags={tags}
    />
  )
}

export const query = graphql`
  query BlogIndex {
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
export const Head: HeadFC = () => (
  <Seo
    title='コンテンツ一覧'
  />
);

export default BlogIndexPage