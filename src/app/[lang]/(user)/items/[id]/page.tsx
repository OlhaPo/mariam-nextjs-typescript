import ProductItem from "@/components/product-item";
import { productsInStock } from "@/domains/product/productsInStock";

export default function ItemPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const product = productsInStock.find((p) => p.id === id);

  return (
    <div className="section-container">
      {product ? (
        <ProductItem product={product} />
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
}
