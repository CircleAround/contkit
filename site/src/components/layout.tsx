import { FC, PropsWithChildren } from 'react'
import { Header } from '../components/Header/Header';

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
        homeLinkChildren="My Website"
        ctaChildren="お問い合わせ"
        navLinks={navLinks}
      />

      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
