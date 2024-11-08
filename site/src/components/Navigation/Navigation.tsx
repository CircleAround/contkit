import { forwardRef, ComponentProps } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { twMerge } from 'tailwind-merge';
import { Link } from 'gatsby';

type NavLink = {
  label: string;
  href: string;
};

type NavigationMenuProps = ComponentProps<typeof NavigationMenu> & {
  navLinks: NavLink[];
}

const Navigation = forwardRef<HTMLElement, NavigationMenuProps>(
  ({ navLinks, className, ...others }, ref) => {
    const baseCn = 'text-sm font-semibold';

    return (
      <NavigationMenu
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        <NavigationMenuList className="flex justify-start space-x-4">
          {navLinks.map((navLink) => (
            <NavigationMenuItem key={navLink.label}>
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
