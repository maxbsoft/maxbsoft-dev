export interface ClientReviewItemModel {
  id: number;
  name: string;
  meta: string;
  givenreview: number;
  image: string;
  text: string;
}

export type ClientReviewItemsModel = ClientReviewItemModel[];
