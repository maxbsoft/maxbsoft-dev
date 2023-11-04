import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export interface FullscreenMenuProps {
  fullMenuHandler: (value: boolean) => void;
}
const FullscreenMenu = ({ fullMenuHandler }: FullscreenMenuProps) => {
  const { t } = useTranslation('header');
  return (
    <ul className="fullscreen-menulist pl-0 mb-0 flex h-screen items-center justify-between">
      <li className="section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
        <Link legacyBehavior href="/">
          <a
            className="flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary"
            onClick={() => fullMenuHandler(false)}
          >
            <span className="fullmenuitem rotate-180">{t('home')}</span>
          </a>
        </Link>
      </li>
      <li className="section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
        <Link legacyBehavior href="/about">
          <a
            className="flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary"
            onClick={() => fullMenuHandler(false)}
          >
            <span className="fullmenuitem rotate-180">{t('about')}</span>
          </a>
        </Link>
      </li>
      <li className="section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
        <Link legacyBehavior href="/resume">
          <a
            className="flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary"
            onClick={() => fullMenuHandler(false)}
          >
            <span className="fullmenuitem rotate-180">{t('resume')}</span>
          </a>
        </Link>
      </li>
      <li className="section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
        <Link legacyBehavior href="/works">
          <a
            className="flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary"
            onClick={() => fullMenuHandler(false)}
          >
            <span className="fullmenuitem rotate-180">{t('works')}</span>
          </a>
        </Link>
      </li>
      <li className="section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
        <Link legacyBehavior href="/posts/1">
          <a
            className="flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary"
            onClick={() => fullMenuHandler(false)}
          >
            <span className="fullmenuitem rotate-180">{t('blogs')}</span>
          </a>
        </Link>
      </li>
      <li className="section group flex basis-1/5 items-center justify-center self-stretch border-l border-white border-opacity-10 text-center transition-all duration-500 first:border-l-0 hover:basis-2/5">
        <Link legacyBehavior href="/contact">
          <a
            className="flex w-full items-center justify-center self-stretch p-5 text-5xl xl:text-6xl font-bold uppercase text-heading group-hover:text-primary"
            onClick={() => fullMenuHandler(false)}
          >
            <span className="fullmenuitem rotate-180">{t('contact')}</span>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default FullscreenMenu;
