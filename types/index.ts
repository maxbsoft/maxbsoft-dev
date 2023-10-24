export type Locale = 'uk' | 'en' | 'ru';

export interface LocalizedText extends Record<Locale, string | null> {}
