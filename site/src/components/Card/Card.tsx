import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import {
  Card as UICard,
  CardContent as UICardContent,
  CardTitle as UICardTitle,
  CardDescription as UICardDescription,
} from '@/components/ui/card';
import { Link } from 'gatsby';
import { twMerge } from 'tailwind-merge';
import { forwardRef, ComponentProps } from 'react';

const cardVariants = cva(
  'relative flex size-full gap-4 bg-white text-zinc-900',
  {
    variants: {
      variant: {
        row: 'flex-col md:flex-row md:items-start',
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

// Card
type CardProps = ComponentProps<typeof UICard> & {
  className?: string;
  link?: string;
  children?: React.ReactNode;
} & VariantProps<typeof cardVariants>

const Card = forwardRef<HTMLDivElement, CardProps>(({ variant, style, state, size, shape, link, className, children, ...others }, ref) => {

    return (
      <UICard
        className={twMerge(cardVariants({ variant, style, state, size, shape }), className)}
        {...others}
        ref={ref}
      >
        {link && <Link to={link} className="absolute left-0 top-0 z-10 size-full" />}
        {children}
      </UICard>
    );
  }
);

// CardImage
type CardImageProps = ComponentProps<'div'> & {
  imgSrc?: string;
  imgAlt?: string;
}

const CardImage = forwardRef<HTMLDivElement, CardImageProps>(({ className, imgSrc, imgAlt, ...others }, ref) => {
    const baseCn = 'shrink-0 aspect-video overflow-hidden rounded-lg [&>img]:transition-transform [&>img]:duration-1000 [&>img]:group-hover:scale-125'

    return (
      <div
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        <img src={imgSrc} alt={imgAlt} className="size-full object-cover object-center" />
      </div>
    );
  }
);

// CardContent
type CardContentProps = ComponentProps<typeof UICardContent> & {
  children?: React.ReactNode;
};

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(({ className, children, ...others }, ref) => {
    const baseCn = 'flex grow flex-col gap-2 p-0'

    return (
      <UICardContent
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        {children}
      </UICardContent>
    );
  }
);

// CardTitle
type CardTitleProps = ComponentProps<typeof UICardTitle> & {
  children?: React.ReactNode;
};

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(({ className, children, ...others }, ref) => {
    const baseCn = 'text-zinc-900 text-lg font-semibold'

    return (
      <UICardTitle
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        {children}
      </UICardTitle>
    );
  }
);

// CardDescription
type CardDescriptionProps = ComponentProps<typeof UICardDescription> & {
  children?: React.ReactNode;
};

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(({ className, children, ...others }, ref) => {
    const baseCn = 'text-zinc-900 text-sm'

    return (
      <UICardDescription
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        {children}
      </UICardDescription>
    );
  }
);

Card.displayName = 'Card';
CardImage.displayName = 'CardImage';
CardContent.displayName = 'CardContent';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';

export { Card, CardImage, CardContent, CardTitle, CardDescription };


// import React from 'react';
// import { cva, VariantProps } from 'class-variance-authority';
// import {
//   Card as UICard,
//   CardContent as UICardContent,
//   CardTitle as UICardTitle,
// } from '@/components/ui/card';
// import { Link } from 'gatsby';
// import { twMerge } from 'tailwind-merge';
// import { Badge } from '../Badge/Badge';

// const cardVariants = cva(
//   'relative flex size-full gap-4 bg-white text-zinc-900',
//   {
//     variants: {
//       variant: {
//         row: 'flex-col md:flex-row',
//         col: 'flex-col',
//       },
//       style: {
//         none: 'border-none shadow-none',
//         border: 'border border-zinc-200 shadow-sm',
//       },
//       state: {
//         default: '',
//         hover: 'group',
//       },
//       size: {
//         none: 'p-0',
//         sm: 'p-2',
//         md: 'p-4',
//         lg: 'p-6',
//       },
//       shape: {
//         none: 'rounded-none',
//         sm: 'rounded-sm',
//         md: 'rounded-md',
//         lg: 'rounded-lg',
//       },
//     },
//     defaultVariants: {
//       variant: 'col',
//       style: 'border',
//       state: 'default',
//       size: 'md',
//       shape: 'md',
//     },
//   }
// );

// const imageVariants = cva(
//   'aspect-video overflow-hidden rounded-lg',
//   {
//     variants: {
//       variant: {
//         row: 'w-full md:max-w-60',
//         col: 'w-full',
//       },
//     },
//     defaultVariants: {
//       variant: 'col',
//     },
//   }
// );

// type CardProps = {
//   className?: string;
//   link?: string;
//   badge?: { label: string, className?: string,}[];
//   date?: string;
//   name?: string;
//   title?: string;
//   description?: string;
//   imgSrc?: string;
//   imgAlt?: string;
// } & VariantProps<typeof cardVariants>

// const Card: React.FC<CardProps> = ({
//   variant,
//   style,
//   state,
//   size,
//   shape,
//   className,
//   link,
//   imgSrc,
//   imgAlt,
//   date,
//   name,
//   title,
//   description,
//   badge
// }) => {
//   return (
//     <UICard className={twMerge(cardVariants({ variant, style, state, size, shape }), className)}>
//       {link && <Link to={link} className="absolute left-0 top-0 z-10 size-full" />}
//       {imgSrc && (
//         <div className={twMerge(imageVariants({ variant }))}>
//           <img src={imgSrc} alt={imgAlt} className="size-full rounded-lg object-cover object-center transition-transform duration-1000 group-hover:scale-125" />
//         </div>
//       )}
//       <UICardContent className="flex grow flex-col gap-2 p-0">
//         {date && (
//           <p className="text-sm text-zinc-600">{date}</p>
//         )}
//         {name && (
//           <p className="text-base font-semibold">{name}</p>
//         )}
//         {title && (
//           <UICardTitle className="text-lg font-semibold group-hover:underline">{title}</UICardTitle>
//         )}
//         {description && <p className="text-sm">{description}</p>}
//         {badge && (
//           <ul className="flex gap-2">
//             {badge.map((item, index) => (
//               <li key={index}>
//                 <Badge shape="sm" className={item.className}>{item.label}</Badge>
//               </li>
//             ))}
//           </ul>
//         )}
//       </UICardContent>
//     </UICard>
//   );
// };

// Card.displayName = 'Card';

// export { Card };