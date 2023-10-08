const sortPostByDate = (a: any, b: any) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

const filterPostsByPage = (arr: any, page: number, limit: number) =>
  // prettier-ignore
  arr.slice((limit * page) - limit, limit * page);

const createSlug = (string: string) =>
  string.split(' ').join('-').toLowerCase();

export { sortPostByDate, filterPostsByPage, createSlug };
