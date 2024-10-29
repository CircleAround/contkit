import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Checkbox as UICheckbox } from "@/components/ui/checkbox"

type CheckboxProps = ComponentProps<typeof UICheckbox> & {
  checkboxCaption?: string;
}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(({ id, className, checkboxCaption, ...others }, ref) => {
  const baseCn = 'border-zinc-400 w-5 h-5 data-[state=checked]:bg-green-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-0 focus-visible:ring-1 focus-visible:ring-blue-600 focus-visible:ring-offset-0';

    return (
      <label className="flex items-center space-x-2 cursor-pointer">
        <UICheckbox ref={ref} className={twMerge(baseCn, className)} {...others} />
        {checkboxCaption &&
          <span className="block text-zinc-900 text-sm cursor-pointer">{checkboxCaption}</span>
        }
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
