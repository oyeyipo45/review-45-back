import { TRANSLATION_FALLBACK_ORDER } from './constants';

export const translate = (obj: any, lang: string) => {
  for (const fallbackLang of [lang, ...TRANSLATION_FALLBACK_ORDER]) {
    if (obj[fallbackLang]) return obj[fallbackLang];
  }
  return "";
};
