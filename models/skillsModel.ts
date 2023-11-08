import { LocalizedText } from '@/types';

export interface SkillModel {
  id: number;
  title: string | LocalizedText;
  percentage: number;
}

export type SkillsModel = SkillModel[];
