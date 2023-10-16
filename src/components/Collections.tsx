import Link from "next/link";
import Image from "next/image";
import { mainPageCollections } from "@/constants/collection/constants";
import { Locale } from "../../i18n.config";
import { getDictionary } from "@/lib/dictionary";

export async function Collections({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);
  return (
    <section id="collections" className="section-container">
      <div>
        <h2 className="mb-5">{page.collections.header}</h2>
      </div>
      <div className="flex flex-wrap flex-row gap-5 md:gap-12 items-center justify-center">
        {mainPageCollections.map((item) => (
          <div className="collection-navLink" key={item.title[lang]}>
            <Link href={`${lang}/items?category=${item.category}`}>
              <Image
                src={item.imageUrl}
                width={300}
                height={300}
                alt={item.title[lang]}
                className="collection-cover"
              />
              <h3>{item.title[lang]}</h3>
            </Link>{" "}
          </div>
        ))}
      </div>
    </section>
  );
}
