import React from 'react';
import { forwardRef, ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type FooterProps = ComponentProps<'footer'> & {
  children?: React.ReactNode;
};

const Footer = forwardRef<HTMLElement, FooterProps>(({ className, children, ...others }, ref) => {
  const baseCn = 'py-10 bg-zinc-900';

  return (
    <footer
      className={twMerge(baseCn, className)}
      {...others}
      ref={ref}
    >
      {children}
    </footer>
  );
});

Footer.displayName = 'Footer';

export { Footer };
