export type SocialNetworks = 'facebook' | 'twitter' | 'github' | 'linkedin' | 'dribbble' | 'stackoverflow' | 'instagram';

export type SocialAddressMapModel = {
  [key in SocialNetworks]: string;
};

export interface InformationModel {
  firstName: string;
  lastName: string;
  fullName: string;
  thumbImage?: string;
  largeImage?: string;
  bio?: string;
  age?: string | number;
  nationality?: string;
  languages?: Array<string>;
  address?: string;
  freelance?: string | boolean;
  socialAddress: SocialAddressMapModel; 
  phoneNumbers: Array<string>;
  emailAddress: Array<string>;
}
