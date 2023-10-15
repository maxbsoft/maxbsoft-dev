export type ResumeItemText = string | string[];

export interface ResumeItemModel {
  id: number;
  title: string;
  meta: string;
  text: ResumeItemText;
  year: string;
}

export type ResumeItemsModel = ResumeItemModel[];
