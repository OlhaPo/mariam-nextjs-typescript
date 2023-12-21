import Link from "next/link";
import { Locale } from "../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { CollectionItem } from "@/models/CollectionSchema";
import { getAllCollections } from "@/services/collection";

export default async function Collections({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);
  const allCollections = await getAllCollections();

  function getLangField(
    item: CollectionItem,
    fieldName: string
  ): string | undefined {
    const fullKey = (fieldName + lang) as keyof CollectionItem;
    return item[fullKey];
  }

  return (
    <section id="collections" className="section-container">
      <div>
        <h3 className="mb-5">{page.collections.header}</h3>
      </div>
      <div className="flex flex-wrap flex-row gap-5 md:gap-12 items-center justify-center">
        {allCollections.map((item: CollectionItem) => (
          <div className="collection-navLink" key={item._id}>
            <Link href={`${lang}/items?category=${item.collection_name}`}>
              <img
                src={item.imageUrl}
                className="collection-cover"
                alt={getLangField(item, "title_")}
              />
              <h3>{getLangField(item, "title_")}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
