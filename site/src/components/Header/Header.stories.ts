import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

// ストーリーのメタデータを定義
const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  argTypes: {
    homeLinkChildren: { control: 'text' },
    ctaChildren: { control: 'text' },
    navLinks: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

// Header全体のストーリー
export const DefaultHeader: Story = {
  args: {
    homeLinkChildren: 'My Logo',
    ctaChildren: 'Contact',
    navLinks: [
      { label: 'About', href: '/' },
      { label: 'Service', href: '/' },
      { label: 'Company', href: '/' },
    ],
  },
};
