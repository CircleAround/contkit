import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const sectionTitleStyles = cva(
  // ベースのスタイル
  'text-zinc-900 font-bold text-xl tracking-tight',
  {
    variants: {
      variant: {
        plain: '',
        underLine: 'relative pb-4 w-fit before:absolute before:-bottom-1 before:left-0 before:w-20 before:h-1 before:bg-zinc-900 after:absolute after:-bottom-1 after:left-0 after:-z-10 after:w-full after:h-1 after:bg-gray-300',
        sideLine: 'flex justify-center items-center text-center before:w-10 before:lg:w-20 before:h-1 before:bg-zinc-900 before:mr-7 after:w-10 after:lg:w-20 after:h-1 after:bg-zinc-900 after:ml-7',
        speechBubble: 'flex justify-center items-center text-center relative before:w-1 before:h-10 before:bg-zinc-900 before:mr-8 before:rotate-[-35deg] after:w-1 after:h-10 after:bg-zinc-900 after:ml-8 after:rotate-[35deg]',
        solid: 'inline-block px-4 py-2 bg-gray-300',
      },
      size: {
        large: 'lg:text-2xl',
        xlarge: 'lg:text-4xl',
      },
    },
    defaultVariants: {
      variant: 'plain',
      size: 'large',
    },
  }
);

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof sectionTitleStyles>;

const SectionTitle = ({ children, variant, size, className }: SectionTitleProps) => {
  return <h2 className={twMerge(sectionTitleStyles({ variant, size }), className)}>{children}</h2>;
};

SectionTitle.displayName = 'SectionTitle';

export { SectionTitle };
