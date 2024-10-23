import React from 'react';
import {
  Breadcrumb as UIBreadcrumb,
  BreadcrumbList as UIBreadcrumbList,
  BreadcrumbItem as UIBreadcrumbItem,
  BreadcrumbLink as UIBreadcrumbLink,
  BreadcrumbPage as UIBreadcrumbPage,
  BreadcrumbSeparator as UIBreadcrumbSeparator,
  BreadcrumbEllipsis as UIBreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';
import { Slash } from "lucide-react"
import { ComponentProps, ReactNode, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type BreadcrumbProps = {
  children: React.ReactNode;
  className?: string;
  breadcrumb: { href: string, label: string }[];
}

const Breadcrumb = ({ className, breadcrumb }: BreadcrumbProps) => {
  return (
    <UIBreadcrumb>
      <UIBreadcrumbList>
        {breadcrumb.map((crumb, index) => (
          <UIBreadcrumbItem key={index}>
            <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
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
  ({ className, children, 'aria-current': ariaCurrent, ...others }, ref) => {
    const underlineCn = ariaCurrent === 'page' ? 'no-underline' : 'underline';

    return (
      <UIBreadcrumbLink
        className={twMerge(underlineCn, 'hover:text-zinc-900', className)}
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