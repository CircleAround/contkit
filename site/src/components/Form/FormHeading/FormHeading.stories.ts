import { Meta, StoryObj } from '@storybook/react';
import { FormHeading } from './FormHeading';

const meta: Meta<typeof FormHeading> = {
  title: 'Components/Form/FormHeading',
  component: FormHeading,
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'required'],
      description: '見出しの状態 (デフォルトまたは必須)',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '見出しのサイズ',
    },
    children: {
      control: 'text',
      defaultValue: '見出しテキスト',
      description: '見出しの内容',
    },
    className: {
      control: 'text',
      description: 'カスタムクラス名を適用',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormHeading>;

export const Default: Story = {
  args: {
    state: 'default',
    size: 'md',
    children: 'フォーム見出し',
  },
};

export const Required: Story = {
  args: {
    state: 'required',
    size: 'md',
    children: '必須フォーム見出し',
  },
};

export const Small: Story = {
  args: {
    state: 'default',
    size: 'sm',
    children: '小さなフォーム見出し',
  },
};

export const Large: Story = {
  args: {
    state: 'default',
    size: 'lg',
    children: '大きなフォーム見出し',
  },
};
