import { ComponentProps, ReactNode, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(
  'py-2 px-4 text-zinc-900 font-semibold text-sm text-center transition-colors',
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
        large: '',
        xlarge: '',
      },
      icon: {
        on: 'flex justify-center items-center space-x-2',
        off: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      state: 'default',
      rounded: 'none',
      size: 'large',
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
