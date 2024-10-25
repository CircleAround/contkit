import { FC, PropsWithChildren } from 'react'
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb'
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

      <main className='container mx-auto px-6 pt-24 md:px-10 md:pt-28'>
        <Breadcrumb/>
        {children}
      </main>
    </>
  )
}

export default Layout
