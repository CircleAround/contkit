import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { FormLabel as UIFormLabel } from '@/components/ui/form';
import { Badge } from '../../Badge/Badge'

const LabelVariants = cva(
  'font-semibold text-zinc-900',
  {
    variants: {
      state: {
        default: '',
        required: 'flex items-center',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'md',
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
        {children}
        {state === 'required' && (
          <>
            <Badge shape="sm" state="danger" className='ms-2'>必須</Badge>
          </>
        )}
      </UIFormLabel>
    )
  },
)

Label.displayName = 'Label'

export { Label }
