import { ComponentProps, ReactNode, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(
  'inline-flex justify-center items-center min-h-11 text-zinc-900 font-semibold text-center align-middle',
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
        default: 'transition duration-300 ease-in-out hover:opacity-50',
        disabled: 'opacity-25 cursor-not-allowed pointer-events-none',
      },
      size: {
        small: 'px-5 py-3 text-sm leading-none',
        medium: 'px-5 py-3 text-base leading-none',
        large: 'px-6 py-4 text-lg leading-none',
        iconOnly: 'w-14 h-14',
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
      rounded: 'large',
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
  ({ variant, state, rounded, size, iconPosition, className, children, ...others }, ref) => {

    return (
      <button
        className={twMerge(buttonStyles({ variant, state, rounded, size, iconPosition }), className)}
        {...others}
        ref={ref}
        disabled={state === 'disabled'}
        aria-disabled={state === 'disabled' ? 'true' : undefined}
      >
        {children}
      </button>
    )
  },
)

const AnchorButton = forwardRef<HTMLAnchorElement, AnchorButtonProps>(
  ({ variant, state, rounded, size, iconPosition, className, children, ...others }, ref) => {

    return (
      <a
        role="button"
        className={twMerge(buttonStyles({ variant, state, rounded, size, iconPosition }), className)}
        {...others}
        ref={ref}
        aria-disabled={state === 'disabled' ? 'true' : undefined}
        tabIndex={state === 'disabled' ? -1 : undefined}
      >
        {children}
      </a>
    )
  },
)

Button.displayName = 'Button'
AnchorButton.displayName = 'AnchorButton'

export { Button, AnchorButton }
