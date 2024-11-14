import React from 'react';
import { twMerge } from 'tailwind-merge';
import { forwardRef, ComponentProps } from 'react';

type MobileMenuProps = ComponentProps<'div'> & {
  isMenuOpen: boolean,
  className?: string
}

const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ isMenuOpen, className, children, ...others }, ref) => {
    const baseCn = 'fixed left-0 top-0 flex w-full h-screen flex-col justify-start bg-zinc-100 px-6 pb-6 pt-24 md:hidden'
    const animationCn = 'transition-all duration-500 ease-in-out';

    return (
      <div
        className={twMerge(baseCn, animationCn, isMenuOpen ? '-translate-x-0 opacity-100' : 'translate-x-full opacity-0', className)}
        {...others}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

MobileMenu.displayName = 'MobileMenu';

export { MobileMenu };