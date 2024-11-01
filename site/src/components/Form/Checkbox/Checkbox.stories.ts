import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'チェックボックスの選択状態',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
  },
};
