"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Locale } from "../../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { CollectionItem } from "@/models/CollectionSchema";
import { getCollectionByName } from "@/services/collection";
import { getProductsByCollectionId } from "@/services/product";
import { ProductItem } from "@/models/ProductSchema";
import { getLangField } from "@/lib/dictionaryUtils";

export default function Items({ params }: { params: { lang: Locale } }) {
  const searchParams = useSearchParams();
  const activeCollectionName = searchParams.get("collection");
  const [translations, setTranslations] = useState({});
  const [currentCollection, setCurrentCollection] =
    useState<CollectionItem | null>(null);
  const [products, setProducts] = useState<ProductItem[] | null>(null);

  useEffect(() => {
    const getTranslations = async () => {
      const t = await getDictionary(params.lang);
      setTranslations(t);
    };
    getTranslations();
  }, []);

  useEffect(() => {
    const load = async () => {
      const c = await getCollectionByName(activeCollectionName);
      setCurrentCollection(c);
    };
    load();
  }, [activeCollectionName]);

  useEffect(() => {
    if (!currentCollection) return;

    const load = async () => {
      const p = await getProductsByCollectionId(currentCollection?._id ?? "");
      setProducts(p);
    };
    load();
  }, [currentCollection]);

  return (
    <div className="section-container">
      <Link
        href={`/${params.lang}/#collections`}
        className="inline-flex items-center gap-3 pb-10 text-lg"
      >
        <MdArrowBackIosNew />
        <span>{(translations as any).page?.collections?.breadcrumbs}</span>
      </Link>

      <h2>{getLangField(currentCollection, "title_", params.lang)}</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 px-10 pt-10">
        {products?.map((product: ProductItem) => (
          <div key={product._id} className="flex flex-col items-center">
            <Link href={`/${params.lang}/items/${product._id}`}>
              <Image
                src={product.imageUrls[0]}
                alt={product.title_en}
                width={600}
                height={600}
                className="img-product-in-stock hover:scale-110"
              />
            </Link>
            <h3>{getLangField(product, "title_", params.lang)}</h3>
            <p>
              {(translations as any).productStatus[product.status.toString()]}
            </p>
            <p className="text-center">{product.price} UAH</p>
          </div>
        ))}
      </div>
    </div>
  );
}
