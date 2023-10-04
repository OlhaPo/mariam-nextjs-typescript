import { Contacts } from "./contacts";
import { Info } from "./info";
import { Navigation } from "./navigation";

export function Footer() {
  return (
    <footer id="contacts" className="contacts">
      <Info />
      <Navigation />
      <Contacts />
    </footer>
  );
}
