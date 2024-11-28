import { Link, type HeadFC, type PageProps, graphql } from "gatsby"
import {
  SectionTitle,
} from '../components/SectionTitle/SectionTitle'
import  Layout  from '../components/layout'
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
} from '../components/Card/Card';
import { Badge } from '../components/Badge/Badge';
import { BadgeList } from '@/components/Badge/BadgeList';
import { Sidebar } from '@/components/Sidebar';
import { Seo } from '@/components/Seo';
import heroBg from "../images/hero_bg.jpg"
import ogpBg from "../images/ogp_bg.jpg"

const contents = [
  {
    link: '/',
    imgSrc: ogpBg,
    imgAlt: 'ざっくりRedis入門 セッション情報を管理する',
    date: '2022/02/05 11:30',
    title: 'ざっくりRedis入門 セッション情報を管理する',
    badge: [{ label: 'データベース', link: '/tags' }, { label: 'セッション', link: '/tags' }, { label: '開発者ツール', link: '/tags' }, { label: '実演', link: '/tags' }],
  },
  {
    link: '/blogs/test1',
    imgSrc: ogpBg,
    imgAlt: 'HTTPレスポンス',
    date: '2022/01/19 09:00',
    title: 'HTTPレスポンス',
    badge: [{ label: '基礎', link: '/tags' }, { label: 'Webシステム', link: '/tags' }],
  },
  {
    link: '/blogs/test1',
    imgSrc: ogpBg,
    imgAlt: 'Babelの入門',
    date: '2022/01/11 15:00',
    title: 'Babelの入門',
    badge: [{ label: 'JavaScript', link: '/tags' }, { label: '実演', link: '/tags' }, { label: 'ステップアップJavaScript補足', link: '/tags' }],
  },
  {
    link: '/blogs/test1',
    imgSrc: ogpBg,
    imgAlt: 'Node.jsとnpmの入門',
    date: '2022/01/11 14:30',
    title: 'Node.jsとnpmの入門',
    badge: [{ label: 'JavaScript', link: '/tags' }, { label: '実演', link: '/tags' }],
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        {/* heroセクション */}
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
            {/* 新着コンテンツセクション */}
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
                {contents.map((content, index) => (
                  <li
                    key={index}
                    className="pt-4"
                  >
                    <Card
                      variant="col"
                      style="none"
                      size="none"
                      shape="none"
                    >
                      <Link to={content.link}>
                        <CardImage
                          imgSrc={content.imgSrc}
                          imgAlt={content.imgAlt}
                          className="rounded-none"
                        />
                      </Link>
                      <CardContent className="flex flex-1 flex-col bg-gray-50 p-4">
                        <BadgeList>
                          {content.badge?.map((badge) => (
                            <Link
                              key={badge.label}
                              to={badge.link}
                            >
                              <Badge
                                variant="primary"
                                shape="sm"
                                className="bg-palePurple-600 py-0.5 text-[10px]"
                              >
                                {badge.label}
                              </Badge>
                            </Link>
                          ))}
                        </BadgeList>
                        <Link to={content.link}>
                          <CardTitle className="text-base font-medium">{content.title}</CardTitle>
                        </Link>
                        <small className="mt-auto text-zinc-600">{content.date}</small>
                      </CardContent>
                    </Card>
                  </li>
                ))}
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
export default IndexPage

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
  <Seo />
);

