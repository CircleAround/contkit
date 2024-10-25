import { Meta, StoryObj } from '@storybook/react';
import { FormTextarea } from './FormTextarea';

// Storybook のメタ情報
const meta: Meta<typeof FormTextarea> = {
  title: 'Components/Form/FormTextarea',
  component: FormTextarea,
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
    value: {
      control: 'text',
      description: '入力されたテキストの値',
    },
    disabled: {
      control: 'boolean',
      description: 'テキストエリアを無効化する',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormTextarea>;

// 各ストーリーの定義

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

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'This textarea is disabled',
  },
};
