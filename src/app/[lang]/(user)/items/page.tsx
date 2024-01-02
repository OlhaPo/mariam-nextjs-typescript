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
    const load = async () => {
      const p = await getProductsByCollectionId(currentCollection?._id);
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
            <Image
              src={product.imageUrls[0]}
              alt={product.title_en}
              width={600}
              height={600}
              className="img-product-in-stock hover:scale-110"
            />
            <h3>{getLangField(product, "title_", params.lang)}</h3>
            <p>{product.status}</p>
            <p className="text-center">{product.price} UAH</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function Items({ params }: { params: { lang: Locale } }) {
//   // const allProducts = [
//   //   ...braceletsItems,
//   //   ...broochesItems,
//   //   ...collarsItems,
//   //   ...ringsItems,
//   //   ...earringsItems,
//   //   ...wreathsItems,
//   //   ...dressesItems,
//   //   ...necklacesItems,
//   // ];

//   const searchParams = useSearchParams();
//   const activeCollection = searchParams.get("collection");
//   const [translations, setTranslations] = useState({});
//   const [collections, setCollections] = useState<CollectionItem[]>([]);
//   // let filteredProducts = collections;

//   useEffect(() => {
//     axios.get("/api/collections").then((result) => {
//       setCollections(result.data);
//     });
//   }, []);

//   useEffect(() => {
//     const getTranslations = async () => {
//       const t = await getDictionary(params.lang);
//       setTranslations(t);
//     };
//     getTranslations();
//   }, []);

//   let filteredCollection;

//   if (activeCollection) {
//     filteredCollection = collections.filter(
//       (p) => p.collection_name === activeCollection
//     );
//   }

//   const currentCollection = collections.find(
//     (c) => c.collection_name === activeCollection
//   );

//   return (
//     <div className="section-container">
//       <Link
//         href={`/${params.lang}/#collections`}
//         className="inline-flex items-center gap-3 pb-10 text-lg"
//       >
//         <MdArrowBackIosNew />
//         <span>{(translations as any).page?.collections?.breadcrumbs}</span>
//       </Link>

//       <h2>
//         {params.lang === "uk"
//           ? currentCollection?.title_uk
//           : currentCollection?.title_en}
//       </h2>
//       <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 px-10 pt-10">
//         {collections.map((collection) => (
//           <div key={collection._id} className="flex flex-col items-center">
//             <Image
//               src={collection.imageUrl}
//               alt={collection.collection_name}
//               width={600}
//               height={600}
//               priority
//               className="img-product-in-stock hover:scale-110"
//             />
//             {/* <p>{product.inStock[params.lang]}</p> */}
//             {/* <p className="text-center">{product.price} UAH</p> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
