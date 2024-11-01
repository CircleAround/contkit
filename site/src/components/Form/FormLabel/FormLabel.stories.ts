import { Meta, StoryObj } from '@storybook/react';
import { FormLabel } from './FormLabel';

const meta: Meta<typeof FormLabel> = {
  title: 'Components/Form/FormLabel',
  component: FormLabel,
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

type Story = StoryObj<typeof FormLabel>;

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
