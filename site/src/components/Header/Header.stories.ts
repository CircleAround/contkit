import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
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
    ctaChildren: {
      control: 'text',
      description: 'CTAボタンに表示するテキスト',
    },
    navLinks: {
      control: 'object',
      description: 'ナビゲーションリンクのリスト',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const DefaultHeader: Story = {
  args: {
    logoLinkVariant: 'text',
    logoText: 'My Logo',
    ctaChildren: 'Contact',
    navLinks: [
      { label: 'About', href: '/' },
      { label: 'Service', href: '/' },
      { label: 'Company', href: '/' },
    ],
  },
};

export const ImageLogoHeader: Story = {
  args: {
    logoLinkVariant: 'image',
    logoImgSrc: 'https://placehold.jp/30/333333/ffffff/300x150.png?text=logo+image',
    imgAlt: 'Logo Image',
    ctaChildren: 'Contact',
    navLinks: [
      { label: 'About', href: '/' },
      { label: 'Service', href: '/' },
      { label: 'Company', href: '/' },
    ],
  },
};
