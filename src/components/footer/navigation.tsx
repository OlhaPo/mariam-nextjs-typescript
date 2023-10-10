import NavLink from "../navigation/NavLink";
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";

export async function Navigation({ lang }: { lang: Locale }) {
  const { footer, navigation } = await getDictionary(lang);
  return (
    <div className="contacts-section">
      <span className="contacts-subheader">{footer.menu_subtitle}</span>
      <NavLink href={"/about"}>{navigation.about}</NavLink>
      <NavLink href={"/shop"}>{navigation.shop}</NavLink>
      <NavLink href={"/orders"}>{navigation.orders}</NavLink>
    </div>
  );
}
