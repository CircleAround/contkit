import React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  Select as UISelect,
  SelectContent as UISelectContent,
  SelectItem as UISelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SelectProps = ComponentProps<typeof UISelect> & {
  onValueChange?: (value: string) => void;
  className?: string;
  placeholder: string;
}

const Select = forwardRef<HTMLButtonElement, SelectProps>(({ onValueChange, className, placeholder, children, ...others }, ref) => {
  const baseCn = 'border-zinc-300 h-11 text-zinc-900 placeholder:text-zinc-400';
  const focusCn = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2';

    return (
      <UISelect onValueChange={onValueChange}>
        <SelectTrigger
          className={twMerge(baseCn, focusCn, className)}
          {...others}
          ref={ref}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        {children}
        </UISelect>
    )
  },
)
Select.displayName = 'Select'

type SelectContentProps = ComponentProps<typeof UISelectContent> & {
  className?: string;
}

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(({ className, children, ...others }, ref) => {
  const baseCn = 'border-zinc-300';

    return (
      <UISelectContent
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        {children}
      </UISelectContent>
    )
  },
)
SelectContent.displayName = 'SelectContent'

type SelectItemProps = ComponentProps<typeof UISelectItem> & {
  selects?: { value: string, name: string }[];
  className?: string;
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(({ selects = [], className }, ref) => {
  const baseCn = 'text-zinc-900';

    return (
      <>
        {selects.map((select) => (
          <UISelectItem
            key={select.name}
            value={select.value}
            className={twMerge(baseCn, className)}
            ref={ref}
          >
            {select.name}
          </UISelectItem>
        ))}
      </>
    )
  },
)
SelectItem.displayName = 'SelectItem'

export { Select, SelectContent, SelectItem }
