import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { FormMessage as UIFormMessage } from '@/components/ui/form';
import { useFormField } from "@/components/ui/form"
import { TriangleAlert } from 'lucide-react';

const FormMessageVariants = cva(
  'text-zinc-900',
  {
    variants: {
      state: {
        default: '',
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
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

    return (
      <div className='flex items-center'>
        {state === 'danger' && <TriangleAlert className='mr-1 w-6 h-6 stroke-red-500'/>}
        <UIFormMessage
        className={twMerge(FormMessageVariants({ state }), className)}
          id={formMessageId}
          {...others}
          ref={ref}
        >
          {children}
        </UIFormMessage>
      </div>
    )
  },
)

FormMessage.displayName = 'FormMessage'

export { FormMessage }
