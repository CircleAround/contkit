import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Input as UIInput } from '@/components/ui/input';

type InputProps = ComponentProps<typeof UIInput>

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, children, ...others }, ref) => {
  const baseCn = 'border-zinc-300 h-11 text-zinc-900 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 placeholder:text-zinc-400'

    return (
      <UIInput
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      />
    )
  },
)

Input.displayName = 'Input'

export { Input }
