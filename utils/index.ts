import { Locale, LocalizedText, isLocalizedText } from '@/types';

export const getStringFromLocalizedText = (
  input: string | LocalizedText,
  locale: Locale,
): string => {
  return isLocalizedText(input) ? input[locale] : input;
};
