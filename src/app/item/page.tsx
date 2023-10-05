"use client";

import ProductItem from "@/components/product-item";
import { productsInStock } from "@/domains/product/productsInStock";
import { productsToPreOrder } from "@/domains/product/productsToPreOrder";
import { useSearchParams } from "next/navigation";

export default function ItemOverview() {
  const allProducts = [...productsInStock, ...productsToPreOrder];
  const searchParams = useSearchParams();

  return (
    <div className="section-container">
      <div>
        {allProducts.map((product) => (
          <div>
            <ProductItem key={product.id} product={product} category="dress" />
          </div>
        ))}
      </div>
    </div>
  );
}
