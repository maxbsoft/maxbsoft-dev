import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiCloseLine } from 'react-icons/ri';
import { useTranslation } from 'next-i18next';

export interface MobileNavigationProps {
  changeState: (value: boolean) => void;
}

const MobileNavigation = ({ changeState }: MobileNavigationProps) => {
  const { t } = useTranslation('header');
  const router = useRouter();

  const checkroute = router.route !== '/';

  const handleClick = () => {
    changeState(false);
  };

  return (
    <>
      <button
        className="btn btn-small btn-transparent absolute left-auto right-4 top-4 z-10 h-10 w-10 rounded-full p-0 text-center text-3xl"
        onClick={() => changeState(false)}
      >
        <RiCloseLine className="inline" />
      </button>
      <nav className="relative max-h-full w-full overflow-y-auto">
        <ul className="mb-0 list-none pl-0">
          <li className="block">
            {checkroute ? (
              <Link legacyBehavior href="/">
                <a
                  className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                  onClick={() => handleClick()}
                >
                  {t('home')}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                </a>
              </Link>
            ) : (
              <ScrollLink
                activeClass="text-primary"
                to="section-home"
                spy={true}
                smooth="easeInQuad"
                offset={-74}
                duration={1000}
                className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                onClick={() => handleClick()}
              >
                {t('home')}
                <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
              </ScrollLink>
            )}
          </li>
          <li className="block">
            {checkroute ? (
              <Link legacyBehavior href="/">
                <a
                  className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                  onClick={() => handleClick()}
                >
                  {t('about')}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                </a>
              </Link>
            ) : (
              <ScrollLink
                activeClass="text-primary"
                to="section-about"
                spy={true}
                smooth="easeInQuad"
                offset={-74}
                duration={1000}
                className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                onClick={() => handleClick()}
              >
                {t('about')}
                <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
              </ScrollLink>
            )}
          </li>
          <li className="block">
            {checkroute ? (
              <Link legacyBehavior href="/">
                <a
                  className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                  onClick={() => handleClick()}
                >
                  {t('resume')}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                </a>
              </Link>
            ) : (
              <ScrollLink
                activeClass="text-primary"
                to="section-resume"
                spy={true}
                smooth="easeInQuad"
                offset={-74}
                duration={1000}
                className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                onClick={() => handleClick()}
              >
                {t('resume')}
                <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
              </ScrollLink>
            )}
          </li>
          <li className="block">
            {checkroute ? (
              <Link legacyBehavior href="/">
                <a
                  className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                  onClick={() => handleClick()}
                >
                  {t('works')}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                </a>
              </Link>
            ) : (
              <ScrollLink
                activeClass="text-primary"
                to="section-portfolios"
                spy={true}
                smooth="easeInQuad"
                offset={-74}
                duration={1000}
                className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                onClick={() => handleClick()}
              >
                {t('works')}
                <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
              </ScrollLink>
            )}
          </li>
          <li className="block">
            <Link legacyBehavior href="/posts/1">
              <a
                className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                onClick={() => handleClick()}
              >
                {t('blog')}
                <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
              </a>
            </Link>
          </li>
          <li className="block">
            {checkroute ? (
              <Link legacyBehavior href="/">
                <a
                  className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                  onClick={() => handleClick()}
                >
                  {t('contact')}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                </a>
              </Link>
            ) : (
              <ScrollLink
                activeClass="text-primary"
                to="section-contact"
                spy={true}
                smooth="easeInQuad"
                offset={-74}
                duration={1000}
                className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                onClick={() => handleClick()}
              >
                {t('contact')}
                <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
              </ScrollLink>
            )}
          </li>
        </ul>
        <div className="header-button pt-8">
          <ScrollLink
            activeClass="active"
            to="section-contact"
            spy={true}
            smooth="easeInQuad"
            offset={-74}
            duration={1000}
            className="btn btn-small"
            onClick={() => handleClick()}
          >
            <span>{t('hireMe')}</span>
          </ScrollLink>
        </div>
      </nav>
    </>
  );
};

export default MobileNavigation;
