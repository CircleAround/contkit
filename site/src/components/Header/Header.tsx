import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { AnchorButton } from '../Button/Button';
import { ReactNode, useState } from 'react';
import { Link } from 'gatsby';
import { twMerge } from 'tailwind-merge';

type NavLink = {
  label: string;
  href: string;
};

const Header = ({
  HomeLinkChildren: HomeLinkChildren,
  ctaChildren,
  navLinks,
  className
}: {
  HomeLinkChildren: ReactNode,
  ctaChildren: ReactNode,
  navLinks: NavLink[],
  className?: string
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderLayout className={className}>
      <HomeLink className={className}>{HomeLinkChildren}</HomeLink>
      <PcNavigation navLinks={navLinks} className={className} />
      <HeaderButton className={className} ctaChildren={ctaChildren} />
      <HamburgerIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} className={className} />
      <MobileMenu navLinks={navLinks} isMenuOpen={isMenuOpen} ctaChildren={ctaChildren} className={className} />
    </HeaderLayout>
  );
};

const HeaderLayout = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <header className={twMerge('w-full h-20 px-6 pt-6 md:fixed md:z-50 md:pt-6', className)}>
      <div className="flex items-center justify-between">
        {children}
      </div>
    </header>
  );
};

const HomeLink = ({children, className}: {children: ReactNode, className?: string}) => {
  return (
    <Link to='/' aria-label="ホームへ戻る" className={twMerge("text-xl font-bold", className)}>
      {children}
    </Link>
  );
};

const PcNavigation = ({ navLinks, className }: { navLinks: NavLink[], className?: string }) => {
  return (
    <NavigationMenu className={twMerge("hidden md:flex lg:w-full", className)}>
      <NavigationMenuList className="flex justify-start space-x-4">
        {navLinks.map((navLink, index) => (
          <NavigationMenuItem key={index} className="text-sm font-semibold text-zinc-900">
            <Link to={navLink.href} className="transition duration-300 ease-in-out hover:opacity-50">
              {navLink.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const HeaderButton = ({ className, ctaChildren }: { className?: string, ctaChildren: ReactNode }) => {
  return (
    <div className={twMerge("hidden md:block", className)}>
      <AnchorButton variant="primary" href={''}>{ctaChildren}</AnchorButton>
    </div>
  );
};

const HamburgerIcon = ({ isMenuOpen, toggleMenu, className }: { isMenuOpen: boolean, toggleMenu: () => void, className?: string }) => {
  return (
    <div className={twMerge("fixed right-6 top-6 z-50 md:hidden", className)}>
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        className={twMerge(
          "flex size-12 flex-col items-center justify-center rounded-full bg-zinc-900",
          isMenuOpen ? 'justify-center' : '',
          className
        )}
      >
        <div className={`h-1 w-6 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></div>
        <div className={`my-1 h-1 w-6 bg-white transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`h-1 w-6 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></div>
      </button>
    </div>
  );
};

const MobileMenu = ({ navLinks, isMenuOpen, ctaChildren, className }: { navLinks: NavLink[], isMenuOpen: boolean, ctaChildren: ReactNode, className?: string }) => {
  return (
    <>
      {isMenuOpen && (
        <div className={twMerge('fixed left-0 top-0 flex w-full flex-col justify-start bg-zinc-100 px-6 md:hidden', className)}>
          <div className='py-20 pb-6'>
            <NavigationMenu className="">
              <NavigationMenuList className="flex flex-col items-start space-x-0 space-y-6">
                <NavigationMenuItem className="text-xl font-semibold text-zinc-900">
                  <Link to="/" className="transition duration-300 ease-in-out hover:opacity-50">Home</Link>
                </NavigationMenuItem>
                {navLinks.map((navLink, index) => (
                  <NavigationMenuItem key={index} className="text-xl font-semibold text-zinc-900">
                    <Link to={navLink.href} className="transition duration-300 ease-in-out hover:opacity-50">
                      {navLink.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className='mt-6'>
              <AnchorButton variant="primary" href={''}>{ctaChildren}</AnchorButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Header.displayName = 'Header';
HeaderLayout.displayName = 'HeaderLayout';
HomeLink.displayName = 'HomeLink';
PcNavigation.displayName = 'PcNavigation';
HeaderButton.displayName = 'HeaderButton';
HamburgerIcon.displayName = 'HamburgerIcon';
MobileMenu.displayName = 'MobileMenu';

export { Header, HeaderLayout, HomeLink, PcNavigation, HeaderButton, HamburgerIcon, MobileMenu };
