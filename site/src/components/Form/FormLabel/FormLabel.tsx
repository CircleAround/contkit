import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { FormLabel as UIFormLabel } from '@/components/ui/form';

const LabelVariants = cva(
  'cursor-pointer text-zinc-900',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

type LabelProps = ComponentProps<typeof UIFormLabel> & VariantProps<typeof LabelVariants>

const FormLabel = forwardRef<HTMLLabelElement, LabelProps>(({ size, className, children, ...others }, ref) => {

    return (
      <UIFormLabel
        className={twMerge(LabelVariants({ size }), className)}
        {...others}
        ref={ref}
      >
        {children}
      </UIFormLabel>
    )
  },
)

FormLabel.displayName = 'FormLabel'

export { FormLabel }