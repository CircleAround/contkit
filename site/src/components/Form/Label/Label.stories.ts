import { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Form/Label',
  component: Label,
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'required'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    children: {
      control: 'text',
      defaultValue: 'ラベルテキスト',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    state: 'default',
    size: 'md',
    children: 'ラベルテキスト',
  },
};

export const Required: Story = {
  args: {
    state: 'required',
    size: 'md',
    children: 'ラベルテキスト',
  },
};
