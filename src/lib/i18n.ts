import de from '@/i18n/messages/de';
import en from '@/i18n/messages/en';
import pl from '@/i18n/messages/pl';

export const LANGUAGES = ['pl', 'en', 'de'] as const;

export type Lang = (typeof LANGUAGES)[number];

const dictionaries = {
  pl,
  en,
  de
};

export type Messages = (typeof dictionaries)[Lang];

export const languageNames: Record<Lang, string> = {
  pl: 'PL',
  en: 'EN',
  de: 'DE'
};

export const languageNativeNames: Record<Lang, string> = {
  pl: 'Polski',
  en: 'English',
  de: 'Deutsch'
};

export function isLang(value: string): value is Lang {
  return LANGUAGES.includes(value as Lang);
}

export function normalizeLang(value: string | undefined): Lang {
  if (!value) return 'pl';
  return isLang(value) ? value : 'pl';
}

export function getMessages(lang: Lang): Messages {
  return dictionaries[lang];
}

export function localizedPath(lang: Lang, hash = ''): string {
  const normalizedHash = hash.startsWith('#') || hash.length === 0 ? hash : `#${hash}`;
  return `/${lang}/${normalizedHash}`;
}
