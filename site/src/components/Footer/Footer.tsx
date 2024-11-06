import React from 'react';
import { forwardRef, ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { Navigation } from '../Navigation/Navigation';
import  SectionInner  from '../SectionInner'
import { LogoLink } from '../LogoLink';

type NavLink = {
  label: string;
  href: string;
};

type FooterProps = ComponentProps<'footer'> & {
  logoLinkChildren: React.ReactNode;
  navLinks: NavLink[];
}

const Footer = forwardRef<HTMLElement, FooterProps>(({ logoLinkChildren, navLinks, className, ...others }, ref) => {
  const baseCn = 'py-10 bg-zinc-900 text-zinc-400'

    return (
      <footer
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        <SectionInner>
          <div className="divide-y-2 divide-zinc-700">
            <div className="flex justify-between">
              <LogoLink className={className}>{logoLinkChildren}</LogoLink>
              <Navigation
                variant="footer"
                navLinks={navLinks}
                className={className}
              />
            </div>

            <div className="text-center">
              <small>© 2024 CIRCLE AROUND Inc.</small>
            </div>
          </div>
        </SectionInner>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';

export { Footer };
