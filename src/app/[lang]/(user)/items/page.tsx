"use client";

import { broochesItems } from "@/domains/product/brooches";
import { braceletsItems } from "@/domains/product/bracelets";
import { useSearchParams } from "next/navigation";
import { collarsItems } from "@/domains/product/collars";
import { ringsItems } from "@/domains/product/rings";
import { earringsItems } from "@/domains/product/earrings";
import Image from "next/image";
import { wreathsItems } from "@/domains/product/wreaths";
import { dressesItems } from "@/domains/product/dresses";
import { necklacesItems } from "@/domains/product/necklaces";

export default function Items() {
  const allProducts = [
    ...braceletsItems,
    ...broochesItems,
    ...collarsItems,
    ...ringsItems,
    ...earringsItems,
    ...wreathsItems,
    ...dressesItems,
    ...necklacesItems,
  ];
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
      <h3>TODO: Here goes some title</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 px-10 pt-10">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <Image
              src={product.imageUrls[0]}
              alt={product.title}
              width={600}
              height={600}
              priority
              className="img-product-in-stock hover:scale-110"
            />
            <h3>{product.title}</h3>
            <p className="text-center">{product.price} UAH</p>
          </div>
        ))}
      </div>
    </div>
  );
}
