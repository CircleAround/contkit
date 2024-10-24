import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { Label as UILabel } from '@/components/ui/label';
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
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'md',
    },
  }
);

type FormLabelProps = ComponentProps<typeof UILabel> & VariantProps<typeof FormLabelVariants>

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(({ state, size, className, children, ...others }, ref) => {

    return (
      <UILabel
        className={twMerge(FormLabelVariants({ state, size }), className)}
        {...others}
        ref={ref}
      >
        <span>{children}</span>
        {state === 'required' && (
          <Badge shape="full" state="success">必須</Badge>
        )}
      </UILabel>
    )
  },
)

FormLabel.displayName = 'FormLabel'

export { FormLabel }
