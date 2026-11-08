/**
 * i18n Hook for managing translations
 */

import { useEffect, useState } from 'react';
import * as Localization from 'react-native-localize';
import enTranslations from '../../locales/en.json';
import arTranslations from '../../locales/ar.json';

type Locale = 'en' | 'ar';

const translations = {
  en: enTranslations,
  ar: arTranslations,
};

let selectedLanguage: Locale = 'en';

const setLanguage = (lang: Locale) => {
  selectedLanguage = lang;
};

const getLanguage = (): Locale => {
  return selectedLanguage;
};

const t = (key: string): string => {
  const keys = key.split('.');
  let value: any = translations[selectedLanguage];

  for (const k of keys) {
    if (value[k] === undefined) {
      return key;
    }
    value = value[k];
  }

  return typeof value === 'string' ? value : key;
};

export const useI18n = () => {
  const [locale, setLocale] = useState<Locale>(getLanguage());
  const [isRTL, setIsRTL] = useState(locale === 'ar');

  useEffect(() => {
    // Detect device language on first load
    const deviceLanguages = Localization.getLocales();

    if (deviceLanguages.length > 0) {
      const lang = deviceLanguages[0].languageCode;
      const newLocale = lang === 'ar' ? 'ar' : 'en';
      setLanguage(newLocale);
      setLocale(newLocale);
      setIsRTL(newLocale === 'ar');
    }
  }, []);

  const changeLanguage = (lang: Locale) => {
    setLanguage(lang);
    setLocale(lang);
    setIsRTL(lang === 'ar');
  };

  return {
    t,
    locale,
    isRTL,
    changeLanguage,
  };
};

export { translations, setLanguage, getLanguage };
