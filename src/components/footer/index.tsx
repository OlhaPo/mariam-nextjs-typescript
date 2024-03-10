"use client";

import { Contacts } from "./contacts";
import { Info } from "./info";
import { NavigationFooter } from "./navigation-footer";
import { Locale } from "../../../i18n.config";
import { Translations } from "@/lib/dictionaryUtils";

export function Footer({
  lang,
  translations,
}: {
  lang: Locale;
  translations: Translations;
}) {
  return (
    <footer id="contacts" className="contacts">
      <Info translations={translations} />
      <NavigationFooter lang={lang} translations={translations} />
      <Contacts translations={translations} />
    </footer>
  );
}
