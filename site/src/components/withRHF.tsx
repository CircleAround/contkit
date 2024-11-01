import React from 'react';
import { action } from '@storybook/addon-actions'
import { ReactNode, FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

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

export default function withRHF(showSubmitButton: boolean) {
  // eslint-disable-next-line func-names
  return function (Story: FC) {
    return (
      <StorybookFormProvider>
        <Story />
        {showSubmitButton && <button type="submit">Submit</button>}
      </StorybookFormProvider>
    )
  }
}