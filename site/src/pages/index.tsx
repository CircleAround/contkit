import type { HeadFC, PageProps } from "gatsby"
import { SectionTitle } from '../components/SectionTitle/SectionTitle'
import { Button, AnchorButton } from '../components/Button/Button'
import { Header } from '../components/Header/Header';
import { Card } from '../components/Card/Card';

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const navLinks = [
  { label: 'About', href: '/' },
  { label: 'Service', href: '/' },
  { label: 'Company', href: '/' },
  { label: 'Blog', href: '/blogs/test1' },
];

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const informations = [
  {
    link: '/',
    imgSrc: 'https://images.unsplash.com/photo-1573495612077-a689b084faab?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
    title: '会社紹介の AI ガイドを作成しました',
    description: '先日発表された Open AI 社の GPTs に大変可能性を感じたので、とりあえず何か作ってみるべく弊社の会社紹介用の オリジナル GPT を作成しました。'
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
    badge: 'NEW',
    title: '書籍「ステップアップJavaScript」を執筆いたしました',
    description: 'これまで弊社ではトレーニングで得た知見や、トレーニングで利用できる教材を単体のコンテンツとしてもアウトプットすることを続けております'
  },
];

const blogs = [
  {
    link: '/',
    imgSrc: 'https://images.unsplash.com/photo-1573495612077-a689b084faab?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgAlt: '',
    title: '会社紹介の AI ガイドを作成しました',
    description: '先日発表された Open AI 社の GPTs に大変可能性を感じたので、とりあえず何か作ってみるべく弊社の会社紹介用の オリジナル GPT を作成しました。'
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
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header
        homeLinkChildren="My Website"
        ctaChildren="お問い合わせ"
        navLinks={navLinks}
      />

      {/* <Header
        HomeLinkChildren={
          <HomeLink>
            <img src="/path/to/logo.png" alt="Home Logo" style={{ width: '100px', height: 'auto' }} />
          </HomeLink>
        }
        ctaChildren="お問い合わせ"
        navLinks={navLinks}
      />
 */}

      <main className="container mx-auto px-6 pt-24 md:px-10 md:pt-28">
        <SectionTitle shape="plain">ニュース</SectionTitle>
        <ul className="mt-10 flex flex-col justify-between space-y-6">
          {informations.map((information, index) => (
            <li key={index}>
              <Card variant="row" state="hover" link={information.link} imgSrc={information.imgSrc} title={information.title} description={information.description}>
              {/* <time>2024/01/02</time> */}
              </Card>
            </li>
          ))}
        </ul>

        <div className="mt-20">
          <SectionTitle shape="plain">ブログ</SectionTitle>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {blogs.map((blog, index) => (
              <li key={index}>
                <Card state="hover" link={blog.link} imgSrc={blog.imgSrc} title={blog.title} description={blog.description}>
                  {/* <Badge className="">{blog.badge}</Badge> */}
                </Card>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-x-6">
          <Button variant="primary" type="button" >ボタン</Button>
          <AnchorButton variant="secondary" href="/blogs/test1/">ボタン</AnchorButton>
        </div>

        <Button variant="primary" type="button" >ボタン</Button>
        <AnchorButton variant="secondary" href="/blogs/test1/">ボタン</AnchorButton>
        <ul style={doclistStyles} className="mt-10">
          {docLinks.map(doc => (
            <li key={doc.url} style={docLinkStyle}>
              <a
                style={linkStyle}
                href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
              >
                {doc.text}
              </a>
            </li>
          ))}
        </ul>
        <ul style={listStyles}>
          {links.map(link => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a
                  style={linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
                >
                  {link.text}
                </a>
                {link.badge && (
                  <span style={badgeStyle} aria-label="New Badge">
                    NEW!
                  </span>
                )}
                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
