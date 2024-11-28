import { Link, type HeadFC, type PageProps, graphql } from "gatsby"
import moment from 'moment'
import { SectionTitle } from '@/components/SectionTitle/SectionTitle'
import  Layout  from '@/components/layout'
import { Sidebar } from '@/components/Sidebar';
import { BlogCard } from '@/components/BlogCard';
import { Seo } from '@/components/Seo';
import heroBg from "@/images/hero_bg.jpg"

const IndexPage: React.FC<PageProps<Queries.IndexQuery>> = ({ data: { allBlog } }) => {
  if(!allBlog) {
    throw new Error('allBlog is required')
  }

  return (
    <>
      <Layout>
        <section className="relative">
          <div className="h-[60vh] max-h-[300px] md:max-h-[400px] lg:max-h-[500px]">
            <img
              src={heroBg}
              alt="" className="size-full object-cover object-center"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 flex w-full max-w-[580px] -translate-x-1/2 -translate-y-1/2 flex-col space-y-6 bg-purple-950/40 p-3 px-6">
            <SectionTitle
              shape="plain"
              className="text-5xl text-white lg:text-6xl"
            >
              Tech lib
            </SectionTitle>
            <p className="text-2xl text-white">WEBプログラミング基礎の動画解説をここに集約</p>
          </div>
        </section>

        <div className="py-8">
          <div className="grid grid-cols-1 gap-8 px-8 md:grid-cols-12 md:divide-x md:divide-gray-300">
            <section className="md:col-span-9">
              <SectionTitle
                className="relative border-b border-gray-300 pb-3 pl-8 text-3xl font-medium leading-relaxed text-blue-950	 before:absolute before:left-0
                before:top-0 before:h-full before:w-4 before:bg-blue-700 lg:text-3xl lg:leading-relaxed"
              >
                新着コンテンツ
              </SectionTitle>

              {/* 検索欄 ※後日実装 */}
              <div className="mt-12"></div>

              <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[5vmin]">
                {allBlog.edges.map(({ node: { id, title, slug, createdAt }}) => {
                  return (
                    <li key={id}>
                      <BlogCardWrapper title={title} slug={slug} createdAt={createdAt}/>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-10 flex justify-end">
                <Link
                  to="/entries"
                  className="text-blue-600 underline"
                >
                  もっと見る...
                </Link>
              </div>
            </section>

            <Sidebar
              title='タグ一覧'
              className='md:col-span-3 md:pl-4'
            />
          </div>
        </div>
      </Layout>
    </>
  )
}


const BlogCardWrapper = ({ title, slug, createdAt }: {title: string|null, slug: string|null, createdAt: string|null}) => {
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

export default IndexPage

export const query = graphql`
  query Index {
    allBlog(limit: 9, sort: { fields: createdAt, order:DESC }) {
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
  <Seo />
);

