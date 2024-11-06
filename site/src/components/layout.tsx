import { FC, PropsWithChildren } from 'react'
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer'

const navLinks = [
  { label: 'About', href: '/' },
  { label: 'Service', href: '/' },
  { label: 'Company', href: '/' },
  { label: 'Blog', href: '/blogs/test1' },
];

const Layout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header
        logoLinkChildren="My Website"
        ctaChildren="お問い合わせ"
        navLinks={navLinks}
      />

      <main>
        {children}
      </main>

      <Footer
        logoLinkChildren="My Website"
        navLinks={navLinks}
      />
    </>
  )
}

export default Layout
