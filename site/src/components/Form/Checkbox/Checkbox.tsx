import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Checkbox as UICheckbox } from "@/components/ui/checkbox"
import { Label } from '@/components/ui/label';

type CheckboxProps = ComponentProps<typeof UICheckbox> & {
  checkboxCaption?: string;
}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(({ id, className, checkboxCaption, ...others }, ref) => {
  const baseCn = 'border-zinc-400';

    return (
      <label className="flex items-center space-x-2 cursor-pointer">
        <UICheckbox id={id} ref={ref} className={twMerge(baseCn, className)} {...others} />
        {checkboxCaption &&
          <span className="block text-zinc-900 text-sm cursor-pointer">{checkboxCaption}</span>
        }
      </label>
    )
  },
)

type CheckboxListProps = CheckboxProps & {
  checkboxCaption?: string;
  checkboxitems: { caption: string }[];
}

const CheckboxList = forwardRef<HTMLButtonElement, CheckboxListProps>(({ checkboxitems = [], className, checkboxCaption, ...others }, ref) => {

    return (
      <ul className="space-y-1">
        {checkboxitems.map((checkboxitem, index) => (
          <li key={index} className="">
            <Checkbox checkboxCaption={checkboxitem.caption}/>
          </li>
        ))}
      </ul>
    )
  },
)

Checkbox.displayName = 'Checkbox'
CheckboxList.displayName = 'CheckboxList'

export { Checkbox, CheckboxList }
