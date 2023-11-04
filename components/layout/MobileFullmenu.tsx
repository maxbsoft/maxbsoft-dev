import React from 'react';
import Link from 'next/link';
import { RiCloseLine } from 'react-icons/ri';
import { Logo } from '@/components/utils';
import { useTranslation } from 'next-i18next';

export interface MobileFullmenuProps {
  fullMenuHandler: (value: boolean) => void;
}

const MobileFullmenu = ({ fullMenuHandler }: MobileFullmenuProps) => {
  const { t } = useTranslation('header');
  return (
    <>
      <button
        className="btn btn-small btn-transparent absolute left-auto right-4 top-4 z-10 h-10 w-10 rounded-full p-0 text-center text-3xl"
        onClick={() => fullMenuHandler(false)}
      >
        <RiCloseLine className="inline" />
      </button>
      <div className="sidenavmobile flex h-full flex-col justify-between p-7 text-center">
        <Logo url="/" text={false} />
        <nav className="sidenav-mobilmenu relative max-h-full w-full overflow-y-auto">
          <ul className="mb-0 list-none pl-0">
            <li className="block">
              <Link legacyBehavior href="/">
                <a
                  className="group relative inline-block cursor-pointer overflow-hidden py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                  onClick={() => fullMenuHandler(false)}
                >
                  {t('home')}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                </a>
              </Link>
            </li>
            <li className="block">
              <Link legacyBehavior href="/about">
                <a
                  className="group relative inline-block cursor-pointer overflow-hidden py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                  onClick={() => fullMenuHandler(false)}
                >
                  {t('about')}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                </a>
              </Link>
            </li>
            <li className="block">
              <Link legacyBehavior href="/resume">
                <a
                  className="group relative inline-block cursor-pointer overflow-hidden py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                  onClick={() => fullMenuHandler(false)}
                >
                  {t('resume')}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                </a>
              </Link>
            </li>
            <li className="block">
              <Link legacyBehavior href="/works">
                <a
                  className="group relative inline-block cursor-pointer overflow-hidden py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                  onClick={() => fullMenuHandler(false)}
                >
                  {t('works')}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                </a>
              </Link>
            </li>
            <li className="block">
              <Link legacyBehavior href="/posts/1">
                <a
                  className="group relative inline-block cursor-pointer overflow-hidden py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                  onClick={() => fullMenuHandler(false)}
                >
                  {t('blogs')}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                </a>
              </Link>
            </li>
            <li className="block">
              <Link legacyBehavior href="/contact">
                <a
                  className="group relative inline-block cursor-pointer overflow-hidden py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                  onClick={() => fullMenuHandler(false)}
                >
                  {t('contact')}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <p className="">
          <span className="whitespace-nowrap">&copy; {new Date().getFullYear()} </span>
          <Link legacyBehavior href="/">
            <a className="font-medium text-heading no-underline hover:text-primary">
              Max Balukh
            </a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default MobileFullmenu;
