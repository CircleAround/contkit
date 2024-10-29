import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  Select as UISelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SelectProps = ComponentProps<typeof UISelect> & {
  onValueChange?: (value: string) => void;
  className?: string;
  selects?: { value: string, name: string }[];
}

const Select = forwardRef<HTMLButtonElement, SelectProps>(({ onValueChange, selects = [], className, ...others }, ref) => {
  const baseCn = 'border-zinc-300 h-11 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 focus-visible:ring-offset-0';

    return (
      <UISelect onValueChange={onValueChange}>
        <SelectTrigger
          className={twMerge(baseCn, className)}
          {...others}
          ref={ref}
        >
          <SelectValue placeholder="選択してください" />
        </SelectTrigger>
        <SelectContent className='border-zinc-300 text-zinc-900'>
          {selects.map((select, index) => (
            <SelectItem
              key={index}
              value={select.value}
            >
              {select.name}
            </SelectItem>
          ))}
        </SelectContent>
      </UISelect>
    )
  },
)

Select.displayName = 'Select'

export { Select }
