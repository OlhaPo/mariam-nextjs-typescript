import { Product } from "@/domains/product/types";
import Image from "next/image";
import LinkButton from "@/components/uikit/button";

type ProductItemProps = {
  product: Product;
  category: string | null;
};

export default function ProductItem(props: ProductItemProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap">
      <div>
        <Image
          src={props.product.imageUrls[0]}
          height={500}
          width={500}
          alt={props.product.title}
        />
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-left">{props.product.title}</h2>
        <span>{props.product.price} UAH</span>
        <p>{props.product.description}</p>
        <div>
          <LinkButton href="/cart">Add to cart</LinkButton>
        </div>
      </div>
    </div>
  );
}
