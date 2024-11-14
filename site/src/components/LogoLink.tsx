import React from 'react';
import { forwardRef, ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type LogoLinkProps = ComponentProps<'a'> & {
  children?: React.ReactNode;
}

const baseCn = 'transition duration-300 ease-in-out hover:opacity-50'
const textCn = 'text-2xl font-bold text-zinc-900 lg:text-3xl'
const imageCn ='aspect-video w-20'

const LogoLink = forwardRef<HTMLAnchorElement, LogoLinkProps>(
  ({ href, className, children, ...others }, ref) => {
    const contentCn = typeof (children)  === 'string' ? textCn : imageCn;

    return (
      <a
        href={href}
        className={twMerge(baseCn, contentCn, className)}
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
