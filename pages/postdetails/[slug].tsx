import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { marked } from 'marked';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticPaths } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createSlug } from '@/lib';
import { getPostsPath, getSinglePost } from '@/lib/blogging';
import { imageLoader, shimmer, toBase64 } from '@/lib/utils';
import { Breadcrumb } from '@/components/elements';
import type { BreadcrumbPath } from '@/components/elements/Breadcrumb';
import { Layout } from '@/components/layout';
import { Spinner } from '@/components/utils';
import Comments from '@/components/utils/Comments';

export interface PostPageProps {
  title: string;
  date: string;
  cover: string;
  category: string[];
  content: string;
}

const PostPage = ({ title, date, cover, category, content }: PostPageProps) => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="block py-20 text-center">
        <Spinner />
      </div>
    );

  return (
    <Layout blurred>
      <Head>
        <title>{title} - Max Balukh - Mobile App Developer</title>
      </Head>
      <Breadcrumb
        title={title}
        paths={
          [
            {
              name: t('blog:home'),
              link: '/',
            },
            {
              name: t('blog:blogs'),
              link: '/posts/1',
            },
            {
              name: title,
              link: '',
            },
          ] as BreadcrumbPath[]
        }
        blurred={false}
      />
      <div className="single-post py-24 lg:py-28 xl:py-32">
        <div className="container mx-auto">
          <div className="post-header mb-8">
            <div className="fiximage mb-5 overflow-hidden rounded border border-white border-opacity-20">
              <Image
                loader={imageLoader}
                unoptimized={true}
                src={cover}
                height={650}
                width={1350}
                alt="Blog Image"
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1350, 650))}`}
              />
            </div>
            <div className="flex flex-wrap justify-between gap-x-4">
              <div className="mb-0 flex gap-2 text-heading">
                {t('blog:category')}{' '}
                <div className="inline-flex list-none gap-1.5">
                  {category.map((cat, i) => (
                    <span key={i} className="after:content-[','] last:after:hidden">
                      <Link href={`/category/${createSlug(cat)}/1`} legacyBehavior>
                        <a className="text-body hover:text-primary">{cat}</a>
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
              <p className="mb-0 text-heading">
                {t('blog:publishedOn')}
                <span className="ml-1.5 text-body">
                  {`${new Date(date).toLocaleDateString('en-us', {
                    month: 'short',
                  })} ${new Date(date).toLocaleDateString('en-us', {
                    day: '2-digit',
                  })}, ${new Date(date).getFullYear()}`}
                </span>
              </p>
            </div>
          </div>
          <div
            className="post-body mt-4"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
          <div className="post-comments mt-8">
            <Comments title={title} slug={slug as string} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = ({ locales = ['en'] }) => {
  const paths = getPostsPath();

  return {
    paths: paths.flatMap((path) => locales.map((locale) => ({ ...path, locale }))),
    fallback: false,
  };
};

interface StaticPostDetailsProps {
  params: {
    slug: string;
  };
  locale: string;
}

export const getStaticProps = async ({
  params: { slug },
  locale,
}: StaticPostDetailsProps) => {
  const postData = getSinglePost(slug);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'header',
        'footer',
        'blog',
      ])),
      ...postData,
    },
    revalidate: 10,
  };
};

export default PostPage;
