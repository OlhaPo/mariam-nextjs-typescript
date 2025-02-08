import { Translations } from "@/lib/dictionaryUtils";

export function Info({ translations }: { translations: Translations }) {
  return (
    <div className="contacts-section basis-full xl:basis-1/2 lg:self-center">
      <p
        dangerouslySetInnerHTML={{
          __html: (translations.footer as Translations)?.info,
        }}
      ></p>
      <p
        dangerouslySetInnerHTML={{
          __html: (translations.footer as Translations)?.quote,
        }}
      ></p>
    </div>
  );
}
