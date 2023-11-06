export type Locale = 'uk' | 'en' | 'ru';

export interface LocalizedText extends Record<Locale, string> {}

// Type guard for checking LocalizedText
export const isLocalizedText = (input: string | LocalizedText): input is LocalizedText => {
  return (
    typeof input === 'object' &&
    input !== null &&
    'en' in input &&
    'uk' in input &&
    'ru' in input
  );
};
