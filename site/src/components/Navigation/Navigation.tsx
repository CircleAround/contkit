import React from 'react';
import { forwardRef, ComponentProps } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { twMerge } from 'tailwind-merge';
import { cva, VariantProps } from 'class-variance-authority';
import { Link } from 'gatsby';

const NavigationVariants = cva(
  'text-sm font-semibold',
  {
    variants: {
      variant: {
        header: "hidden md:flex lg:w-full lg:text-zinc-900",
        footer: "text-zinc-400",
      },
    },
    defaultVariants: {
      variant: "header",
    },
  }
)

type NavLink = {
  label: string;
  href: string;
};

type NavigationMenuProps = ComponentProps<typeof NavigationMenu> & {
  navLinks: NavLink[];
} & VariantProps<typeof NavigationVariants>;

const Navigation = forwardRef<HTMLElement, NavigationMenuProps>(
  ({ variant, navLinks, className, ...others }, ref) => {
    return (
      <NavigationMenu
        className={twMerge(NavigationVariants({ variant }), className)}
        {...others}
        ref={ref}
      >
        <NavigationMenuList className="flex justify-start space-x-4">
          {navLinks.map((navLink, index) => (
            <NavigationMenuItem key={index}>
              <Link
                to={navLink.href}
                className="relative pb-1 transition duration-1000 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
              >
                {navLink.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
);

Navigation.displayName = 'Navigation';

export { Navigation };
