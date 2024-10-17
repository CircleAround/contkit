import { ComponentProps, ReactNode, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(
  'inline-flex min-h-11 items-center justify-center text-center align-middle font-semibold text-zinc-900',
  {
    variants: {
      variant: {
        primary: 'bg-zinc-900 text-white',
        secondary: 'border-2 border-zinc-900'
      },
      shape: {
        none: '',
        small: 'rounded-sm',
        medium: 'rounded-md',
        large: 'rounded-lg',
        full: 'rounded-full',
      },
      state: {
        default: 'transition duration-300 ease-in-out hover:opacity-50',
        disabled: 'pointer-events-none cursor-not-allowed opacity-25',
      },
      size: {
        small: 'px-5 py-3 text-sm leading-none',
        medium: 'px-5 py-3 text-base leading-none',
        large: 'px-6 py-4 text-lg leading-none',
        iconOnly: 'size-14',
      },
      iconPosition: {
        row: 'flex-row space-x-2',
        col: 'flex-col space-y-2',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      state: 'default',
      shape: 'large',
      size: 'medium',
      iconPosition: 'none'
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
  ({ variant, state, shape, size, iconPosition, className, children, ...others }, ref) => {

    return (
      <button
        className={twMerge(buttonStyles({ variant, state, shape, size, iconPosition }), className)}
        {...others}
        ref={ref}
      >
        {children}
      </button>
    )
  },
)

const AnchorButton = forwardRef<HTMLAnchorElement, AnchorButtonProps>(
  ({ variant, state, shape, size, iconPosition, className, children, ...others }, ref) => {

    return (
      <a
        role="button"
        className={twMerge(buttonStyles({ variant, state, shape, size, iconPosition }), className)}
        {...others}
        ref={ref}
      >
        {children}
      </a>
    )
  },
)

Button.displayName = 'Button'
AnchorButton.displayName = 'AnchorButton'

export { Button, AnchorButton }
