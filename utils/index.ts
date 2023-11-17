import { Locale, LocalizedText, isLocalizedText } from '@/types';

export const getStringFromLocalizedText = (
  input: string | LocalizedText,
  locale: Locale,
): string => {
  return isLocalizedText(input) ? input[locale] : input;
};

export const getLocaleFromPath = (url: string): Locale => {
  const pathSegments = url.split('/');
  const firstSegment = pathSegments[1]; // Первый сегмент после слеша

  // Определяем, является ли первый сегмент допустимым языковым кодом
  if (['uk'].includes(firstSegment)) {
    return firstSegment as Locale;
  }

  return 'en'; // Значение по умолчанию, если языковой сегмент не найден
};
