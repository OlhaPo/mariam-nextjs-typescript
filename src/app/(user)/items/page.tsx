"use client";

import ProductItem from "@/components/product-item";
import { productsInStock } from "@/domains/product/productsInStock";
import { productsToPreOrder } from "@/domains/product/productsToPreOrder";
import { useSearchParams } from "next/navigation";

export default function Items() {
  const allProducts = [...productsInStock, ...productsToPreOrder];
  const searchParams = useSearchParams();

  return (
    <div className="section-container">
      <div className="flex flex-col flex-wrap gap-12">
        {allProducts
          .filter((p) => p.category === searchParams.get("category"))
          .map((product) => (
            <div key={product.title}>
              <ProductItem key={product.id} product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}
