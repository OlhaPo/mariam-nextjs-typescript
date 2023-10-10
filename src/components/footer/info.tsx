import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";

export async function Info({ lang }: { lang: Locale }) {
  const { footer } = await getDictionary(lang);
  return (
    <div className="contacts-section basis-full xl:basis-1/2 lg:self-center">
      <p dangerouslySetInnerHTML={{ __html: footer.info }}></p>
    </div>
  );
}
