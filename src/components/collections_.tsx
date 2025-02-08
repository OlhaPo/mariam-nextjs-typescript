import Link from "next/link";
import Image from "next/image";
import { Locale } from "../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import {
  CollectionItem,
  getAllCollectionsFromDb,
} from "@/models/CollectionSchema";
import { getLangField } from "@/lib/dictionaryUtils";

export default async function Collections({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);
  const allCollections = await getAllCollectionsFromDb();

  return (
    <section id="collections" className="section-container">
      <div className="flex flex-wrap flex-row gap-5 md:gap-12 items-center justify-center">
        {allCollections?.map((item: CollectionItem) => (
          <div className="collection-navLink" key={item._id}>
            <Link href={`${lang}/items?collection=${item.collection_name}`}>
             <h3>{getLangField(item, "title_", lang)}</h3>
              <Image
                src={item.imageUrl}
                className="collection-cover"
                alt={getLangField(item, "title_", lang)}
                width={300}
                height={300}
                loading="lazy"              
              />             
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
