import { LocalizedText } from '@/types';

export type SocialNetworks =
  | 'facebook'
  | 'twitter'
  | 'github'
  | 'linkedin'
  | 'dribbble'
  | 'stackoverflow'
  | 'instagram';

export type SocialAddressMapModel = {
  [key in SocialNetworks]: string;
};

export interface InformationModel {
  firstName: string | LocalizedText;
  lastName: string | LocalizedText;
  fullName: string | LocalizedText;
  thumbImage?: string;
  largeImage?: string;
  bio?: string | LocalizedText;
  age?: string | number;
  nationality?: string | LocalizedText;
  languages?: Array<string> | Array<LocalizedText>;
  address?: string | LocalizedText;
  freelance?: string | LocalizedText;
  socialAddress: SocialAddressMapModel;
  phoneNumbers: Array<string>;
  emailAddress: Array<string>;
}
