import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormMessage as UIFormMessage } from '@/components/ui/form';


type FormLabelProps = ComponentProps<typeof UIFormMessage>

const FormMessage = forwardRef<HTMLParagraphElement, FormLabelProps>(({ className, children, ...others }, ref) => {
    const baseCn = 'text-red-500'

    return (
      <UIFormMessage
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      />
    )
  },
)

FormMessage.displayName = 'FormMessage'

export { FormMessage }
