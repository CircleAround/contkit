import React from 'react';
import { forwardRef, ComponentProps } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Link } from 'gatsby';
import { twMerge } from 'tailwind-merge';

type NavLink = {
  label: string;
  href: string;
};

type NavigationMenuProps = ComponentProps<typeof NavigationMenu> & {
  navLinks: NavLink[];
};

const Navigation = forwardRef<HTMLElement, NavigationMenuProps>(
  ({ navLinks, className, ...others }, ref) => {
    return (
      <NavigationMenu
        className={twMerge("hidden md:flex lg:w-full", className)}
        {...others}
        ref={ref}
      >
        <NavigationMenuList className="flex justify-start space-x-4">
          {navLinks.map((navLink, index) => (
            <NavigationMenuItem key={index} className="text-sm font-semibold text-zinc-900">
              <Link to={navLink.href} className="transition duration-300 ease-in-out hover:opacity-50">
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
