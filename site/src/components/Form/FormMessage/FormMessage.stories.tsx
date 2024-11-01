import { Meta, StoryObj } from '@storybook/react';
import { FormMessage } from './FormMessage';
import withRHF from '../../withRHF'

const meta: Meta<typeof FormMessage> = {
  title: 'Components/Form/FormMessage',
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
  decorators: [withRHF(false)],
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
