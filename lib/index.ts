const sortPostByDate = (a: any, b: any) => {
  // eslint-disable-next-line
  return new Date(b.date).getTime() - new Date(a.date).getTime()
};

const filterPostsByPage = (arr: any, page: any, limit: any) => {
  return arr.slice(limit * page - limit, limit * page);
};

const createSlug = (string: string) => {
  return string.split(' ').join('-').toLowerCase();
};

export { sortPostByDate, filterPostsByPage, createSlug };
