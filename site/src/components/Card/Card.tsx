import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import {
  Card as UICard,
  CardTitle as UICardTitle,
  CardContent as UICardContent,
} from '@/components/ui/card';
import { Link } from 'gatsby';
import { twMerge } from 'tailwind-merge';

const cardVariants = cva(
  'relative w-full h-full rounded-lg bg-white text-zinc-900 shadow-sm',
  {
    variants: {
      variant: {
        row: 'flex flex-col md:flex-row gap-4',
        col: 'flex flex-col',
      },
      state: {
        default: '',
        hover: 'group',
      },
      size: {
        sm: 'p-2',
        md: 'p-4',
        lg: 'p-6',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'col',
      state: 'default',
      size: 'md',
      rounded: 'md',
    },
  }
);

const imageVariants = cva(
  'overflow-hidden rounded-lg',
  {
    variants: {
      variant: {
        row: 'w-full h-auto md:max-w-60',
        col: 'w-full h-auto',
      },
    },
    defaultVariants: {
      variant: 'col',
    },
  }
);

type CardProps = {
  className?: string;
  link?: string;
  title?: string;
  description?: string;
  imgSrc?: string;
  imgAlt?: string;
  children: React.ReactNode;
} & VariantProps<typeof cardVariants>

const Card: React.FC<CardProps> = ({
  variant,
  state,
  size,
  rounded,
  className,
  link,
  title,
  description,
  imgSrc,
  imgAlt,
  children,
}) => {
  return (
    <UICard className={twMerge(cardVariants({ variant, state, size, rounded }), className)}>
      {link && <Link to={link} className="absolute left-0 top-0 z-10 size-full" />}
      {imgSrc && (
        <div className={twMerge(imageVariants({ variant }), 'aspect-video')}>
          <img src={imgSrc} alt={imgAlt} className="size-full rounded-lg object-cover object-center transition-transform duration-1000 group-hover:scale-125" />
        </div>
      )}
      <UICardContent className="flex flex-col gap-2 p-0">
        {children}
        {title && (
          <UICardTitle className="text-xl font-semibold">{title}</UICardTitle>
        )}
        {description && <p className="text-sm">{description}</p>}
      </UICardContent>
    </UICard>
  );
};

Card.displayName = 'Card';

export { Card };
