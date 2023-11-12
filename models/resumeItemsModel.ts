import { LocalizedText } from '@/types';

export type ResumeItemText = string | string[] | LocalizedText[];

export interface ResumeItemModel {
  id: number;
  title: string | LocalizedText;
  meta: string | LocalizedText;
  text: ResumeItemText;
  year: string | LocalizedText;
}

export type ResumeItemsModel = ResumeItemModel[];
