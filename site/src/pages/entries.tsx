import { HeadFC, PageProps, graphql } from 'gatsby'
import Layout from '@/components/layout'
import { SectionTitle } from '@/components/SectionTitle/SectionTitle'
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { Seo } from '@/components/Seo'
import { Sidebar } from '@/components/Sidebar'

// タグ一覧確認ようのための仮
const tags =[{ label: 'データベース', link: '/tags' }, { label: 'セッション', link: '/tags' }, { label: '開発者ツール', link: '/tags' }, { label: '実演', link: '/tags' }];

const BlogIndexPage: React.FC<PageProps<Queries.BlogIndexQuery>> = ({ data }) => {

  return (
    <Layout>
      {/* <h2>{data.site?.siteMetadata?.title}</h2>
      <ul>
        {data.allBlog.edges.map(({ node: { id, title, slug, createdAt } }) => (
          <li key={id}>
            <div>
              <a href={`/entries/${slug}`}>{title} ({id})</a>
              <div>
                {createdAt}
              </div>
            </div>
          </li>
        ))}
      </ul> */}

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
            </ul>
          </section>

          <Sidebar className='md:col-span-3 md:pl-4'/>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
        siteUrl
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
export const Head: HeadFC = () => (
  <Seo
    title='コンテンツ一覧'
  />
);

export default BlogIndexPage