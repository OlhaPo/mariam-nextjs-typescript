import Image from "next/image";
import Link from "next/link";
import { Locale } from "../../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { ProductItem } from "@/models/ProductSchema";
import { getProductsInStock } from "@/services/product";
import { getLangField } from "@/lib/dictionaryUtils";

export default async function Shop({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const productsInStock = await getProductsInStock();

  return (
    <div className="section-container">
      <h3 className="mb-5">{page.shop.header}</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8 px-10">
        {productsInStock.map((product: ProductItem) => (
          <div key={product._id} className="flex flex-col items-center gap-2">
            <Link href={`/${lang}/items/${product._id}`}>
              <Image
                src={product.imageUrls[0]}
                alt={getLangField(product, "title_", lang)}
                width={500}
                height={500}
                priority
                className="img-product-in-stock hover:scale-100"
              />
            </Link>
            <h3>{getLangField(product, "title_", lang)}</h3>
            <p className="text-center">{product.price} UAH</p>
          </div>
        ))}
      </div>
    </div>
  );
}
