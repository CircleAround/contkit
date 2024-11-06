import { FC, PropsWithChildren } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

const navLinks = [
  { label: 'About', href: '/' },
  { label: 'Service', href: '/' },
  { label: 'Company', href: '/' },
  { label: 'Blog', href: '/blogs/test1' },
];

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header
        logoLinkVariant="text"
        logoText='Logo'
        logoImgSrc="https://placehold.jp/30/333333/ffffff/300x150.png?text=logo+image"
        navLinks={navLinks}
        ctaChildren="お問い合わせ"
      />

      <main>
        {children}
      </main>

      <Footer
        logoLinkVariant="image"
        logoImgSrc="https://placehold.jp/30/333333/ffffff/300x150.png?text=logo+image"
        logoimgAlt="logo image"
        navLinks={navLinks}
        copyright="© 2024 CIRCLE AROUND Inc."
      />
    </>
  );
};

export default Layout;
