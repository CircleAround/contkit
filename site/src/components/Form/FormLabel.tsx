import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { FormLabel as UIFormLabel } from '@/components/ui/form';
import { Badge } from '../Badge/Badge'

const FormLabelVariants = cva(
  'text-zinc-900 font-semibold',
  {
    variants: {
      state: {
        default: '',
        required: 'flex items-center space-x-2',
      },
      size: {
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'sm',
    },
  }
);

type FormLabelProps = ComponentProps<typeof UIFormLabel> & VariantProps<typeof FormLabelVariants>

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(({ state, size, className, children, ...others }, ref) => {

    return (
      <UIFormLabel
        className={twMerge(FormLabelVariants({ state, size }), className)}
        {...others}
        ref={ref}
      >
        <span>{children}</span>
        {state === 'required' && (
          <Badge shape="full" state="danger">必須</Badge>
        )}
      </UIFormLabel>
    )
  },
)

FormLabel.displayName = 'FormLabel'

export { FormLabel }
