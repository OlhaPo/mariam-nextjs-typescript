import { Contacts } from "./contacts";
import { Info } from "./info";
import { Navigation } from "./navigation";
import { Locale } from "../../../i18n.config";

export async function Footer({ lang }: { lang: Locale }) {
  return (
    <footer id="contacts" className="contacts">
      <Info lang={lang} />
      <Navigation lang={lang} />
      <Contacts lang={lang} />
    </footer>
  );
}
