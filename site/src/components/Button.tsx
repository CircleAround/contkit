import { ComponentProps, ReactNode, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(
  'text-zinc-900 font-semibold text-center transition duration-300 ease-in-out hover:opacity-75',
  {
    variants: {
      variant: {
        primary: 'bg-zinc-900 text-white',
        secondary: 'border-2 border-zinc-900'
      },
      rounded: {
        none: '',
        small: 'rounded-sm',
        medium: 'rounded-md',
        large: 'rounded-lg',
        full: 'rounded-full',
      },
      state: {
        default: '',
        disabled: 'opacity-25 cursor-not-allowed pointer-events-none',
      },
      size: {
        small: 'px-5 py-3 text-sm leading-none',
        medium: 'px-5 py-3 text-base leading-none',
        large: 'px-6 py-4 text-lg leading-none',
      },
      icon: {
        on: 'flex justify-center items-center space-x-2',
        off: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      state: 'default',
      rounded: 'large',
      size: 'medium',
      icon: 'off'
    },
  }
);

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof buttonStyles>

type ButtonProps = ComponentProps< 'button' > & BaseButtonProps
type AnchorButtonProps = ComponentProps< 'a' > & BaseButtonProps

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, state, rounded, size, icon, className, children, ...others }, ref) => {

    return (
      <button className={twMerge(buttonStyles({ variant, state, rounded, size, icon }), className)} {...others} ref={ref}>
        {children}
      </button>
    )
  },
)

const AnchorButton = forwardRef<HTMLAnchorElement, AnchorButtonProps>(
  ({ variant, state, rounded, size, icon, className, children, ...others }, ref) => {

    return (
      <a className={twMerge(buttonStyles({ variant, state, rounded, size, icon }), className)} {...others} ref={ref}>
        {children}
      </a>
    )
  },
)

Button.displayName = 'Button'
AnchorButton.displayName = 'AnchorButton'

export { Button, AnchorButton }
