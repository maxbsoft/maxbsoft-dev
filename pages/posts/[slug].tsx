import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Blog, Breadcrumb } from '@/components/elements';
import { createSlug } from '@/lib';
import {
  getAllCategories,
  getPagesPath,
  getPostsByPage,
  getRecentPosts,
} from '@/lib/blogging';
import { childrenAnimation } from '@/lib/motion';
import { Layout } from '@/components/layout';
import { PostItemsModel } from '@/models';
import { BreadcrumbPath } from '@/components/elements/Breadcrumb';
import { stringToLocale } from '@/types';

export interface PostsProps {
  posts: PostItemsModel;
  hasMore: boolean;
  categories: string[];
  recentPosts: PostItemsModel;
}
const Posts = ({ posts, hasMore, categories, recentPosts }: PostsProps) => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);

  const router = useRouter();
  const { slug: page } = router.query;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setUniqueCategories([...new Set(categories)]);
  }, [categories]);

  if (!mounted) return <p className="text-center">{t('blog:loading')}</p>;
  if (!posts) return null;

  return (
    <Layout blurred>
      <Head>
        <title>Blogs - Max Balukh - Mobile App Developer</title>
      </Head>
      <Breadcrumb
        title={t('blog:blogs')}
        paths={
          [
            {
              name: t('blog:home'),
              link: '/',
            },
            {
              name: t('blog:blogs'),
              link: '',
            },
          ] as BreadcrumbPath[]
        }
        blurred={false}
      />
      <div className="blogs py-24 lg:py-28 xl:py-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-9">
              <div className="grid grid-cols-2 gap-7">
                {posts &&
                  posts?.map((post, index) => (
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * index }}
                      variants={childrenAnimation}
                      className="col-span-2 sm:col-span-1"
                      key={index}
                    >
                      <Blog post={post} />
                    </motion.div>
                  ))}
              </div>
              <div className="flex gap-3 pt-10 text-center">
                {page !== '1' && (
                  <Link
                    href={`/posts/${String(parseInt(page as string) - 1)}`}
                    legacyBehavior
                  >
                    <a className="btn btn-small">
                      <span>{t('blog:prev')}</span>
                    </a>
                  </Link>
                )}
                {hasMore && (
                  <Link
                    href={`/posts/${String(parseInt(page as string) + 1)}`}
                    legacyBehavior
                  >
                    <a className="btn btn-small">
                      <span>{t('blog:next')}</span>
                    </a>
                  </Link>
                )}
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3">
              <div className="widget sticky top-[107px] mt-8 space-y-10 lg:mt-0">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  variants={childrenAnimation}
                  className="widget widget-category card rounded p-4"
                >
                  <h5 className="border-b border-white border-opacity-20 pb-2 font-medium text-primary">
                    {t('blog:categories')}
                  </h5>
                  <ul className="styledlist mb-0 list-none pl-0">
                    {uniqueCategories.map((category, i) => (
                      <li key={i}>
                        <Link href={`/category/${createSlug(category)}/1`} legacyBehavior>
                          <a className="clearfix hover:text-primary">
                            {category}
                            <span className="float-right">
                              ({categories.filter((cat) => cat === category).length})
                            </span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  variants={childrenAnimation}
                  className="widget widget-recentpost card rounded p-4"
                >
                  <h5 className="border-b border-white border-opacity-20 pb-2 font-medium text-primary">
                    {t('blog:recentPosts')}
                  </h5>
                  <ul className="mb-0 list-none pl-0">
                    {recentPosts.map((post, index) => (
                      <li key={index} className="mb-4 last:mb-0">
                        <p className="mb-0">
                          <Link href={`/postdetails/${post.slug}`} legacyBehavior>
                            <a className="text-heading no-underline hover:text-primary hover:underline">
                              {post.title}{' '}
                            </a>
                          </Link>
                        </p>
                        <small className="text-body">
                          {`${new Date(post.date).toLocaleDateString('en-us', {
                            month: 'short',
                          })} ${new Date(post.date).toLocaleDateString('en-us', {
                            day: '2-digit',
                          })}, ${new Date(post.date).getFullYear()}`}
                        </small>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = ({ locales = ['en'] }) => {
  const paths = getPagesPath();

  return {
    paths: paths.flatMap((path) => locales.map((locale) => ({ ...path, locale }))),
    fallback: false,
  };
};

interface StaticPostsProps {
  params: {
    slug: string;
  };
  locale: string;
}
export const getStaticProps = async ({ params: { slug }, locale }: StaticPostsProps) => {
  const tLocale = stringToLocale(locale);
  const { posts, hasMore } = getPostsByPage(tLocale, parseInt(slug));
  const categories = getAllCategories(tLocale);
  const recentPosts = getRecentPosts(tLocale);

  const resultProps: PostsProps = {
    posts,
    hasMore,
    categories,
    recentPosts,
  };

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'header',
        'footer',
        'blog',
      ])),
      ...resultProps,
    },
    revalidate: 10,
  };
};

export default Posts;
