// import "server-only";
import { Locale, i18n } from "../../i18n.config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  uk: () => import("@/dictionaries/uk.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]();

// export const getDictionary = async (locale: Locale) => {
//   return locale == "uk" ? dictionaries.uk() : dictionaries.en();
// };

// export const getDictionary = async (locale: Locale) => dictionaries[locale]();
// export const getDictionary = async (locale: string) => {
//   const dictionary = dictionaries[locale];
//   // Check to see if it's a function
//   if (typeof dictionary === "function") {
//     return dictionary();
//   }
//   return;
// };

// export const getDictionary = async (locale: Locale) => dictionaries[locale]();
// export const getDictionary = async (locale: Locale) => {
//   return locale === "en" ? dictionaries.en() : dictionaries.uk();
// };
