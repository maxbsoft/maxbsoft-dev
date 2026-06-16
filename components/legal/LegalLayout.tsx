import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LegalLayoutProps {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}

/**
 * Self-contained dark-theme layout for legal documents (EULA, Privacy Policy).
 * Intentionally avoids the marketing Layout2 (side menu, parallax, animations)
 * so the long-form text renders cleanly and is statically pre-rendered on the
 * server at build time — no client-only JS is required to read the content.
 */
const LegalLayout = ({ title, effectiveDate, children }: LegalLayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${title} — OrbitProfiFood`}</title>
        <meta name="description" content={`${title} for the OrbitProfiFood application.`} />
      </Head>
      <div className="min-h-screen w-full bg-grey font-body text-body">
        <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
          <header className="mb-10 border-b border-border pb-8">
            <Link
              href="/"
              className="mb-6 inline-block text-sm text-primary hover:underline"
            >
              maxbsoft.dev
            </Link>
            <h1 className="font-display text-3xl font-bold text-heading md:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-placeholder">
              Application: <span className="text-body">OrbitProfiFood</span>
            </p>
            <p className="text-sm text-placeholder">
              Effective date: <span className="text-body">{effectiveDate}</span>
            </p>
          </header>

          <main className="legal-content space-y-6 text-base leading-relaxed">
            {children}
          </main>

          <footer className="mt-14 border-t border-border pt-8 text-sm text-placeholder">
            <p>
              Maksym Balukh — independent software developer. Contact:{' '}
              <a href="mailto:maxbsoft@gmail.com" className="text-primary hover:underline">
                maxbsoft@gmail.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LegalLayout;

/* Shared content building blocks ------------------------------------------- */

export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-display text-2xl font-semibold text-heading">{children}</h2>
);

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-display text-lg font-semibold text-heading">{children}</h3>
);

export const P = ({ children }: { children: ReactNode }) => (
  <p className="text-body">{children}</p>
);

export const UL = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc space-y-2 pl-6 text-body marker:text-primary">{children}</ul>
);
