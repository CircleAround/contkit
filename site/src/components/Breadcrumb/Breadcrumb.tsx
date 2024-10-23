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
  breadcrumbs: { href: string, label: string }[];
}

const Breadcrumb = ({ className, breadcrumbs }: BreadcrumbProps) => {

  return (
    <UIBreadcrumb  className={className}>
      <UIBreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <UIBreadcrumbItem key={index}>
            {index === breadcrumbs.length - 1 ? (
              <UIBreadcrumbPage className='text-zinc-900 font-semibold pointer-events-none'>{breadcrumb.label}</UIBreadcrumbPage>
            ) : (
              <BreadcrumbLink href={breadcrumb.href}>
                {breadcrumb.label}
              </BreadcrumbLink>
            )}
            {index < breadcrumbs.length - 1 && (
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