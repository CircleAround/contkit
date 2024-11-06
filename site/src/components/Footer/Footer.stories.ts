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
    copyright: {
      control: 'text',
      description: 'フッターの著作権表示',
      defaultValue: '© 2024 CIRCLE AROUND Inc.',
    },
  },
  args: {
    navLinks: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

// Footerのテキストロゴバリエーションのストーリー
export const TextLogoFooter: Story = {
  args: {
    logoLinkVariant: 'text',
    logoText: 'Company Name',
    navLinks: defaultNavLinks,
    copyright: '© 2024 CIRCLE AROUND Inc.',
  },
};

// Footerの画像ロゴバリエーションのストーリー
export const ImageLogoFooter: Story = {
  args: {
    logoLinkVariant: 'image',
    logoImgSrc: 'https://placehold.jp/30/333333/ffffff/300x150.png?text=logo+image',
    imgAlt: 'Company Logo',
    navLinks: defaultNavLinks,
    copyright: '© 2024 CIRCLE AROUND Inc.',
  },
};

