import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { ReactNode, FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormMessage } from './FormMessage';

// FormProviderラッパーを提供する関数
function StorybookFormProvider({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}
      >
        {children}
      </form>
    </FormProvider>
  )
}

// withRHFデコレーター関数
function withRHF(showSubmitButton: boolean) {
  return function (Story: FC) {
    return (
      <StorybookFormProvider>
        <Story />
        {showSubmitButton && <button type="submit">Submit</button>}
      </StorybookFormProvider>
    );
  };
}

const meta: Meta<typeof FormMessage> = {
  title: 'Components/Form/FormMessage',
  component: FormMessage,
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'danger'],
      description: 'メッセージの状態に応じたスタイル',
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

type Story = StoryObj<typeof FormMessage>;

export const Default: Story = {
  args: {
    state: 'default',
    children: 'これは通常のフォームメッセージです。',
  },
};

export const Danger: Story = {
  args: {
    state: 'danger',
    children: 'これはエラーメッセージです。',
  },
};
