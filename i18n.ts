import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: require("@/public/locales/en/common.json"),
      chatbot: require("@/public/locales/en/chatbot.json"),
      dashboard: require("@/public/locales/en/dashboard.json"),
      "landing-page": require("@/public/locales/en/landing-page.json"),
    },
    vi: {
      common: require("@/public/locales/vi/common.json"),
      chatbot: require("@/public/locales/vi/chatbot.json"),
      dashboard: require("@/public/locales/vi/dashboard.json"),
      "landing-page": require("@/public/locales/vi/landing-page.json"),
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
