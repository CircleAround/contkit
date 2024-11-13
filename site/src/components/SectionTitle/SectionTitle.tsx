import * as React from "react"
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ComponentProps, forwardRef } from 'react';

const sectionTitleVariants = cva(
  'text-xl font-bold leading-none tracking-tight text-zinc-900 lg:text-2xl lg:leading-none',
  {
    variants: {
      shape: {
        plain: '',
        underLine: 'relative w-fit pb-4 before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-20 before:bg-zinc-900 after:absolute after:-bottom-1 after:left-0 after:-z-10 after:h-1 after:w-full after:bg-gray-300',
        sideLine: 'flex items-center justify-center text-center before:mr-7 before:h-1 before:w-10 before:bg-zinc-900 after:ml-7 after:h-1 after:w-10 after:bg-zinc-900 before:lg:w-20 after:lg:w-20',
        speechBubble: 'relative flex items-center justify-center text-center before:mr-8 before:h-10 before:w-1 before:rotate-[-35deg] before:bg-zinc-900 after:ml-8 after:h-10 after:w-1 after:rotate-[35deg] after:bg-zinc-900',
        solid: 'inline-block bg-gray-300 px-4 py-2',
        widthSubtitle: 'flex flex-col justify-center',
      },
    },
    defaultVariants: {
      shape: 'plain',
    },
  }
);

type SectionTitleProps = ComponentProps< 'h2' > & {
  className?: string;
} & VariantProps<typeof sectionTitleVariants>;

const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ shape, className, children, ...others }, ref) => {

    return (
      <h2
        className={twMerge(sectionTitleVariants({ shape }), className)}
        {...others}
        ref={ref}
      >
        {children}
      </h2>
    )
  },
)

type SectionSubTitleProps = ComponentProps< 'p' > & {
  className?: string;
}

const SectionSubTitle = forwardRef<HTMLParagraphElement, SectionSubTitleProps>(
  ({ className, children, ...others }, ref) => {
    const baseCn = 'text-sm text-zinc-500'

    return (
      <p
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        {children}
      </p>
    )
  },
)


SectionTitle.displayName = 'SectionTitle';
SectionSubTitle.displayName = 'SectionSubTitle';

export { SectionTitle, SectionSubTitle };
