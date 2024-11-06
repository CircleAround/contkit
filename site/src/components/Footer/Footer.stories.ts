import { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const defaultNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    logoLinkVariant: {
      control: { type: 'select' },
      options: ['text', 'image'],
      description: 'ロゴリンクの表示タイプ（テキストまたは画像）',
    },
    logoText: {
      control: 'text',
      description: 'テキスト形式のロゴリンクの表示テキスト',
    },
    logoImgSrc: {
      control: 'text',
      description: '画像形式のロゴリンクの画像ソース',
    },
    imgAlt: {
      control: 'text',
      description: 'ロゴ画像の代替テキスト',
    },
    navLinks: {
      control: 'object',
      description: 'ナビゲーションリンクのリスト',
    },
  },
  args: {
    navLinks: defaultNavLinks,
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const TextLogo: Story = {
  args: {
    logoLinkVariant: 'text',
    logoText: 'Company Name',
    navLinks: defaultNavLinks
  },
};

export const ImageLogo: Story = {
  args: {
    logoLinkVariant: 'image',
    logoImgSrc: 'https://placehold.jp/30/333333/ffffff/300x150.png?text=logo+image',
    imgAlt: 'Company Logo',
    navLinks: defaultNavLinks,
  },
};
