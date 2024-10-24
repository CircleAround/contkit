import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Input as UIInput } from '@/components/ui/input';

type FormInputProps = ComponentProps<typeof UIInput>

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ className, children, ...others }, ref) => {
  const baseCn = 'h-11 text-zinc-900 focus-visible:ring-1 focus-visible:ring-blue-600 focus-visible:ring-offset-0 placeholder:text-zinc-400'

    return (
      <UIInput
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      />
    )
  },
)

FormInput.displayName = 'FormInput'

export { FormInput }
