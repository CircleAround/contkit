import { Meta, StoryObj } from '@storybook/react';
import { FormMessage } from './FormMessage';

const meta: Meta<typeof FormMessage> = {
  title: 'Components/FormMessage',
  component: FormMessage,
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'danger'],
      description: 'メッセージの状態に応じたスタイル',
    },
    children: {
      control: 'text',
      defaultValue: 'これはフォームメッセージです',
      description: '表示するメッセージ内容',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormMessage>;

export const Default: Story = {
  args: {
    state: 'default',
    children: 'これは通常のフォームメッセージです。',
  },
};

export const Danger: Story = {
  args: {
    state: 'danger',
    children: 'これはエラーメッセージです。',
  },
};
