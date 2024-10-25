import type { HeadFC, PageProps } from "gatsby"
import { SectionTitle } from '../components/SectionTitle/SectionTitle'
import { Card } from '../components/Card/Card'
import  Layout  from '../components/layout'
import { ContactForm } from '../components/Form/Form'

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


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <div className="py-20">
          <SectionTitle shape="plain">ニュース</SectionTitle>
          <ul className="mt-8 flex flex-col justify-between gap-y-4 divide-y divide-zinc-200">
            {informations.map((information, index) => (
              <li key={index} className="pt-4">
                <Card variant="row" stlye="none" size="none" state="hover" link={information.link} imgSrc={information.imgSrc} date={information.date} title={information.title} description={information.description} badge={information.badge} />
              </li>
            ))}
          </ul>
        </div>

        <div className="py-20">
          <SectionTitle shape="plain">ブログ</SectionTitle>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {blogs.map((blog, index) => (
              <li key={index}>
                <Card state="hover" link={blog.link} imgSrc={blog.imgSrc} date={blog.date} title={blog.title} description={blog.description} badge={blog.badge} />
              </li>
            ))}
          </ul>
        </div>

        <div className="py-20">
          <SectionTitle shape="plain">お問い合わせ</SectionTitle>
          <div className="mt-10">
            <ContactForm/>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
