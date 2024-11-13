import { FC, PropsWithChildren, useState } from 'react';
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
import {
  NavigationDrawer,
  NavigationDrawerButton,
  HamburgerIcon
} from '../components/NavigationDrawer/NavigationDrawer';
import { MobileMenu } from '../components/MobileMenu/MobileMenu';
import { AnchorButton } from '../components/Button/Button';
import { twMerge } from 'tailwind-merge';

const logoLink = {
  href: '/',
  imgSrc: 'https://placehold.jp/30/333333/ffffff/300x150.png?text=logo+image',
  imgAlt: ''
};

const navLinks = [
  { label: 'About', href: '/' },
  { label: 'Service', href: '/' },
  { label: 'Company', href: '/' },
  { label: 'Blog', href: '/blogs/test1' },
];

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const baseAnimationCn = 'relative pb-1 duration-1000 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full';

  return (
    <>
      <Header>
        <HeaderInner>
          <LogoLink href={logoLink.href}>
            <img
              src={logoLink.imgSrc}
              alt={logoLink.imgAlt}
              className='h-auto w-full object-cover object-center'
            />
          </LogoLink>

          {/* PC */}
          <Navigation className='hidden md:block'>
            <NavigationMenuList>
            {navLinks.map((navLink) => (
              <NavigationMenuItem key={navLink.label}>
                <NavigationLink
                  href={navLink.href}
                  className={twMerge(baseAnimationCn)}
                >
                  {navLink.label}
                </NavigationLink>
              </NavigationMenuItem>
            ))}
            </NavigationMenuList>
          </Navigation>
          <AnchorButton
            variant="primary"
            href='/'
            className='hidden md:block'
          >
            お問い合わせ
          </AnchorButton>

          {/* SP */}
          <NavigationDrawer>
            <NavigationDrawerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}>
              <HamburgerIcon isMenuOpen={isMenuOpen} />
            </NavigationDrawerButton>
          </NavigationDrawer>
          <MobileMenu isMenuOpen={isMenuOpen} className='md:hidden'>
            <Navigation>
              <NavigationMenuList>
              {navLinks.map((navLink) => (
                <NavigationMenuItem key={navLink.label}>
                  <NavigationLink
                    href={navLink.href}
                    className={twMerge(baseAnimationCn, 'text-xl')}
                  >
                    {navLink.label}
                  </NavigationLink>
                </NavigationMenuItem>
              ))}
              </NavigationMenuList>
            </Navigation>
            <div className="mt-4">
              <AnchorButton variant="primary" href='/'>お問い合わせ</AnchorButton>
            </div>
          </MobileMenu>
        </HeaderInner>
      </Header>


      <main>
        {children}
      </main>

      <Footer>
        <SectionInner>
          <div className="flex flex-col justify-between space-y-6 md:flex-row md:space-y-0">
            <LogoLink href={logoLink.href}>
              <img src={logoLink.imgSrc} alt={logoLink.imgAlt} className='h-auto w-full object-cover object-center' />
            </LogoLink>
            <Navigation>
              <NavigationMenuList>
              {navLinks.map((navLink) => (
                <NavigationMenuItem key={navLink.label}>
                  <NavigationLink
                    href={navLink.href}
                    className={twMerge(baseAnimationCn, 'text-zinc-400 text-xl md:text-sm')}
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
    </>
  );
};

export default Layout;
