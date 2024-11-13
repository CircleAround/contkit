import { forwardRef, ComponentProps } from 'react';
import {
  NavigationMenu as UINavigationMenu,
  NavigationMenuList as UINavigationMenuList,
  NavigationMenuItem as UINavigationMenuItem,
  NavigationMenuLink as UINavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { twMerge } from 'tailwind-merge';

// Navigation
type NavigationMenuProps = ComponentProps<typeof UINavigationMenu>

const Navigation = forwardRef<HTMLElement, NavigationMenuProps>(
  ({ className, children, ...others }, ref) => {
    const baseCn = 'flex-none text-sm font-semibold';

    return (
      <UINavigationMenu
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        {children}
      </UINavigationMenu>
    );
  }
);

// NavigationMenuList
type NavigationMenuListProps = ComponentProps<typeof UINavigationMenuList>

const NavigationMenuList = forwardRef<HTMLUListElement, NavigationMenuListProps>(
  ({ className, children, ...others }, ref) => {
    const baseCn = 'flex flex-col flex-none items-start space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0';

    return (
      <UINavigationMenuList
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        {children}
      </UINavigationMenuList>
    );
  }
);

// NavigationMenuItem
type NavigationMenuItemProps = ComponentProps<typeof UINavigationMenuItem>

const NavigationMenuItem = forwardRef<HTMLLIElement, NavigationMenuItemProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <UINavigationMenuItem
        className={className}
        {...others}
        ref={ref}
      >
        {children}
      </UINavigationMenuItem>
    );
  }
);

// NavigationLink
type NavigationLinkProps = ComponentProps<typeof UINavigationMenuLink> & {
  href: string;
}

const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ href, className, children, ...others }, ref) => {
    const baseCn ='text-zinc-900 text-sm'
    const hoverAnimationCn = 'transition duration-300 ease-in-out';
    const focusCn = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2';

    return (
      <UINavigationMenuLink
        href={href}
        className={twMerge(baseCn, hoverAnimationCn, focusCn, className)}
        {...others}
        ref={ref}
      >
        {children}
      </UINavigationMenuLink>
    );
  }
);

Navigation.displayName = 'Navigation';
NavigationMenuList.displayName = 'NavigationMenuList';
NavigationMenuItem.displayName = 'NavigationMenuItem';
NavigationLink.displayName = 'NavigationLink';

export { Navigation, NavigationMenuList, NavigationMenuItem, NavigationLink };

