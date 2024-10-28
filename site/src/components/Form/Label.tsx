import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { FormLabel as UIFormLabel } from '@/components/ui/form';
import { Badge } from '../Badge/Badge'

const LabelVariants = cva(
  'font-semibold text-zinc-900',
  {
    variants: {
      state: {
        default: '',
        required: 'flex items-center space-x-2',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'sm',
    },
  }
);

type LabelProps = ComponentProps<typeof UIFormLabel> & VariantProps<typeof LabelVariants>

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ state, size, className, children, ...others }, ref) => {

    return (
      <UIFormLabel
        className={twMerge(LabelVariants({ state, size }), className)}
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

Label.displayName = 'Label'

export { Label }
