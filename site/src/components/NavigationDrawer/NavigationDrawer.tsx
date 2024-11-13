import React from 'react';
import { twMerge } from 'tailwind-merge';
import { forwardRef, ComponentProps } from 'react';

// NavigationDrawer
type NavigationDrawerProps = ComponentProps<'div'> & {
  className?: string
}

const NavigationDrawer = forwardRef<HTMLDivElement, NavigationDrawerProps>(
  ({ className, children, ...others }, ref) => {
    const baseCn = 'z-50 md:hidden';

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

// NavigationDrawerButton
type NavigationDrawerButtonProps = ComponentProps<'header'> & {
  isMenuOpen: boolean,
  toggleMenu: () => void,
  className?: string
}

const NavigationDrawerButton = forwardRef<HTMLButtonElement, NavigationDrawerButtonProps>(
  ({ toggleMenu, isMenuOpen, className, children, ...others }, ref) => {
    const baseCn = 'flex size-12 flex-col items-center justify-center rounded-full bg-zinc-900';

    return (
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        className={twMerge(baseCn, isMenuOpen ? 'justify-center' : '', className)}
        {...others}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

// HamburgerIcon
type HamburgerIconProps = ComponentProps<'div'> & {
  isMenuOpen: boolean,
  className?: string
}

const HamburgerIcon = forwardRef<HTMLDivElement, HamburgerIconProps>(
  ({ isMenuOpen, className, ...others }, ref) => {
    const baseCn = 'h-1 w-6 bg-white transition-transform duration-300 ease-in-out';
    const bars = [
      isMenuOpen ? 'translate-y-2 rotate-45' : '',
      isMenuOpen ? 'opacity-0' : 'my-1',
      isMenuOpen ? '-translate-y-2 -rotate-45' : '',
    ];

    return (
      <>
        {bars.map((bar, index) => (
          <div
            key={index}
            className={twMerge(baseCn, bar, className)}
            {...others}
            ref={ref}
          ></div>
        ))}
      </>
    );
  }
);

NavigationDrawer.displayName = 'NavigationDrawer';
NavigationDrawerButton.displayName = 'NavigationDrawerButton';
HamburgerIcon.displayName = 'HamburgerIcon';

export { NavigationDrawer, NavigationDrawerButton, HamburgerIcon };
