export interface PortfolioItemModel {
  id: number;
  title: string;
  subtitle: string;
  coverimage: string;
  imagegallery: string[] | boolean;
  videogallery: string[] | boolean;
  url: string;
  filters: string[];
}

export type PortfolioItemsModel = PortfolioItemModel[];
