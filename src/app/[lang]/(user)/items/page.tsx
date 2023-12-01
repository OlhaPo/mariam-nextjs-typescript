"use client";

import { mainPageCollections } from "@/domains/collection/mainPageCollections";
import { braceletsItems } from "@/domains/product/bracelets";
import { broochesItems } from "@/domains/product/brooches";
import { collarsItems } from "@/domains/product/collars";
import { dressesItems } from "@/domains/product/dresses";
import { earringsItems } from "@/domains/product/earrings";
import { necklacesItems } from "@/domains/product/necklaces";
import { ringsItems } from "@/domains/product/rings";
import { wreathsItems } from "@/domains/product/wreaths";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Locale } from "../../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default function Items({ params }: { params: { lang: Locale } }) {
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
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const getTranslations = async () => {
      const t = await getDictionary(params.lang);
      setTranslations(t);
    };
    getTranslations();
  }, []);

  if (activeCategory) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === activeCategory
    );
  }

  const currentCategory = mainPageCollections.find(
    (c) => c.category === activeCategory
  );

  return (
    <div className="section-container">
      <Link
        href={`/${params.lang}/#collections`}
        className="inline-flex items-center gap-3 pb-10 text-lg"
      >
        <MdArrowBackIosNew />
        <span>{(translations as any).page?.collections?.breadcrumbs}</span>
      </Link>

      <h2>{currentCategory?.title[params.lang]}</h2>
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
            <p>{product.inStock[params.lang]}</p>
            {/* <p className="text-center">{product.price} UAH</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
