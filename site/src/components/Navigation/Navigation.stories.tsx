import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Navigation, NavigationMenuList, NavigationMenuItem, NavigationLink } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    className: {
      control: 'text',
      description: 'ナビゲーションのカスタムクラス',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const ResponsiveNav: Story = {
  render: (args) => {
    const navLinks = [
      { href: '/', label: 'Home' },
      { href: '/', label: 'About' },
      { href: '/', label: 'Services' },
      { href: '/', label: 'Contact' },
    ];

    return (
      <Navigation className={args.className}>
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
    );
  },
  args: {
    className: '',
  },
};
