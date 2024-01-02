import ProductItem from "@/components/product-item";
import { productsInStock } from "@/domains/product/productsInStock";
import { Locale } from "../../../../../../i18n.config";

export default function ItemPage({
  params,
}: {
  params: { id: string; lang: Locale };
}) {
  return (
    <div className="section-container">
      {/* {product ? (
        <ProductItem product={product} />
      ) : (
        <div>Product not found</div>
      )} */}
    </div>
  );
}
