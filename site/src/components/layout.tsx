import { FC, PropsWithChildren } from 'react';
import {
  Header,
  HeaderInner,
} from '../components/Header/Header';
import { Footer } from './Footer';
import { SectionInner } from '../components/SectionInner';
import { LogoLink } from '../components/LogoLink';
import {
  Navigation,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationLink
} from '../components/Navigation/Navigation';
import logo from "../images/logo.png"
import logoWhite from "../images/logo_white.png"

const headerLogoLink = {
  href: '/',
  imgSrc: logo,
  imgAlt: 'Tech lib'
};

const footerLogoLink = {
  href: 'https://circlearound.co.jp/',
  imgSrc: logoWhite,
  imgAlt: 'サークルアラウンド株式会社'
};

const headerNavLinks = [
  { label: '一覧へ', href: '/entries' },
];

const footerNavLinks = [
  { label: 'このサイトについて', href: '/about' },
  { label: '利用規約', href: '/terms_of_use' },
  { label: 'プライバシーポリシー', href: 'https://circlearound.co.jp/privacy/', target: '_blank' },
  { label: '運営会社', href: 'https://circlearound.co.jp/', target: '_blank' },
];

const Layout: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className='bg-stone-100'>
      <div className='mx-auto w-full max-w-6xl'>
        <Header className='static'>
          <HeaderInner className='bg-white py-9'>
            <LogoLink
              href={headerLogoLink.href}
              className='aspect-auto w-32'>
              <img
                src={headerLogoLink.imgSrc}
                alt={headerLogoLink.imgAlt}
                className='h-auto w-full object-cover object-center'
              />
            </LogoLink>

            <Navigation>
              <NavigationMenuList>
              {headerNavLinks.map((headerNavLink) => (
                <NavigationMenuItem key={headerNavLink.label}>
                  <NavigationLink
                    href={headerNavLink.href}
                    className='text-xl font-medium underline'
                  >
                    {headerNavLink.label}
                  </NavigationLink>
                </NavigationMenuItem>
              ))}
              </NavigationMenuList>
            </Navigation>
          </HeaderInner>
        </Header>


        <main className='bg-white'>
          {children}
        </main>

        <Footer className='bg-blue-600 py-8'>
          <SectionInner className='px-4'>
            <div className="flex flex-col items-center">
              <Navigation>
                  <NavigationMenuList className='flex-row flex-wrap gap-2 space-y-0 divide-x-2 md:space-x-0'>
                  {footerNavLinks.map((footerNavLink) => (
                    <NavigationMenuItem
                      key={footerNavLink.label}
                      className='pl-2 first:pl-0'
                    >
                      <NavigationLink
                        href={footerNavLink.href}
                        target={footerNavLink.target}
                        rel={footerNavLink.target === '_blank' ? 'noopener noreferrer' : undefined}
                        className='text-sm text-white'
                      >
                        {footerNavLink.label}
                      </NavigationLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </Navigation>
              <div className="mt-1 text-center">
                <small className='text-white'>© CIRCLE AROUND Inc.</small>
              </div>
              <LogoLink
                  href={footerLogoLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mt-4 block w-16'
                >
                  <img
                    src={footerLogoLink.imgSrc}
                    alt={footerLogoLink.imgAlt}
                    className='h-auto w-full object-cover object-center'
                  />
                </LogoLink>
              </div>
          </SectionInner>
        </Footer>
      </div>
    </div>
  );
};

export default Layout;
