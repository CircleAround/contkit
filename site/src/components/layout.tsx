// import './variables.css'
// import './global.css'
import { FC, PropsWithChildren } from 'react'
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb'
import { Header } from '../components/Header/Header';

const navLinks = [
  { label: 'About', href: '/' },
  { label: 'Service', href: '/' },
  { label: 'Company', href: '/' },
  { label: 'Blog', href: '/blogs/test1' },
];

// const breadcrumbs = [
//   { href: '/', name: 'Home' },
//   { href: '/blogs/test1/', name: 'Blog' },
// ];

const Template:FC<PropsWithChildren> = ({ children }) => {
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

export default Template
