import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription
} from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
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
    link: {
      control: 'text',
      description: 'カード全体をリンクにする場合のリンク先URL',
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardImage imgSrc='https://via.placeholder.com/400x200' imgAlt='Sample Image' />
      <CardContent>
        <CardTitle>Default Card Title</CardTitle>
        <CardDescription>This is a description for the default card.</CardDescription>
      </CardContent>
    </Card>
  ),
  args: {
    variant: 'col',
    style: 'border',
    state: 'default',
    size: 'md',
    shape: 'md',
    link: '',
  },
};

export const RowLayout: Story = {
  render: (args) => (
    <Card {...args}>
      <CardImage imgSrc='https://via.placeholder.com/400x200' imgAlt='Sample Image' />
      <CardContent>
        <CardTitle>Row Layout Card Title</CardTitle>
        <CardDescription>This card uses a row layout.</CardDescription>
      </CardContent>
    </Card>
  ),
  args: {
    variant: 'row',
  },
};

export const NoBorder: Story = {
  render: (args) => (
    <Card {...args}>
      <CardImage imgSrc='https://via.placeholder.com/400x200' imgAlt='Sample Image' />
      <CardContent>
        <CardTitle>No Border Card Title</CardTitle>
        <CardDescription>This card has no border and a larger border radius.</CardDescription>
      </CardContent>
    </Card>
  ),
  args: {
    style: 'none',
    shape: 'lg',
  },
};

export const NoImage: Story = {
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <CardTitle>No Image Card Title</CardTitle>
        <CardDescription>This card does not include an image.</CardDescription>
      </CardContent>
    </Card>
  ),
};
