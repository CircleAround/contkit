import React from 'react';
import { forwardRef, ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { cva, VariantProps } from 'class-variance-authority';

const LogoLinkVariants = cva(
  'relative z-50 transition duration-300 ease-in-out hover:opacity-50',
  {
    variants: {
      variant: {
        text: "text-2xl font-bold text-zinc-900 lg:text-3xl",
        image: "aspect-video w-20",
      },
    },
    defaultVariants: {
      variant: "text",
    },
  }
)

type LogoLinkProps = ComponentProps<'a'> & {
  text?: string;
  imgComponent?: React.ReactNode;
} & VariantProps<typeof LogoLinkVariants>;

const LogoLink = forwardRef<HTMLAnchorElement, LogoLinkProps>(
  ({ variant, text, imgComponent, href, className, ...others }, ref) => {
    return (
      <a
        href="/"
        aria-label="ホームへ戻る"
        className={twMerge(LogoLinkVariants({ variant }), className)}
        {...others}
        ref={ref}
      >
        {variant === 'text' && text}
        {variant === 'image' && imgComponent }
      </a>
    );
  }
);

LogoLink.displayName = 'LogoLink';

export { LogoLink };
