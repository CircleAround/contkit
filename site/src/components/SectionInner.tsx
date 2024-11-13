import { forwardRef, ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionInnerProps = ComponentProps<'div'> & {
  children: React.ReactNode;
};

const SectionInner = forwardRef<HTMLDivElement, SectionInnerProps>(({ className, children, ...others }, ref) => {
  const baseCn = 'container mx-auto px-6 md:px-10'

  return (
    <div
      className={twMerge(baseCn, className)}
      {...others}
      ref={ref}
    >
      {children}
    </div>
  )
})

SectionInner.displayName = 'SectionInner';

export { SectionInner };
