import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { filterPostsByPage, sortPostByDate, createSlug } from '.';
import { PostItemModel, PostItemsModel } from '@/models';

const LIMIT = 6;

// Get all post
const getAllPosts = () => fs.readdirSync(path.join(process.cwd(), 'posts'));

// get all posts slug
const getAllPostsSlug = () => {
  const files = getAllPosts();
  return files.map((filename) => filename.replace(/\.(md|mdx)$/, ''));
};

// Get all posts data
const getAllPostsData = (): PostItemsModel => {
  const files = getAllPosts();
  const posts: PostItemsModel = files.map((filename) => {
    const slug = filename.replace(/\.(md|mdx)$/, '');

    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'posts', filename),
      'utf-8',
    );

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
const getPostsByPage = (page = 1, limit = 6) => {
  const tempPosts: PostItemsModel = getAllPostsData();
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
const getSinglePost = (slug: string): PostItemModel => {
  const post = fs.readFileSync(path.join(process.cwd(), 'posts', `${slug}.md`), 'utf-8');
  const { data: frontmatter, content } = matter(post);
  return {
    ...frontmatter,
    content,
  } as PostItemModel;
};

// Get all Categories
const getAllCategories = (): string[] => {
  const posts = getAllPostsData();
  // eslint-disable-next-line
  const categories = posts.map((post) => post.category);
  return categories.flat();
};

// Get category paths (for nextjs getStaticPaths)
const getCategoryPaths = () => {
  const allPosts = getAllPostsData();
  const allCategories = getAllCategories();
  const categories = [...new Set<string>(allCategories)];
  const paths = categories.map((category) => {
    const filteredPosts = allPosts.filter((post) => {
      const temp = post.category.map((cat: string) => createSlug(cat));
      return temp.includes(category.toLowerCase());
    });
    const pages = Math.ceil(filteredPosts.length / LIMIT);

    const tempPath = [];
    for (let i = 1; i <= pages; i++) {
      tempPath.push({
        params: {
          slug: category.toLowerCase(),
          page: String(i),
        },
      });
    }
    return tempPath;
  });
  return paths.flat();
};

// Get all posts by category
const getPostsByCategory = (category: string, page = 1, limit = 6) => {
  const allPosts: PostItemsModel = getAllPostsData();

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
const getRecentPosts = (): PostItemsModel => {
  const allPosts: PostItemsModel = getAllPostsData();

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
