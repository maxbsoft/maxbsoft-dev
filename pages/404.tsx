import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Breadcrumb } from '@/components/elements';
import { Layout } from '@/components/layout';
import { toBase64, shimmer, imageLoader } from '@/lib/utils';

interface Props {}
const NotFound: React.FC<Props> = () => {
  const { t } = useTranslation('common');
  return (
    <Layout blurred>
      <Head>
        <title>Not Found - Max Balukh - Mobile App Developer</title>
      </Head>

      {/* Start NotFound Section */}
      <section className="section-notfound">
        <Breadcrumb title={t('pageNotFound')} paths={undefined} blurred={false} />
        <div className="not-found-wrapper pb-24 pt-10 lg:pt-14 lg:pb-28 xl:pt-16 xl:pb-32">
          <div className="container mx-auto">
            <div className="not-found text-center">
              <Image
                className="inline-block"
                loader={imageLoader}
                unoptimized={true}
                src="/images/notfound.svg"
                height={500}
                width={500}
                alt="not found"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`}
              />
              <div>
                <Link href="/" legacyBehavior>
                  <a className="btn btn-large">
                    <span>{t('backToHome')}</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End NotFound Section */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'header', 'footer'])),
    },
    revalidate: 10,
  };
};

export default NotFound;
