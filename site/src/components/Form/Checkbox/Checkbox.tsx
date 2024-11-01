import React, { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Checkbox as UICheckbox } from "@/components/ui/checkbox";

type CheckboxProps = ComponentProps<typeof UICheckbox> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(({ className, checked, onCheckedChange, ...others }, ref) => {
  const baseCn = 'border-zinc-400 w-5 h-5 data-[state=checked]:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-0 focus-visible:ring-1 focus-visible:ring-blue-600 focus-visible:ring-offset-0';

  return (
    <UICheckbox
      ref={ref}
      className={twMerge(baseCn, className)}
      aria-checked={checked}
      onClick={() => onCheckedChange && onCheckedChange(!checked)}
      {...others}
    />
);
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
