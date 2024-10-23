import React from 'react';
import { useLocation } from '@reach/router';
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

type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbProps = {
  className?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const Breadcrumb = ({ className, breadcrumbs }: BreadcrumbProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);
  const dynamicBreadcrumbs: BreadcrumbItem[] = breadcrumbs ?? pathnames.map((name, index) => {
    const href = `/${pathnames.slice(0, index + 1).join('/')}`;
    return {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      href,
    };
  });

  return (
    <UIBreadcrumb  className={className}>
      <UIBreadcrumbList>
        <UIBreadcrumbItem key="home">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          {dynamicBreadcrumbs.length > 0 && (
            <UIBreadcrumbSeparator>
              <Slash />
            </UIBreadcrumbSeparator>
          )}
        </UIBreadcrumbItem>

        {dynamicBreadcrumbs.map((breadcrumb, index) => (
          <UIBreadcrumbItem key={index}>
            {index === dynamicBreadcrumbs.length - 1 ? (
              <UIBreadcrumbPage className='pointer-events-none font-semibold text-zinc-900'>{breadcrumb.name}</UIBreadcrumbPage>
            ) : (
              <BreadcrumbLink href={breadcrumb.href}>
                {breadcrumb.name}
              </BreadcrumbLink>
            )}
            {index < dynamicBreadcrumbs.length - 1 && (
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