import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Navigation = () => {
  const { t } = useTranslation('header');
  const router = useRouter();
  const checkroute = router.route !== '/';

  return (
    <nav className="flex-grow px-5 text-center">
      <ul className="mb-0 inline-flex list-none gap-7 pl-0">
        <li className="inline-block align-middle">
          {checkroute ? (
            <Link legacyBehavior href="/">
              <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                {t('home')}
                <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
              </a>
            </Link>
          ) : (
            <ScrollLink
              activeClass="!text-primary"
              to="section-home"
              spy={true}
              smooth="easeInQuad"
              offset={-74}
              duration={1000}
              className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
            >
              {t('home')}
              <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
            </ScrollLink>
          )}
        </li>
        <li className="inline-block align-middle">
          {checkroute ? (
            <Link legacyBehavior href="/">
              <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                {t('about')}
                <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
              </a>
            </Link>
          ) : (
            <ScrollLink
              activeClass="!text-primary"
              to="section-about"
              spy={true}
              smooth="easeInQuad"
              offset={-74}
              duration={1000}
              className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary whitespace-nowrap"
            >
              {t('about')}
              <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
            </ScrollLink>
          )}
        </li>
        <li className="inline-block align-middle">
          {checkroute ? (
            <Link legacyBehavior href="/">
              <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                {t('resume')}
                <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
              </a>
            </Link>
          ) : (
            <ScrollLink
              activeClass="!text-primary"
              to="section-resume"
              spy={true}
              smooth="easeInQuad"
              offset={-74}
              duration={1000}
              className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
            >
              {t('resume')}
              <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
            </ScrollLink>
          )}
        </li>
        <li className="inline-block align-middle">
          {checkroute ? (
            <Link legacyBehavior href="/">
              <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                {t('works')}
                <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
              </a>
            </Link>
          ) : (
            <ScrollLink
              activeClass="!text-primary"
              to="section-portfolios"
              spy={true}
              smooth="easeInQuad"
              offset={-74}
              duration={1000}
              className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
            >
              {t('works')}
              <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
            </ScrollLink>
          )}
        </li>
        <li className="inline-block align-middle">
          <Link legacyBehavior href="/posts/1">
            <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
              {t('blog')}
              <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
            </a>
          </Link>
        </li>
        {/*
        <li className="inline-block align-middle">
          {checkroute ? (
            <Link legacyBehavior href="/">
              <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                {t('contact')}
                <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
              </a>
            </Link>
          ) : (
            <ScrollLink
              activeClass="!text-primary"
              to="section-contact"
              spy={true}
              smooth="easeInQuad"
              offset={-74}
              duration={1000}
              className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
            >
              {t('contact')}
              <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
            </ScrollLink>
          )}
        </li>
        */}
      </ul>
    </nav>
  );
};

export default Navigation;
