"use client";

import ProductCard from "@/components/product-card";
import { getProductById } from "@/services/product";
import { Locale } from "../../../../../../i18n.config";
import { useEffect, useState } from "react";
import { ProductItem } from "@/models/ProductSchema";
import { getDictionary } from "@/lib/dictionary";
import CircleLoader from "react-spinners/CircleLoader";

export default function ItemPage({
  params,
}: {
  params: { id: string; lang: Locale };
}) {
  const [item, setItem] = useState<ProductItem | null>(null);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const getTranslations = async () => {
      const t = await getDictionary(params.lang);
      setTranslations(t);
    };
    getTranslations();
  }, [params.lang]);
  useEffect(() => {
    const loadItemData = async () => {
      const productDetailsData = await getProductById(params.id);
      setItem(productDetailsData);
    };
    loadItemData();
  }, [params.id]);

  return (
    <div className="section-container">
      {item ? (
        <ProductCard
          product={item}
          lang={params.lang}
          translations={translations}
        />
      ) : (
        <div>
          <CircleLoader color="#2B4A33" />
        </div>
      )}
    </div>
  );
}
