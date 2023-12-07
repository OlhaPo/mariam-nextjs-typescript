import NavLink from "../navigation/nav-link";
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";

export async function Navigation({ lang }: { lang: Locale }) {
  const { footer, navigation } = await getDictionary(lang);
  return (
    <div className="contacts-section">
      <span className="contacts-subheader">{footer.menu_subtitle}</span>
      <NavLink href={`/${lang}/about`}>{navigation.about}</NavLink>
      <NavLink href={`/${lang}/#collections`}>{navigation.collections}</NavLink>
      <NavLink href={`/${lang}/shop`}>{navigation.shop}</NavLink>
      {/* <NavLink href={`/${lang}/orders`}>{navigation.orders}</NavLink> */}
    </div>
  );
}
