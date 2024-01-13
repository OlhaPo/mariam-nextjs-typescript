import { ProductItem, ProductStatus } from "@/models/ProductSchema";
import Image from "next/image";
import { Locale } from "../../../i18n.config";
import { getLangField } from "@/lib/dictionaryUtils";
import { Translations } from "@/lib/dictionaryUtils";
import { useCartStore } from "@/services/cart/hooks";

export default function ProductCard({
  product,
  translations,
  lang,
}: {
  product: ProductItem;
  translations: Translations;
  lang: Locale;
}) {
  const addToCart = useCartStore((state) => state.addToCart);

  function getLabelByStatus(
    dict: { [key: string]: string },
    status: ProductStatus
  ): string {
    const key = status.toString();
    return dict ? dict[key] : "";
  }

  function handleAddToCart(product: ProductItem) {
    addToCart(product);
  }

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
        <p>
          {getLabelByStatus(
            translations?.productStatus as { [key: string]: string },
            product.status
          )}
        </p>
        <p>{product.price} UAH</p>
        <p>{getLangField(product, "description_", lang)}</p>
        {product.status !== ProductStatus.SoldOut ? (
          <button className="btn-nav" onClick={() => handleAddToCart(product)}>
            {getLabelByStatus(
              translations?.cartButton as { [key: string]: string },
              product.status
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
}
