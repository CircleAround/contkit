import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  argTypes: {
    caption: {
      control: 'text',
      description: 'Checkbox のキャプションテキスト',
      defaultValue: 'Agree to terms',
    },
    className: {
      control: 'text',
      description: 'Checkbox のカスタムクラス名',
    },
    checked: {
      control: 'boolean',
      description: 'Checkbox のチェック状態',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    caption: 'I agree to the terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    caption: 'I agree to the terms and conditions',
    checked: true,
  },
};
