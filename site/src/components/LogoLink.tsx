import React from 'react';
import { forwardRef, ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type LogoLinkProps = ComponentProps<'a'> & {
  children: React.ReactNode;
}

const LogoLink = forwardRef<HTMLAnchorElement, LogoLinkProps>(({ href, className, children, ...others }, ref) => {
  const baseCn = 'relative z-50 transition duration-300 ease-in-out hover:opacity-50'

    return (
      <a
        href={href}
        aria-label="ホームへ戻る"
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

LogoLink.displayName = 'LogoLink';

export { LogoLink };
