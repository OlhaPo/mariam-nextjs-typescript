"use client";

import NavLink from "../navigation/nav-link";
import { Locale } from "../../../i18n.config";
import { Translations } from "@/lib/dictionaryUtils";

export function NavigationFooter({
  lang,
  translations,
}: {
  lang: Locale;
  translations: Translations;
}) {
  return (
    <div className="contacts-section">      
      <NavLink href={`/${lang}/about`}>
        {(translations.navigation as Translations)?.about.toString()}
      </NavLink>
      <NavLink href={`/${lang}/#collections`}>
        {(translations.navigation as Translations)?.collections.toString()}
      </NavLink>
      <NavLink href={`/${lang}/shop`}>
        {(translations.navigation as Translations)?.shop.toString()}
      </NavLink>
      {/* <NavLink href={`/${lang}/orders`}>{navigation.orders}</NavLink> */}
    </div>
  );
}
