import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { Badge } from '../../Badge/Badge'

const formHeadingVariants = cva(
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

type FormHeadingProps = ComponentProps<'h3'> & VariantProps<typeof formHeadingVariants>

const FormHeading = forwardRef<HTMLHeadingElement, FormHeadingProps>(({ state, size, className, children, ...others }, ref) => {

    return (
      <h3
        className={twMerge(formHeadingVariants({ state, size }), className)}
        {...others}
        ref={ref}
      >
        {children}
        {state === 'required' && (
          <>
            <Badge shape="sm" state="danger" className='ms-2'>必須</Badge>
          </>
        )}
      </h3>
    )
  },
)

FormHeading.displayName = 'FormHeading'

export { FormHeading }
