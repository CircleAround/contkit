import * as React from "react"
import { twMerge } from 'tailwind-merge';
import { forwardRef, ComponentProps } from 'react';

type BadgeListProps = ComponentProps<'ul'> & {
  children?: React.ReactNode;
};

const BadgeList = forwardRef<HTMLUListElement, BadgeListProps>(({ className, children, ...others }, ref) => {
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


BadgeList.displayName = 'BadgeList';

export { BadgeList }
