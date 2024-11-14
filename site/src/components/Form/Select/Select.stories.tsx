import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Select, SelectContent, SelectItem } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
  argTypes: {
    className: {
      control: 'text',
      description: '追加のカスタムクラス',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'オプションを選択してください',
      description: 'セレクトボックスのプレースホルダーテキスト',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => {
    const selects = [
      { value: 'option1', name: 'オプション 1' },
      { value: 'option2', name: 'オプション 2' },
      { value: 'option3', name: 'オプション 3' },
    ];

    return (
      <Select placeholder={args.placeholder} className={args.className}>
        <SelectContent>
          <SelectItem selects={selects} value=''/>
        </SelectContent>
      </Select>
    );
  },
  args: {
    placeholder: 'オプションを選択してください',
    className: '',
  },
};
