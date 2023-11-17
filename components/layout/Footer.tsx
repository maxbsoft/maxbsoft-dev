import React from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { getInformation } from '@/fetchers';
import { SocialIcons } from '@/components/elements';
import { useRouter } from 'next/router';
import { ReactSVG } from 'react-svg';

const Footer = () => {
  const { data } = useQuery('information', getInformation);
  const router = useRouter();

  if (!data) {
    return null;
  }

  return (
    <footer className="footer relative z-20 border-t border-white border-opacity-10 bg-grey bg-opacity-95 backdrop-blur backdrop-filter">
      <div className="container mx-auto">
        <div className="footer-content flex flex-wrap items-center justify-between gap-y-5 gap-x-7 py-5 text-center md:flex-nowrap">
          <div className="w-full md:w-auto">
            <SocialIcons data={data.socialAddress} rounded={undefined} />
          </div>
          <div className="language-switcher w-full md:w-auto flex justify-center items-center gap-3 pl-0 sm:gap-4">
            <Link
              href={router.asPath}
              locale="en"
              style={{ width: '40px', cursor: 'pointer' }}
              aria-label="English"
            >
              <ReactSVG
                className="fill-current text-primary"
                src="/icons/flag-us.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute('height', 'auto');
                  svg.setAttribute('width', 'auto');
                }}
              />
            </Link>
            <Link
              href={router.asPath}
              locale="uk"
              style={{ width: '40px', cursor: 'pointer' }}
              aria-label="Ukrainian"
            >
              <ReactSVG
                className="fill-current text-primary"
                src="/icons/flag-ua.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute('height', 'auto');
                  svg.setAttribute('width', 'auto');
                }}
              />
            </Link>
          </div>
          <p className="mb-0 w-full md:w-auto">
            &copy; {new Date().getFullYear()}, All right reserved
            <Link legacyBehavior href="/">
              <a className="pl-1.5 font-medium text-heading no-underline hover:text-primary">
                Max Balukh
              </a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
