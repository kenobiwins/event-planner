import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

// to do figure out with base url
// const FRONTEND_BASE_URL = 'http://localhost:5173'
// 'https://kenobiwins.github.io'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    backend: {
      loadPath: `/locales/{{lng}}/translation.json`,
    },

    fallbackLng: 'en',
    supportedLngs: ['en', 'ua'], // Use 'supportedLngs' instead of 'whitelist'

    debug: true,

    detection: {
      order: ['localStorage', 'cookie'],
    },

    interpolation: {
      escapeValue: false,
    },
  })
