import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Textarea as UITextarea } from '@/components/ui/textarea';

type TextareaProps = ComponentProps<typeof UITextarea>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({className, children, ...others }, ref) => {
  const baseCn = 'min-h-36 border-zinc-300 text-zinc-900 focus-visible:ring-1 focus-visible:ring-blue-600 focus-visible:ring-offset-0 placeholder:text-zinc-400'

    return (
      <UITextarea
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      />
    )
  },
)

Textarea.displayName = 'Textarea'

export { Textarea }
