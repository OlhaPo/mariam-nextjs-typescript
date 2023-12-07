import "../globals.css";
import { Navigation } from "@/components/navigation/index";
import { Footer } from "@/components/footer/index";
import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const translations = await getDictionary(params.lang);
  return (
    <>
      <Navigation translations={translations.navigation} lang={params.lang} />
      <div className="mt-20 text-base md:text-lg">{children}</div>
      <Footer lang={params.lang} />
    </>
  );
}
