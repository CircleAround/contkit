import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
  argTypes: {
    className: {
      control: 'text',
      description: '追加のカスタムクラス',
    },
    selects: {
      control: 'object',
      description: 'Select に表示するオプションのリスト',
      defaultValue: [
        { value: 'option1', name: 'オプション 1' },
        { value: 'option2', name: 'オプション 2' },
        { value: 'option3', name: 'オプション 3' },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    selects: [
      { value: 'option1', name: 'オプション 1' },
      { value: 'option2', name: 'オプション 2' },
      { value: 'option3', name: 'オプション 3' },
    ],
  },
};
