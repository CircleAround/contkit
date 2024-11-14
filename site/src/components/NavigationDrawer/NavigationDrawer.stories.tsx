import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NavigationDrawer, NavigationDrawerButton, HamburgerIcon } from './NavigationDrawer';

const meta: Meta<typeof NavigationDrawer> = {
  title: 'Components/NavigationDrawer',
  component: NavigationDrawer,
  argTypes: {
    className: {
      control: 'text',
      description: 'カスタムクラス名を適用します',
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavigationDrawer>;

export const Default: Story = {
  render: (args) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
      <NavigationDrawer className={args.className}>
        <NavigationDrawerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}>
          <HamburgerIcon isMenuOpen={isMenuOpen} />
        </NavigationDrawerButton>
      </NavigationDrawer>
    );
  },
  args: {
    className: 'md:block',
  },
};
