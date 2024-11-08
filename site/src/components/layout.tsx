import { FC, PropsWithChildren } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from './Footer';
import  SectionInner from '../components/SectionInner';
import { LogoLink } from '../components/LogoLink';
import { Navigation } from '../components/Navigation/Navigation';

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
        href='/'
        imgComponent={<img src="https://placehold.jp/30/333333/ffffff/300x150.png?text=logo+image" alt="" className='h-auto w-full object-cover object-center' />}
        navLinks={navLinks}
        ctaChildren="お問い合わせ"
      />

      <main>
        {children}
      </main>

      <Footer>
        <SectionInner>
          <div className="flex flex-col justify-between space-y-6 md:flex-row md:space-y-0">
            <LogoLink href='/'>
              <img src="https://placehold.jp/30/333333/ffffff/300x150.png?text=logo+image" alt="" className='h-auto w-full object-cover object-center' />
            </LogoLink>
            <Navigation
              variant="footer"
              navLinks={navLinks}
              className='text-zinc-400 [&_li]:text-xl [&_li]:md:text-sm [&_ul]:flex [&_ul]:flex-col [&_ul]:items-start [&_ul]:space-x-0 [&_ul]:space-y-4 [&_ul]:md:flex-row [&_ul]:md:space-x-4 [&_ul]:md:space-y-0'
            />
          </div>

          <div className="mt-6 text-center">
            <small className='text-zinc-400'>© 2024 CIRCLE AROUND Inc.</small>
          </div>
        </SectionInner>
      </Footer>
    </>
  );
};

export default Layout;
