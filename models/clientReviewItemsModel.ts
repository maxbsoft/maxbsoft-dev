import { LocalizedText } from '@/types';

export interface ClientReviewItemModel {
  id: number;
  name: string | null;
  nameLatin: string | null;
  profileUrl: string | null;
  meta: string | null;
  nickname: string | null;
  age: number | null;
  country: string | null;
  rate: number;
  date: string;
  projectName: LocalizedText;
  feedbackText: LocalizedText;
  avatar: string | null;
}

export type ClientReviewItemsModel = ClientReviewItemModel[];
