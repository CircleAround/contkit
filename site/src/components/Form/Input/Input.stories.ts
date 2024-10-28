import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  argTypes: {
    className: {
      control: 'text',
      description: 'カスタムクラス名',
    },
    placeholder: {
      control: 'text',
      description: 'プレースホルダーのテキスト',
      defaultValue: 'Enter text...',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
      defaultValue: 'text',
      description: '入力タイプ',
    },
    value: {
      control: 'text',
      description: '入力値',
    },
    disabled: {
      control: 'boolean',
      description: '入力を無効化する',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Focus: Story = {
  args: {
    className: 'border-blue-500',
    placeholder: 'Enter text...',
  },
};

export const DisabledInput: Story = {
  args: {
    disabled: true,
    placeholder: 'This input is disabled',
  },
};
