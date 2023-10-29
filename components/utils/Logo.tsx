import React from 'react';
import Link from 'next/link';

export interface LogoProps {
  url: string;
  text: boolean;
}
const Logo = ({ url = '/', text = false }: LogoProps) => (
  <Link legacyBehavior href={url}>
    <a className="sitelogo py-2">
      {text ? (
        <span className="text-4xl font-bold leading-none text-primary uppercase whitespace-nowrap">
          Max Balukh<span className="text-white">.</span>
        </span>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-8 max-h-full w-auto"
            src="/images/logo.svg"
            alt="Max Balukh Developer logo"
          />
        </>
      )}
    </a>
  </Link>
);

export default Logo;
