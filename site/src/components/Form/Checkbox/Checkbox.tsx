import React, { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Checkbox as UICheckbox } from "@/components/ui/checkbox";

type CheckboxProps = ComponentProps<typeof UICheckbox> & {
  caption?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(({ className, caption, checked, onCheckedChange, ...others }, ref) => {
  const baseCn = 'border-zinc-400 w-5 h-5 data-[state=checked]:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-0 focus-visible:ring-1 focus-visible:ring-blue-600 focus-visible:ring-offset-0';

  return (
    <label className="flex cursor-pointer items-center space-x-2">
      <UICheckbox
        ref={ref}
        className={twMerge(baseCn, className)}
        aria-checked={checked}
        onClick={() => onCheckedChange && onCheckedChange(!checked)}
        {...others}
      />
      {caption && <span className="text-sm text-zinc-900">{caption}</span>}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
