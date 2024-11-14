import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderInner } from './Header';
import { LogoLink } from '../LogoLink';
import { Navigation, NavigationMenuList, NavigationMenuItem, NavigationLink } from '../Navigation/Navigation';
import { AnchorButton } from '../Button/Button';
import { NavigationDrawer, NavigationDrawerButton, HamburgerIcon } from '../NavigationDrawer/NavigationDrawer';
import { MobileMenu } from '../MobileMenu';
import { useState } from 'react';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;
export const DefaultHeader: Story = {
  render: () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const navLinks = [
      { label: 'About', href: '/' },
      { label: 'Service', href: '/' },
      { label: 'Company', href: '/' },
    ]

    return (
      <Header>
        <HeaderInner>
          <LogoLink href=''>
            <img
              src='https://placehold.jp/30/333333/ffffff/300x150.png?text=logo+image'
              alt=''
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
    );
  },
};
