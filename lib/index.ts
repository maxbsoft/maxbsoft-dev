import { PostItemModel, PostItemsModel } from '@/models';

/* eslint-disable @typescript-eslint/no-explicit-any */
const sortPostByDate = (a: PostItemModel, b: PostItemModel) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

const filterPostsByPage = (arr: PostItemsModel, page: number, limit: number) =>
  arr.slice(limit * page - limit, limit * page);

const createSlug = (string: string) => string.split(' ').join('-').toLowerCase();

export { sortPostByDate, filterPostsByPage, createSlug };
