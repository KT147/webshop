import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./i18n/en.json";
import etJSON from "./i18n/et.json"

const resources = {
  en: {
    translation: enJSON
  },
  et: {
    translation: etJSON
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;