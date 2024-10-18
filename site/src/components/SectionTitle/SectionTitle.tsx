import * as React from "react"
import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const sectionTitleStyles = cva(
  // ベースのスタイル
  'text-xl font-bold leading-none tracking-tight text-zinc-900',
  {
    variants: {
      shape: {
        plain: '',
        underLine: 'relative w-fit pb-4 before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-20 before:bg-zinc-900 after:absolute after:-bottom-1 after:left-0 after:-z-10 after:h-1 after:w-full after:bg-gray-300',
        sideLine: 'flex items-center justify-center text-center before:mr-7 before:h-1 before:w-10 before:bg-zinc-900 after:ml-7 after:h-1 after:w-10 after:bg-zinc-900 before:lg:w-20 after:lg:w-20',
        speechBubble: 'relative flex items-center justify-center text-center before:mr-8 before:h-10 before:w-1 before:rotate-[-35deg] before:bg-zinc-900 after:ml-8 after:h-10 after:w-1 after:rotate-[35deg] after:bg-zinc-900',
        solid: 'inline-block bg-gray-300 px-4 py-2',
      },
      size: {
        large: 'lg:text-2xl lg:leading-none',
        xlarge: 'lg:text-4xl lg:leading-none',
      },
    },
    defaultVariants: {
      shape: 'plain',
      size: 'large',
    },
  }
);

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof sectionTitleStyles>;

const SectionTitle = ({ children, shape, size, className }: SectionTitleProps) => {
  return <h2 className={twMerge(sectionTitleStyles({ shape, size }), className)}>{children}</h2>;
};

SectionTitle.displayName = 'SectionTitle';

export { SectionTitle };
