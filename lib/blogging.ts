import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { PostItemModel, PostItemsModel } from '@/models';
import { filterPostsByPage, sortPostByDate, createSlug } from '.';
import { Locale } from '@/types';

const LIMIT = 6;

// Get all post
const getAllPosts = () => fs.readdirSync(path.join(process.cwd(), 'posts'));

// get all posts slug
const getAllPostsSlug = () => {
  const postDirs = getAllPosts();
  return postDirs;
};

// Get all posts data
const getAllPostsData = (locale: Locale, defaultLocale: Locale = 'en'): PostItemsModel => {
  const postDirs = getAllPosts();
  const posts: PostItemsModel = postDirs.map((postDir) => {
    const slug = postDir;
    // We need to check if there is a required locale for this post,
    // if there is, read it, if not, then read the default locale.
    let postPath: string = path.join(process.cwd(), 'posts', postDir, `${locale}.md`);
    if (!fs.existsSync(postPath)) {
      postPath = path.join(process.cwd(), 'posts', postDir, `${defaultLocale}.md`);
    }

    const markdownWithMeta = fs.readFileSync(postPath, 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      ...frontmatter,
    } as PostItemModel;
  });
  return posts.sort(sortPostByDate);
};

export interface PostPathType {
  params: {
    slug: string;
  };
}

// Get posts by page
const getPostsByPage = (locale: Locale, page = 1, limit = 6) => {
  const tempPosts: PostItemsModel = getAllPostsData(locale);
  const posts: PostItemsModel = filterPostsByPage(tempPosts, page, limit);
  return {
    posts,
    hasMore: limit * page < tempPosts.length,
  };
};

// Get Page Paths
const getPagesPath = (): PostPathType[] => {
  const files = getAllPosts();
  const pages = Math.ceil(files.length / LIMIT);

  const paths = [];
  for (let i = 1; i <= pages; i++) {
    paths.push({
      params: {
        slug: String(i),
      },
    });
  }
  return paths;
};

// Get all posts path (for nextjs getStaticPaths)
const getPostsPath = (): PostPathType[] => {
  const postsSlug = getAllPostsSlug();

  const paths = postsSlug.map((slug) => ({
    params: {
      slug,
    },
  }));

  return paths;
};

// Get single post data
const getSinglePost = (locale: Locale, slug: string): PostItemModel => {
  const post = fs.readFileSync(
    path.join(process.cwd(), 'posts', slug, `${locale}.md`),
    'utf-8',
  );
  const { data: frontmatter, content } = matter(post);
  return {
    ...frontmatter,
    content,
  } as PostItemModel;
};

// Get all Categories
const getAllCategories = (locale: Locale): string[] => {
  const posts = getAllPostsData(locale);
  const categories = posts.map((post) => post.category);
  return categories.flat();
};

// Get category paths (for nextjs getStaticPaths)
const getCategoryPaths = (locale: Locale) => {
  const allPosts = getAllPostsData(locale);
  const allCategories = getAllCategories(locale);
  const categories = [...new Set<string>(allCategories)];
  const paths = categories.map((category) => {
    const filteredPosts = allPosts.filter((post) => {
      const temp = post.category.map((cat: string) => createSlug(cat));
      return temp.includes(createSlug(category));
    });
    const pages = Math.ceil(filteredPosts.length / LIMIT);
    const tempPath = [];
    for (let i = 1; i <= pages; i++) {
      tempPath.push({
        params: {
          slug: createSlug(category),
          page: String(i),
        },
      });
    }
    return tempPath;
  });
  return paths.flat();
};

// Get all posts by category
const getPostsByCategory = (category: string, locale: Locale, page = 1, limit = 6) => {
  const allPosts: PostItemsModel = getAllPostsData(locale);
  const filteredPosts = allPosts.filter((post) => {
    const temp = post.category.map((cat) => createSlug(cat));
    return temp.includes(category);
  });

  const posts = filterPostsByPage(filteredPosts, page, limit);

  return {
    posts,
    hasMore: limit * page < filteredPosts.length,
  };
};

// Get recent posts
const getRecentPosts = (locale: Locale): PostItemsModel => {
  const allPosts: PostItemsModel = getAllPostsData(locale);
  return allPosts.slice(0, 5);
};

export {
  getPostsByPage,
  getPostsByCategory,
  getPostsPath,
  getPagesPath,
  getSinglePost,
  getAllCategories,
  getCategoryPaths,
  getRecentPosts,
};
