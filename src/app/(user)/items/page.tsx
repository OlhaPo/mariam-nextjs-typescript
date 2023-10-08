"use client";

import ProductItem from "@/components/product-item";
import { productsInStock } from "@/domains/product/productsInStock";
import { productsToPreOrder } from "@/domains/product/productsToPreOrder";
import { useSearchParams } from "next/navigation";

export default function Items() {
  const allProducts = [...productsInStock, ...productsToPreOrder];
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  let filteredProducts = allProducts;
  if (activeCategory) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === activeCategory
    );
  }

  return (
    <div className="section-container">
      <div className="flex flex-col flex-wrap gap-12">
        {filteredProducts.map((product) => (
          <div key={product.title}>
            <ProductItem key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
