import type { HeadFC, PageProps } from "gatsby"
import { SectionTitle } from '../components/SectionTitle/SectionTitle'
import { Card } from '../components/Card/Card'
import  Layout  from '../components/layout'
import  SectionInner  from '../components/SectionInner'
import { ContactForm } from '../components/Form/ContactForm'

const informations = [
  {
    link: '/',
    imgSrc: 'https://images.unsplash.com/photo-1573495612077-a689b084faab?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
    date: '2023/10/22',
    title: '会社紹介の AI ガイドを作成しました',
    description: '先日発表された Open AI 社の GPTs に大変可能性を感じたので、とりあえず何か作ってみるべく弊社の会社紹介用の オリジナル GPT を作成しました。',
    badge: [{ label: 'web', className: '' }],
  },
  {
    link: '/blogs/test1',
    imgSrc: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
    title: '2023年新年のご挨拶',
    description: '代表の佐藤です。謹んで新年のお慶びを申し上げます。',
  },
  {
    link: '/blogs/test1',
    imgSrc: 'https://images.unsplash.com/photo-1532243705460-7c3bb6bf310e?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
    title: '書籍「ステップアップJavaScript」を執筆いたしました',
    description: 'これまで弊社ではトレーニングで得た知見や、トレーニングで利用できる教材を単体のコンテンツとしてもアウトプットすることを続けております',
    badge: [{ label: 'book' }, { label: 'JavaScript', className: 'bg-yellow-600' }, { label: 'training' }],
  },
];

const blogs = [
  {
    link: '/',
    imgSrc: 'https://images.unsplash.com/photo-1573495612077-a689b084faab?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
    title: '会社紹介の AI ガイドを作成しました',
    description: '先日発表された Open AI 社の GPTs に大変可能性を感じたので、とりあえず何か作ってみるべく弊社の会社紹介用の オリジナル GPT を作成しました。',
    badge: [{ label: 'web', className: '' }, { label: 'AI', state: '' }],
  },
  {
    link: '/blogs/test1',
    imgSrc: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
    title: '2023年新年のご挨拶',
    description: '代表の佐藤です。謹んで新年のお慶びを申し上げます。'
  },
  {
    link: '/blogs/test1',
    imgSrc: 'https://images.unsplash.com/photo-1532243705460-7c3bb6bf310e?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
    title: '書籍「ステップアップJavaScript」を執筆いたしました',
    description: 'これまで弊社ではトレーニングで得た知見や、トレーニングで利用できる教材を単体のコンテンツとしてもアウトプットすることを続けております'
  },
  {
    link: '/blogs/test1',
    imgSrc: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
    date: '2023/10/23',
    title: '2023年新年のご挨拶',
    description: '代表の佐藤です。謹んで新年のお慶びを申し上げます。'
  },
  {
    link: '/blogs/test1',
    imgSrc: 'https://images.unsplash.com/photo-1532243705460-7c3bb6bf310e?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
    date: '2023/10/24',
    title: '書籍「ステップアップJavaScript」を執筆いたしました',
    description: 'これまで弊社ではトレーニングで得た知見や、トレーニングで利用できる教材を単体のコンテンツとしてもアウトプットすることを続けております'
  },
];


const testimonials = [
  {
    name: "株式会社A",
    title: "導入後に効率が飛躍的に向上しました",
    imgSrc: "https://placehold.jp/3d4070/ffffff/150x150.png",
    alt: "株式会社Aのイメージ画像",
    description: "弊社はこのサービスを導入したことで作業効率が飛躍的に向上し、大幅なコスト削減も実現しました。今後もこのような革新的なサービスを期待しています。",
  },
  {
    name: "株式会社B",
    title: "導入後に効率が飛躍的に向上しました",
    imgSrc: "https://placehold.jp/3d4070/ffffff/150x150.png",
    alt: "株式会社Aのイメージ画像",
    description: "弊社はこのサービスを導入したことで作業効率が飛躍的に向上し、大幅なコスト削減も実現しました。今後もこのような革新的なサービスを期待しています。",
  },
  {
    name: "株式会社C",
    title: "導入後に効率が飛躍的に向上しました",
    imgSrc: "https://placehold.jp/3d4070/ffffff/150x150.png",
    alt: "株式会社Aのイメージ画像",
    description: "弊社はこのサービスを導入したことで作業効率が飛躍的に向上し、大幅なコスト削減も実現しました。今後もこのような革新的なサービスを期待しています。",
  },
  // 他の事例追加可能
];

const features = [
  { title: "コスト削減", description: "弊社のサービスで作業効率が上がり、経費が削減されます。" },
  { title: "高い導入実績", description: "多くの企業に採用されており、確かな信頼性があります。" },
  { title: "カスタマイズ可能", description: "お客様のニーズに合わせて柔軟に対応します。" },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        {/* 特長セクション */}
        <section className="py-20 bg-gray-100">
          <SectionInner>
            <SectionTitle shape="plain" className="text-center">サービスの特長</SectionTitle>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => (
                <li key={index} className="text-center p-6 bg-white shadow rounded">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </li>
              ))}
            </ul>
          </SectionInner>
        </section>

        {/* ニュースセクション */}
        <section className="py-20">
          <SectionInner>
            <SectionTitle shape="plain" className="text-center">ニュース</SectionTitle>
            <ul className="mt-8 flex flex-col justify-between gap-y-4 divide-y divide-zinc-200">
              {informations.map((information, index) => (
                <li key={index} className="pt-4">
                  <Card
                    variant="row"
                    stlye="none"
                    size="none"
                    state="hover"
                    link={information.link}
                    imgSrc={information.imgSrc}
                    date={information.date}
                    title={information.title}
                    description={information.description}
                    badge={information.badge} />
                </li>
              ))}
            </ul>
          </SectionInner>
        </section>


        {/* お客様の声セクション */}
        <section className="py-20">
          <SectionInner>
            <SectionTitle shape="plain" className="text-center">お客様の声</SectionTitle>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <li key={index} className="text-center">
                  <Card
                    stlye="none"
                    imgSrc={testimonial.imgSrc}
                    imgAlt={testimonial.alt}
                    name={testimonial.name}
                    title={testimonial.title}
                    description={testimonial.description}
                  />
                </li>
              ))}
            </ul>
          </SectionInner>
        </section>

        {/* お問い合わせセクション */}
        <section className="py-20">
          <SectionInner>
            <SectionTitle shape="plain" className="text-center">お問い合わせ</SectionTitle>
            <div className="mx-auto mt-10 w-full max-w-2xl">
              <ContactForm/>
            </div>
          </SectionInner>
        </section>

        {/* ブログセクション */}
        <section className="py-20">
          <SectionInner>
            <SectionTitle shape="plain" className="text-center">ブログ</SectionTitle>
            <div className="mt-8 overflow-x-auto">
              <ul className="flex gap-4">
                {blogs.map((blog, index) => (
                  <li key={index} className="min-w-[300px]">
                    <Card
                      state="hover"
                      link={blog.link}
                      imgSrc={blog.imgSrc}
                      date={blog.date}
                      title={blog.title}
                      description={blog.description}
                      badge={blog.badge}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </SectionInner>
        </section>
      </Layout>
    </>
  )
}
export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
