import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { FormMessage as UIFormMessage } from '@/components/ui/form';

const FormMessageVariants = cva(
  '',
  {
    variants: {
      state: {
        default: 'text-zinc-900',
        danger: 'text-red-500',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

type FormMessageProps = ComponentProps<typeof UIFormMessage> & VariantProps<typeof FormMessageVariants>

const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(({ state, className, children, ...others }, ref) => {

    return (
      <UIFormMessage
        className={twMerge(FormMessageVariants({ state }), className)}
        {...others}
        ref={ref}
      />
    )
  },
)

FormMessage.displayName = 'FormMessage'

export { FormMessage }
