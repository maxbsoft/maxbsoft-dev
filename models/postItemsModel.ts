export interface PostItemModel {
  slug: string;
  title: string;
  date: string;
  category: string[];
  cover: string;
  thumb: string;
  content?: string;
}

export type PostItemsModel = PostItemModel[];
