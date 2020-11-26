import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import resources from './locales';
i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  fallbackLng: 'vi',
  hasLoadedNamespace: ['vi', 'en'],
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
    wait: true,
  },
});
export default i18n;