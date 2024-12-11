import ar from '@/translations/ar.json';
import en from '@/translations/en.json';
import pt from '@/translations/pt.json';

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  pt: {
    translation: pt,
  },
};

export type Language = keyof typeof resources;
