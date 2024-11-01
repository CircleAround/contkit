import { Meta, StoryObj } from '@storybook/react';
import { FormLabel } from './FormLabel';
import withRHF from '../../withRHF'

const meta: Meta<typeof FormLabel> = {
  title: 'Components/Form/FormLabel',
  component: FormLabel,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'ラベルのサイズ',
    },
    children: {
      control: 'text',
      defaultValue: 'ラベルテキスト',
      description: 'ラベルに表示するテキスト',
    },
    className: {
      control: 'text',
      description: '追加のカスタムクラス名',
    },
  },
  decorators: [withRHF(false)],
};

export default meta;

type Story = StoryObj<typeof FormLabel>;

// 各バリエーションのストーリー

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'デフォルトのラベル',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: '中くらいのラベル',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: '大きいラベル',
  },
};
