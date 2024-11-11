import * as React from "react"
import { twMerge } from 'tailwind-merge';
import { forwardRef, ComponentProps } from 'react';

type BadgelistProps = ComponentProps<'ul'> & {
  children?: React.ReactNode;
};

const Badgelist = forwardRef<HTMLUListElement, BadgelistProps>(({ className, children, ...others }, ref) => {
  const baseCn = 'flex flex-wrap gap-1'

  return (
    <ul
      className={twMerge(baseCn, className)}
      {...others}
      ref={ref}
    >
      {children}
    </ul>
  );
});


Badgelist.displayName = 'Badgelist';

export { Badgelist }
