import { ProductItem } from "@/models/ProductSchema";
import Image from "next/image";
import { Locale } from "../../../i18n.config";
import { getLangField } from "@/lib/dictionaryUtils";

export default function ProductItem({
  product,
  lang,
}: {
  product: ProductItem;
  lang: Locale;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
      <div>
        <Image
          src={product.imageUrls[0]}
          height={500}
          width={500}
          alt={getLangField(product, "title_", lang)}
        />
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-left">{getLangField(product, "title_", lang)}</h2>
        <span>{product.price} UAH</span>
        <p>{getLangField(product, "description_", lang)}</p>
      </div>
    </div>
  );
}
