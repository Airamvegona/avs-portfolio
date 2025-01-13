// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "contact": "Contact Me",
        // Otras traducciones...
      },
    },
    de: {
      translation: {
        "contact": "Kontaktiere mich",
        // Otras traducciones...
      },
    },
  },
  lng: "en", // Idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
