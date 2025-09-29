import { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import it from '../locales/it.json';
import es from '../locales/es.json';
import pt from '../locales/pt.json';

import flagIt from '../assets/icons/it.svg';
import flagEs from '../assets/icons/es.svg';
import flagEn from '../assets/icons/en.svg';
import flagPt from '../assets/icons/pt.svg';

const translations = { en, it, es, pt };

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Get language from localStorage or default to 'it' (Italian)
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'it';
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = language => {
    if (translations[language]) {
      setCurrentLanguage(language);
    }
  };

  const t = (key, defaultValue = '') => {
    const keys = key.split('.');
    let value = translations[currentLanguage];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || defaultValue;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: [
      { code: 'it', name: 'Italiano', flag: flagIt },
      { code: 'es', name: 'Español', flag: flagEs },
      { code: 'en', name: 'English', flag: flagEn },
      { code: 'pt', name: 'Português', flag: flagPt }
    ]
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
