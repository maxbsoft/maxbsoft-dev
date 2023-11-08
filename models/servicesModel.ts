import { LocalizedText } from '@/types';

export interface ServiceModel {
  id: number;
  title: string | LocalizedText;
  text: string | LocalizedText;
  icon: string;
}

export type ServicesModel = ServiceModel[];
