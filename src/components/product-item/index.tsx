import { Product } from "@/domains/product/types";
import Image from "next/image";
import LinkButton from "../uikit/button";
import { Locale } from "../../../i18n.config";

type ProductItemProps = {
  product: Product;
  lang?: Locale;
};

export default function ProductItem({ product, lang }: ProductItemProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap">
      <div>
        <Image
          src={product.imageUrls[0]}
          height={500}
          width={500}
          alt={product.title}
        />
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-left">{product.title}</h2>
        <span>{product.price} UAH</span>
        <p>{product.description}</p>
        <div>
          <LinkButton href={`/${lang}/cart`}>Add to cart</LinkButton>
        </div>
      </div>
    </div>
  );
}
