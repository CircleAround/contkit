import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { AnchorButton } from '../components/Button/Button'
import { ReactNode, useState } from 'react';

const navLinks = [
  { label: 'About', href: '/' },
  { label: 'Service', href: '/' },
  { label: 'Company', href: '/' },
];

const Header = ({children} : {children: ReactNode}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='w-full px-6 pt-7 md:fixed md:z-50 md:pt-6'>
      <div className='flex items-center justify-between'>
        {/* サイト名、ロゴ */}
        <a href='/' aria-label="ホームへ戻る" className="text-xl font-bold">{children}</a>

        {/* PC Navigation */}
        <NavigationMenu className="hidden md:flex lg:w-full">
          <NavigationMenuList className="flex justify-start space-x-4">
            {navLinks.map((navLink, index) => (
              <NavigationMenuItem key={index} className="text-sm font-semibold text-zinc-900">
                <a href={navLink.href} className="transition duration-300 ease-in-out hover:opacity-50">
                  {navLink.label}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* PC Button */}
        <div className="hidden md:block">
          <AnchorButton variant="primary" href={''}>CTA</AnchorButton>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="fixed right-6 top-4 z-50 md:hidden">
          <button type="button" onClick={toggleMenu} aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"} className={`flex size-12 flex-col items-center justify-center rounded-full bg-zinc-900 ${isMenuOpen ? 'justify-center' : ''}`}>
            <div className={`h-1 w-6 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></div>
            <div className={`my-1 h-1 w-6 bg-white transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-1 w-6 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
      <div className='fixed left-0 top-0 flex w-full flex-col justify-start bg-zinc-100 px-6 md:hidden'>
        <div className='py-20 pb-6'>
          <NavigationMenu className="">
            <NavigationMenuList className="flex flex-col items-start space-x-0 space-y-6">
              <NavigationMenuItem className="text-xl font-semibold text-zinc-900">
                <a href="/" className="transition duration-300 ease-in-out hover:opacity-50">Home</a>
              </NavigationMenuItem>
              {navLinks.map((navLink, index) => (
                <NavigationMenuItem key={index} className="text-xl font-semibold text-zinc-900">
                  <a href={navLink.href} className="transition duration-300 ease-in-out hover:opacity-50">
                    {navLink.label}
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className='mt-6'>
            <AnchorButton variant="primary" href={''}>CTA</AnchorButton>
          </div>
        </div>
      </div>
      )}
    </header>
  )
}

Header.displayName = 'Header'

export { Header }
