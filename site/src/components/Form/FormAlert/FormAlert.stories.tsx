import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FormAlert } from './FormAlert';
import withRHF from '../../withRHF';

const meta: Meta<typeof FormAlert> = {
  title: 'Components/Form/FormAlert',
  component: FormAlert,
  argTypes: {
    formAlertclassName: {
      control: 'text',
      description: 'FormAlertコンテナのカスタムクラス名',
    },
    iconClassName: {
      control: 'text',
      description: 'AlertIconのカスタムクラス名',
    },
    messageClassName: {
      control: 'text',
      description: 'FormMessageのカスタムクラス名',
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

type Story = StoryObj<typeof FormAlert>;

export const Default: Story = {
  args: {
    formAlertclassName: '',
    iconClassName: '',
    messageClassName: '',
    children: 'バリデーションエラーのメッセージです。',
  },
};
