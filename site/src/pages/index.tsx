import type { HeadFC, PageProps } from "gatsby"
import {
  SectionTitle,
  SectionSubTitle
} from '../components/SectionTitle/SectionTitle'
import  Layout  from '../components/layout'
import { SectionInner } from '../components/SectionInner';
import { AnchorButton } from '../components/Button/Button'
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription
} from '../components/Card/Card';
import { Badge } from '../components/Badge/Badge';
import { BadgeList } from '@/components/Badge/BadgeList';

const informations = [
  {
    link: '/',
    imgSrc: '../images/ogp_bg.jpg',
    imgAlt: '',
    date: '2023/10/22',
    title: '会社紹介の AI ガイドを作成しました',
    description: '先日発表された Open AI 社の GPTs に大変可能性を感じたので、とりあえず何か作ってみるべく弊社の会社紹介用の オリジナル GPT を作成しました。',
    badge: [{ label: 'web', className: '' }],
  },
  {
    link: '/blogs/test1',
    imgSrc: '../images/ogp_bg.jpg',
    imgAlt: '',
    date: '2023/10/22',
    title: '2023年新年のご挨拶',
    description: '代表の佐藤です。謹んで新年のお慶びを申し上げます。',
    badge: [{ label: 'web', className: '' }],
  },
  {
    link: '/blogs/test1',
    imgSrc: '../images/ogp_bg.jpg',
    imgAlt: '',
    date: '2023/10/22',
    title: '書籍「ステップアップJavaScript」を執筆いたしました',
    description: 'これまで弊社ではトレーニングで得た知見や、トレーニングで利用できる教材を単体のコンテンツとしてもアウトプットすることを続けております',
    badge: [{ label: 'book', className: '' }, { label: 'JavaScript', className: '' }, { label: 'training', className: '' }],
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        {/* heroセクション */}
        <section className="relative">
          <div className="h-[60vh] max-h-[300px] md:max-h-[400px] lg:max-h-[500px]">
            <img src="../images/hero_bg.jpg" alt="" className="size-full object-cover object-center" />
          </div>
          <div className="absolute left-1/2 top-1/2 flex w-full max-w-[580px] -translate-x-1/2 -translate-y-1/2 flex-col space-y-6 bg-purple-950/40 p-3 px-6">
            <SectionTitle shape="plain" className="text-5xl text-white lg:text-6xl">Tech lib</SectionTitle>
            <p className="text-2xl text-white">WEBプログラミング基礎の動画解説をここに集約</p>
          </div>
        </section>

        {/* ニュースセクション */}
        <section className="py-20">
          <SectionInner>
            <SectionTitle shape="widthSubtitle" className="text-center">
              <SectionSubTitle className="mb-2">information</SectionSubTitle>
              最新情報
            </SectionTitle>
            <ul className="mt-8 flex flex-col justify-between gap-y-4 divide-y divide-zinc-200">
              {informations.map((information, index) => (
                <li key={index} className="pt-4">
                  <Card
                    variant="col"
                    style="none"
                    size="none"
                    state="hover"
                    link={information.link}
                  >
                    <CardImage imgSrc={information.imgSrc} imgAlt={information.imgAlt} className="md:max-w-60"/>
                    <CardContent>
                      <small className="text-zinc-600">{information.date}</small>
                      <CardTitle>{information.title}</CardTitle>
                      <CardDescription>{information.description}</CardDescription>
                      <BadgeList>
                        {information.badge?.map((badge) => (
                          <Badge key={badge.label} variant="primary" shape="sm" className={badge.className}>{badge.label}</Badge>
                        ))}
                      </BadgeList>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex justify-end">
              <AnchorButton href="/">全て見る</AnchorButton>
            </div>
          </SectionInner>
        </section>
      </Layout>
    </>
  )
}
export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
