import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormMessage as UIFormMessage } from '@/components/ui/form';
import { useFormField } from "@/components/ui/form"
import { TriangleAlert } from 'lucide-react';

type FormAlertProps = ComponentProps<typeof UIFormMessage> & {
  formAlertclassName?: string;
  iconClassName?: string;
  messageClassName?: string;
};

const FormAlert = forwardRef<HTMLDivElement, FormAlertProps>(({ formAlertclassName, iconClassName, messageClassName, children, ...others }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children
  const baseCn = 'flex items-center space-x-2'

  if (!body) {
    return null
  }

    return (
      <div
        className={twMerge(baseCn, formAlertclassName)}
        {...others}
        ref={ref}
      >
        <AlertIcon className={iconClassName}/>
        <FormMessage id={formMessageId} className={messageClassName}/>
      </div>
    )
  },
)

type FormMessageProps = ComponentProps<typeof UIFormMessage>

const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(({ className, children, ...others }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children
  const baseCn = 'text-red-500'

  if (!body) {
    return null
  }

  return (
      <UIFormMessage
      className={twMerge(baseCn, className)}
        id={formMessageId}
        {...others}
        ref={ref}
      >
        {children}
      </UIFormMessage>
  )
})

type AlertIconProps = ComponentProps<'svg'>

const AlertIcon = forwardRef<SVGSVGElement, AlertIconProps>(({ className, ...others }, ref) => {
  const baseCn = 'size-6 stroke-red-500'

  return (
    <TriangleAlert
      className={twMerge(baseCn, className)}
      {...others}
      ref={ref}
    />
  )
})

FormAlert.displayName = 'FormAlert'
FormMessage.displayName = 'FormMessage'
AlertIcon.displayName = 'AlertIcon'

export { FormAlert, FormMessage, AlertIcon }
