import React from 'react';
import {
  Breadcrumb as UIBreadcrumb,
  BreadcrumbList as UIBreadcrumbList,
  BreadcrumbItem as UIBreadcrumbItem,
  BreadcrumbLink as UIBreadcrumbLink,
  BreadcrumbPage as UIBreadcrumbPage,
  BreadcrumbSeparator as UIBreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Slash } from "lucide-react"
import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type BreadcrumbProps = {
  children: React.ReactNode;
  className?: string;
  breadcrumb: { href: string, label: string }[];
}

const Breadcrumb = ({ className, breadcrumb }: BreadcrumbProps) => {
  return (
    <UIBreadcrumb  className={className}>
      <UIBreadcrumbList>
        {breadcrumb.map((crumb, index) => (
          <UIBreadcrumbItem key={index}>
            {index === breadcrumb.length - 1 ? (
              <UIBreadcrumbPage className='text-zinc-900 font-semibold pointer-events-none'>{crumb.label}</UIBreadcrumbPage>
            ) : (
              <BreadcrumbLink href={crumb.href}>
                {crumb.label}
              </BreadcrumbLink>
            )}
            {index < breadcrumb.length - 1 && (
              <UIBreadcrumbSeparator>
                <Slash />
              </UIBreadcrumbSeparator>
            )}
          </UIBreadcrumbItem>
        ))}
      </UIBreadcrumbList>
    </UIBreadcrumb>
  );
};

//BreadcrumbLink
type BreadcrumbLinkProps = ComponentProps<typeof UIBreadcrumbLink>

const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, children, ...others }, ref) => {

    return (
      <UIBreadcrumbLink
        className={twMerge('font-semibold', className)}
        {...others}
        ref={ref}
      >
        {children}
      </UIBreadcrumbLink>
    )
  },
)

Breadcrumb.displayName = 'Breadcrumb';
BreadcrumbLink.displayName = 'BreadcrumbLink';

export { Breadcrumb, BreadcrumbLink };