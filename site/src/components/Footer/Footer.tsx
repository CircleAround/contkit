import React from 'react';
import { forwardRef, ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { Navigation } from '../Navigation/Navigation';
import SectionInner from '../SectionInner';
import { LogoLink } from '../LogoLink';

type NavLink = {
  label: string;
  href: string;
};

type FooterProps = ComponentProps<'footer'> & {
  logoLinkVariant: 'text' | 'image';
  logoText?: string;
  logoImgSrc?: string;
  logoimgAlt?: string;
  navLinks: NavLink[];
  copyright?: string;
};

const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ logoLinkVariant, logoText, logoImgSrc, logoimgAlt, navLinks, className, copyright, ...others }, ref) => {
    const baseCn = 'py-10 bg-zinc-900 text-zinc-400';

    return (
      <footer
        className={twMerge(baseCn, className)}
        {...others}
        ref={ref}
      >
        <SectionInner>
          <div className="space-y-6">
            <div className="flex flex-col justify-between space-y-6 md:flex-row md:space-y-0">
              <LogoLink
                variant={logoLinkVariant}
                text={logoText}
                imgSrc={logoImgSrc}
                imgAlt={logoimgAlt}
                className="text-zinc-400"
              />
              <Navigation
                variant="footer"
                navLinks={navLinks}
                className='[&_li]:text-xl [&_li]:md:text-sm [&_ul]:flex [&_ul]:flex-col [&_ul]:items-start [&_ul]:space-x-0 [&_ul]:space-y-4 [&_ul]:md:flex-row [&_ul]:md:space-x-4 [&_ul]:md:space-y-0'
              />
            </div>

            <hr className='border border-zinc-700' />

            <div className="mt-6 text-center">
              <small>{copyright}</small>
            </div>
          </div>
        </SectionInner>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';

export { Footer };
