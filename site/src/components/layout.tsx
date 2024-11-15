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
import { twMerge } from 'tailwind-merge';

const headerLogoLink = {
  href: '/',
  imgSrc: '../images/logo.png',
  imgAlt: 'Tech lib'
};

const footerLogoLink = {
  href: '/',
  imgSrc: '../images/',
  imgAlt: 'Tech lib'
};

const navLinks = [
  { label: '一覧へ', href: '/entries' },
];

const Layout: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className='bg-stone-100'>
      <div className='mx-auto w-full max-w-6xl'>
        <Header className='static'>
          <HeaderInner className='bg-white py-9'>
            <LogoLink href={headerLogoLink.href} className='aspect-auto w-32'>
              <img
                src={headerLogoLink.imgSrc}
                alt={headerLogoLink.imgAlt}
                className='h-auto w-full object-cover object-center'
              />
            </LogoLink>

            <Navigation>
              <NavigationMenuList>
              {navLinks.map((navLink) => (
                <NavigationMenuItem key={navLink.label}>
                  <NavigationLink
                    href={navLink.href}
                    className='underline text-xl font-medium'
                  >
                    {navLink.label}
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

        <Footer className=''>
          <SectionInner>
            <div className="flex flex-col justify-between space-y-6 md:flex-row md:space-y-0">
              <LogoLink href={footerLogoLink.href}>
                <img src={footerLogoLink.imgSrc} alt={footerLogoLink.imgAlt} className='h-auto w-full object-cover object-center' />
              </LogoLink>
              <Navigation>
                <NavigationMenuList>
                {navLinks.map((navLink) => (
                  <NavigationMenuItem key={navLink.label}>
                    <NavigationLink
                      href={navLink.href}
                      className='text-zinc-400 text-xl md:text-sm'
                    >
                      {navLink.label}
                    </NavigationLink>
                  </NavigationMenuItem>
                ))}
                </NavigationMenuList>
              </Navigation>
            </div>

            <div className="mt-6 text-center">
              <small className='text-zinc-400'>© 2024 CIRCLE AROUND Inc.</small>
            </div>
          </SectionInner>
        </Footer>
      </div>
    </div>
  );
};

export default Layout;
