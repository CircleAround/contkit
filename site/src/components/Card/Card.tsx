import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import {
  Card as UICard,
  CardContent as UICardContent,
  CardTitle as UICardTitle,
} from '@/components/ui/card';
import { Link } from 'gatsby';
import { twMerge } from 'tailwind-merge';
import { Badge } from '../Badge/Badge';

const cardVariants = cva(
  'relative flex size-full gap-4 bg-white text-zinc-900',
  {
    variants: {
      variant: {
        row: 'flex-col md:flex-row',
        col: 'flex-col',
      },
      stlye: {
        none: 'border-none shadow-none',
        border: 'border border-slate-200 shadow-sm',
      },
      state: {
        default: '',
        hover: 'group',
      },
      size: {
        none: 'p-0',
        sm: 'p-2',
        md: 'p-4',
        lg: 'p-6',
      },
      shape: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'col',
      stlye: 'border',
      state: 'default',
      size: 'md',
      shape: 'md',
    },
  }
);

const imageVariants = cva(
  'overflow-hidden rounded-lg',
  {
    variants: {
      variant: {
        row: 'w-full md:max-w-60',
        col: 'w-full',
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
  badge?: { label: string, className?: string,}[];
  date?: string;
  title?: string;
  description?: string;
  imgSrc?: string;
  imgAlt?: string;
} & VariantProps<typeof cardVariants>

const Card: React.FC<CardProps> = ({
  variant,
  stlye,
  state,
  size,
  shape,
  className,
  link,
  imgSrc,
  imgAlt,
  date,
  title,
  description,
  badge
}) => {
  return (
    <UICard className={twMerge(cardVariants({ variant, stlye, state, size, shape }), className)}>
      {link && <Link to={link} className="absolute left-0 top-0 z-10 size-full" />}
      {imgSrc && (
        <div className={twMerge(imageVariants({ variant }), 'aspect-video')}>
          <img src={imgSrc} alt={imgAlt} className="size-full rounded-lg object-cover object-center transition-transform duration-1000 group-hover:scale-125" />
        </div>
      )}
      <UICardContent className="flex grow flex-col gap-2 p-0">
        {date && (
          <p className="text-sm text-zinc-600">{date}</p>
        )}
        {title && (
          <UICardTitle className="text-lg font-semibold">{title}</UICardTitle>
        )}
        {description && <p className="text-sm">{description}</p>}
        {badge && (
          <ul className="flex gap-2">
            {badge.map((item, index) => (
              <li key={index}>
                <Badge shape="sm" className={item.className}>{item.label}</Badge>
              </li>
            ))}
          </ul>
        )}
      </UICardContent>
    </UICard>
  );
};

Card.displayName = 'Card';

export { Card };
