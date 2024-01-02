import ProductItem from "@/components/product-item";
import { getProductById } from "@/services/product";
import { Locale } from "../../../../../../i18n.config";

export default async function ItemPage({
  params,
}: {
  params: { id: string; lang: Locale };
}) {
  const productDetailsData = await getProductById(params.id);
  return (
    <div className="section-container">
      {productDetailsData ? (
        <ProductItem product={productDetailsData} lang={params.lang} />
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
}
