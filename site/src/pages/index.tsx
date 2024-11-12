import type { HeadFC, PageProps } from "gatsby"
import { SectionTitle } from '../components/SectionTitle/SectionTitle'
import  Layout  from '../components/layout'
import  SectionInner  from '../components/SectionInner'
import { ContactForm } from '../components/Form/ContactForm'
import { AnchorButton } from '../components/Button/Button'
import { Download } from 'lucide-react';
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription
} from '../components/Card/Card';
import { Badge } from '../components/Badge/Badge';
import { BadgeList } from '@/components/Badge/BadgeList';

const clients = [
  {
    imgSrc: "https://placehold.jp/120x85.png",
    alt: "クライアントA",
  },
  {
    imgSrc: "https://placehold.jp/120x85.png",
    alt: "クライアントB",
  },
  {
    imgSrc: "https://placehold.jp/120x85.png",
    alt: "クライアントC",
  },
  {
    imgSrc: "https://placehold.jp/120x85.png",
    alt: "クライアントD",
  },
  {
    imgSrc: "https://placehold.jp/120x85.png",
    alt: "クライアントE",
  },
];

const features = [
  {
    imgSrc: "https://placehold.jp/3d4070/ffffff/150x150.png",
    title: "コスト削減",
    description: "弊社のサービスで作業効率が上がり、経費が削減されます。"
  },
  {
    imgSrc: "https://placehold.jp/3d4070/ffffff/150x150.png",
    title: "高い導入実績",
    description: "多くの企業に採用されており、確かな信頼性があります。"
  },
  {
    imgSrc: "https://placehold.jp/3d4070/ffffff/150x150.png",
    title: "カスタマイズ可能",
    description: "お客様のニーズに合わせて柔軟に対応します。"
  },
];

const functionLists = [
  {
    icon: <Download className="size-10 text-4xl text-blue-500" />,
    title: "高いカスタマイズ性",
    description: "お客様のニーズに合わせて、柔軟にカスタマイズ可能な機能を提供します。"
  },
  {
    icon: <Download className="size-10 text-4xl text-green-500" />,
    title: "パフォーマンス向上",
    description: "高速な処理性能で業務効率を向上し、最大限のパフォーマンスを発揮します。"
  },
  {
    icon: <Download className="size-10 text-4xl text-red-500" />,
    title: "高度なセキュリティ",
    description: "最新のセキュリティ基準を満たし、安心してご利用いただけます。"
  },
  {
    icon: <Download className="size-10 text-4xl text-purple-500" />,
    title: "ユーザープロテクション",
    description: "ユーザー情報を保護し、安全な環境を提供します。"
  },
  {
    icon: <Download className="size-10 text-4xl text-teal-500" />,
    title: "モバイル対応",
    description: "モバイルデバイスに最適化されたUIで、どこでもアクセス可能です。"
  },
  {
    icon: <Download className="size-10 text-4xl text-orange-500" />,
    title: "優れたサポート",
    description: "専任のサポートチームが導入から運用までをサポートします。"
  }
];

const informations = [
  {
    link: '/',
    imgSrc: 'https://placehold.jp/3d4070/ffffff/150x150.png',
    imgAlt: '',
    date: '2023/10/22',
    title: '会社紹介の AI ガイドを作成しました',
    description: '先日発表された Open AI 社の GPTs に大変可能性を感じたので、とりあえず何か作ってみるべく弊社の会社紹介用の オリジナル GPT を作成しました。',
    badge: [{ label: 'web', className: '' }],
  },
  {
    link: '/blogs/test1',
    imgSrc: 'https://placehold.jp/3d4070/ffffff/150x150.png',
    imgAlt: '',
    date: '2023/10/22',
    title: '2023年新年のご挨拶',
    description: '代表の佐藤です。謹んで新年のお慶びを申し上げます。',
    badge: [{ label: 'web', className: '' }],
  },
  {
    link: '/blogs/test1',
    imgSrc: 'https://placehold.jp/3d4070/ffffff/150x150.png',
    imgAlt: '',
    date: '2023/10/22',
    title: '書籍「ステップアップJavaScript」を執筆いたしました',
    description: 'これまで弊社ではトレーニングで得た知見や、トレーニングで利用できる教材を単体のコンテンツとしてもアウトプットすることを続けております',
    badge: [{ label: 'book' }, { label: 'JavaScript', className: 'bg-yellow-600' }, { label: 'training' }],
  },
];

