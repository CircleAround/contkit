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
  'relative flex size-full bg-white text-zinc-900',
  {
    variants: {
      variant: {
        row: 'flex-col md:flex-row',
        col: 'flex-col',
      },
      style: {
        none: 'border-none shadow-none',
        border: 'border border-zinc-200 shadow-sm',
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
      style: 'border',
      state: 'default',
      size: 'md',
      shape: 'md',
    },
  }
);

const imageVariants = cva(
  'aspect-video overflow-hidden',
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
  name?: string;
  title?: string;
  description?: string;
  imgSrc?: string;
  imgAlt?: string;
} & VariantProps<typeof cardVariants>

const Card: React.FC<CardProps> = ({
  variant,
  style,
  state,
  size,
  shape,
  className,
  link,
  imgSrc,
  imgAlt,
  date,
  name,
  title,
  description,
  badge
}) => {
  return (
    <UICard className={twMerge(cardVariants({ variant, style, state, size, shape }), className)}>
      {link && <Link to={link} className="absolute left-0 top-0 z-10 size-full" />}
      {imgSrc && (
        <div className={twMerge(imageVariants({ variant }))}>
          <img src={imgSrc} alt={imgAlt} className="size-full object-cover object-center transition-transform duration-1000 group-hover:scale-125" />
        </div>
      )}
      <UICardContent className="flex grow flex-col gap-2 p-4 bg-zinc-50">
        {badge && (
          <ul className="flex flex-wrap gap-1">
            {badge.map((item, index) => (
              <li key={index}>
                <Badge shape="sm" className={item.className}>{item.label}</Badge>
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-col grow gap-2">
          {name && (
            <p className="text-base font-semibold">{name}</p>
          )}
          {title && (
            <UICardTitle className="text-lg font-semibold group-hover:underline">{title}</UICardTitle>
          )}
          {description && <p className="text-sm">{description}</p>}
          {date && (
            <div className="mt-auto">
              <p className="text-sm text-zinc-900">{date}</p>
            </div>
          )}
        </div>
      </UICardContent>
    </UICard>
  );
};

Card.displayName = 'Card';

export { Card };
