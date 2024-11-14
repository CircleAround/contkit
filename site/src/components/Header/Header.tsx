import React from 'react';
import { twMerge } from 'tailwind-merge';
import { forwardRef, ComponentProps } from 'react';

// Header
type HeaderProps = ComponentProps<'header'> & {
  className?: string
}

const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className, children, ...others }, ref) => {
    const baseCn = 'fixed top-6 left-0 z-40 w-full';

    return (
      <header
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        {children}
      </header>
    );
  }
);
Header.displayName = 'Header';

// HeaderInner
type HeaderInnerProps = ComponentProps<'header'> & {
  className?: string
}

const HeaderInner = forwardRef<HTMLDivElement, HeaderInnerProps>(
  ({ className, children, ...others }, ref) => {
    const baseCn = 'flex items-center justify-between px-6 md:px-10';

    return (
      <div
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
HeaderInner.displayName = 'HeaderInner';

export { Header, HeaderInner };
