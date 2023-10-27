import { Locale, LocalizedText } from '@/types';

export interface ClientReviewItemModel {
  id: number;
  name: LocalizedText;
  profileUrl: string | null;
  freelance: boolean | null;
  originLocale: Locale;
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
