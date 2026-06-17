import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "../src/locales/en/translation.json"
import uz from "../src/locales/uz/translation.json"
import ru from "../src/locales/ru/translation.json"

i18n.use(initReactI18next).init({
    resources: {
        en: {translation: en},
        uz: {translation: uz},
        ru: {translation: ru},
    },
    lng: localStorage.getItem("language") || "uz",
    fallbackLng: "uz"
})

export default i18n