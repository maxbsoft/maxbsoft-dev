import React from 'react';
import Link from 'next/link';

export interface LogoProps {
  url: string;
  text: boolean;
}
const Logo = ({ url = '/', text = false }: LogoProps) => (
  <Link
    legacyBehavior
    href={url}>
    <a className="sitelogo py-2">
      {text ? (
        <span className="text-4xl font-bold uppercase leading-none text-primary">
            MaxBalukh
        </span>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-8 max-h-full w-auto"
            src="/images/logo.png"
            alt="MaxBalukh"
          />
        </>
      )}
    </a>
  </Link>
);

export default Logo;
