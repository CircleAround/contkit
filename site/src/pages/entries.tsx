import { HeadFC, Link, PageProps, graphql } from 'gatsby'
import Layout from '@/components/layout'
import { SectionTitle } from '@/components/SectionTitle/SectionTitle'
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { Seo } from '@/components/Seo'
import { Sidebar } from '@/components/Sidebar'
import { Card, CardImage, CardContent, CardTitle } from '@/components/Card/Card'
import { BadgeList } from '@/components/Badge/BadgeList'
import { Badge } from '@/components/Badge/Badge'


const BlogIndexPage: React.FC<PageProps<Queries.BlogIndexQuery>> = ({ data }) => {

  // ダミー
  const imgsrc = 'https://techlib.circlearound.co.jp/static/28ba383fd275be0db126f951f18eae15/73f08/rest-history-and-foundation-knowledge.png'
  const tags = [
    { label: 'React', link: '/tags/react' },
    { label: 'Gatsby', link: '/tags/gatsby' },
  ]

  return (
    <Layout>
      <h2>{data.site?.siteMetadata?.title}</h2>

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
              {data.allBlog.edges.map(({ node: { id, title, slug, createdAt } }) => (
                <li key={id}>
                  <Card
                    style="none"
                    size="none"
                  >
                    <Link to={`/entries/${slug}`}>
                      <CardImage
                        imgSrc={imgsrc}
                        imgAlt=''
                        className="rounded-none"
                      />
                    </Link>
                    <CardContent className='bg-gray-50 p-4'>
                      <BadgeList>
                        {tags?.map((tag) => (
                          <li key={tag.label}>
                            <Link to={tag.link}>
                              <Badge
                                shape="sm"
                                className="bg-palePurple-600 py-0.5 text-[10px]"
                              >
                                {tag.label}
                              </Badge>
                            </Link>
                          </li>
                        ))}
                      </BadgeList>
                      <Link to={`/entries/${slug}`}>
                        <CardTitle>{title}</CardTitle>
                      </Link>
                      <small className="mt-auto text-zinc-600">{createdAt}</small>
                    </CardContent>
                  </Card>
                </li>
              ))}
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