const testimonials = [
  {
    link: '/',
    name: "株式会社A",
    title: "導入後に効率が飛躍的に向上しました",
    imgSrc: "https://placehold.jp/3d4070/ffffff/150x150.png",
    imgAlt: "株式会社Aのイメージ画像",
    description: "弊社はこのサービスを導入したことで作業効率が飛躍的に向上し、大幅なコスト削減も実現しました。今後もこのような革新的なサービスを期待しています。",
  },
  {
    link: '/',
    name: "株式会社B",
    title: "導入後に効率が飛躍的に向上しました",
    imgSrc: "https://placehold.jp/3d4070/ffffff/150x150.png",
    imgAlt: "株式会社Aのイメージ画像",
    description: "弊社はこのサービスを導入したことで作業効率が飛躍的に向上し、大幅なコスト削減も実現しました。今後もこのような革新的なサービスを期待しています。",
  },
  {
    link: '/',
    name: "株式会社C",
    title: "導入後に効率が飛躍的に向上しました",
    imgSrc: "https://placehold.jp/3d4070/ffffff/150x150.png",
    imgAlt: "株式会社Aのイメージ画像",
    description: "弊社はこのサービスを導入したことで作業効率が飛躍的に向上し、大幅なコスト削減も実現しました。今後もこのような革新的なサービスを期待しています。",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <section className="bg-white pb-20 pt-40">
          <SectionInner>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-10">
              <div className="lg:w-1/2">
                <div className="flex flex-col space-y-6">
                  <h1 className="text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">成果につながる<br/>Webサイト制作</h1>
                  <p className="mt-6 text-base text-zinc-900">コンバージョン率の向上を実現するBtoBサイト・コーポレートサイト制作</p>
                  <div className="flex items-center space-x-4">
                    <dl>
                      <dt className="text-sm text-zinc-900">対応満足度</dt>
                      <dd className="text-3xl font-bold text-red-500">98%</dd>
                    </dl>
                    <dl>
                      <dt className="text-sm text-zinc-900">導入企業者数</dt>
                      <dd className="text-3xl font-bold text-red-500">100社以上</dd>
                    </dl>
                  </div>
                </div>
                <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <AnchorButton href=""  className="">お問い合わせ</AnchorButton>
                  <AnchorButton variant="secondary" href=""  className="flex space-x-2">
                    <span>資料ダウンロード</span>
                    <Download /></AnchorButton>
                </div>
              </div>

              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img src="https://placehold.jp/320x240.png" alt="" className="size-full rounded-lg object-cover object-center" />
              </div>
            </div>
          </SectionInner>
        </section>

        <div className="bg-gray-100 py-10">
          <SectionInner>
            <ul className="flex flex-wrap items-center justify-center gap-4">
              {clients.map((client, index) => (
                <li key={index} className="text-center">
                  <img src={client.imgSrc} alt={client.alt} className="size-full rounded-lg object-cover object-center" />
                </li>
              ))}
            </ul>
          </SectionInner>
        </div>

        {/* 特長セクション */}
        <section className="py-20">
          <SectionInner>
            <SectionTitle shape="widthSubtitle" className="text-center" subtitle="service">サービスの特長</SectionTitle>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => (
                <li key={index} className="flex flex-col items-center">
                  <div className="w-40">
                    <img src={feature.imgSrc} alt="" className="size-full rounded-full object-cover object-center"/>
                  </div>
                  <dl className="mt-6 text-center">
                    <dt className="text-lg font-semibold">{feature.title}</dt>
                    <dd className="mt-2 text-gray-600">{feature.description}</dd>
                  </dl>
                </li>
              ))}
            </ul>
          </SectionInner>
        </section>

        {/* サービスの機能紹介セクション */}
        <div className="bg-gray-100 py-20">
          <SectionInner>
            <SectionTitle shape="widthSubtitle" className="text-center" subtitle="function">機能紹介</SectionTitle>
            <ul className="mt-8 grid gap-6 md:grid-cols-3 lg:grid-cols-3">
              {functionLists.map((functionList, index) => (
                <li key={index} className="rounded bg-white p-6 text-center shadow">
                  <div className="mb-4 flex justify-center">{functionList.icon}</div>
                  <h3 className="text-lg font-semibold">{functionList.title}</h3>
                  <p className="mt-2 text-gray-600">{functionList.description}</p>
                </li>
              ))}
            </ul>
          </SectionInner>
        </div>

        {/* ニュースセクション */}
        <section className="py-20">
          <SectionInner>
            <SectionTitle shape="widthSubtitle" className="text-center" subtitle="information">最新情報</SectionTitle>
            <ul className="mt-8 flex flex-col justify-between gap-y-4 divide-y divide-zinc-200">
              {informations.map((information, index) => (
                <li key={index} className="pt-4">
                  <Card
                    variant="row"
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

        {/* お客様の声セクション */}
        <section className="bg-gray-100 py-20 ">
          <SectionInner>
            <SectionTitle shape="widthSubtitle" className="text-center" subtitle="voice">お客様の声</SectionTitle>
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <li key={index}>
                  <Card
                    state="hover"
                    link={testimonial.link}
                  >
                    <CardImage imgSrc={testimonial.imgSrc} imgAlt={testimonial.imgAlt}/>
                    <CardContent>
                      <p className="text-zinc-600">{testimonial.name}</p>
                      <CardTitle>{testimonial.title}</CardTitle>
                      <CardDescription>{testimonial.description}</CardDescription>
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

        {/* お問い合わせセクション */}
        <section className="py-20">
          <SectionInner>
            <SectionTitle shape="widthSubtitle" className="text-center" subtitle="contact">お問い合わせ</SectionTitle>
            <div className="mx-auto mt-10 w-full max-w-2xl">
              <ContactForm/>
            </div>
          </SectionInner>
        </section>
      </Layout>
    </>
  )
}
export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
