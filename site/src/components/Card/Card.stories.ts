import { Meta, StoryObj } from '@storybook/react';
import { StoryBookCard } from './Card';

const meta: Meta<typeof StoryBookCard> = {
  title: 'Components/Card',
  component: StoryBookCard,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['row', 'col'],
      description: 'カードのレイアウトスタイル',
    },
    style: {
      control: { type: 'select' },
      options: ['none', 'border'],
      description: 'カードのスタイル',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover'],
      description: 'カードの状態（デフォルト、ホバー）',
    },
    size: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'カードのサイズ',
    },
    shape: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'カードの形状',
    },
    imgSrc: {
      control: 'text',
      description: '画像のURL',
      defaultValue: 'https://via.placeholder.com/400x200',
    },
    imgAlt: {
      control: 'text',
      description: '画像の代替テキスト',
      defaultValue: 'Sample Image',
    },
    title: {
      control: 'text',
      description: 'カードのタイトル',
      defaultValue: 'Sample Title',
    },
    description: {
      control: 'text',
      description: 'カードの説明',
      defaultValue: 'This is a description for the card component.',
    },
    link: {
      control: 'text',
      description: 'カード全体をリンクにする場合のリンク先URL',
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof StoryBookCard>;

export const Default: Story = {
  args: {
    variant: 'col',
    style: 'border',
    state: 'default',
    size: 'md',
    shape: 'md',
    imgSrc: 'https://via.placeholder.com/400x200',
    imgAlt: 'Sample Image',
    title: 'Default Card Title',
    description: 'This is a description for the default card.',
    link: '',
  },
};

export const RowLayout: Story = {
  args: {
    variant: 'row',
    style: 'border',
    state: 'default',
    size: 'md',
    shape: 'md',
    imgSrc: 'https://via.placeholder.com/400x200',
    imgAlt: 'Row Layout Image',
    title: 'Row Layout Card Title',
    description: 'This card uses a row layout.',
    link: '',
  },
};

export const NoBorder: Story = {
  args: {
    variant: 'col',
    style: 'none',
    state: 'default',
    size: 'md',
    shape: 'lg',
    imgSrc: 'https://via.placeholder.com/400x200',
    imgAlt: 'No Border Image',
    title: 'No Border Card Title',
    description: 'This card has no border and a larger border radius.',
    link: '',
  },
};

export const NoImage: Story = {
  args: {
    variant: 'col',
    style: 'border',
    state: 'default',
    size: 'md',
    shape: 'md',
    title: 'No Image Card Title',
    description: 'This card does not include an image.',
    link: '',
  },
};
