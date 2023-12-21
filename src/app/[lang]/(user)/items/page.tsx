"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Locale } from "../../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { CollectionItem } from "@/models/CollectionSchema";
import axios from "axios";
import { Collection } from "mongoose";

export default function Items({ params }: { params: { lang: Locale } }) {
  // const allProducts = [
  //   ...braceletsItems,
  //   ...broochesItems,
  //   ...collarsItems,
  //   ...ringsItems,
  //   ...earringsItems,
  //   ...wreathsItems,
  //   ...dressesItems,
  //   ...necklacesItems,
  // ];

  const searchParams = useSearchParams();
  const activeCollection = searchParams.get("collection");
  const [translations, setTranslations] = useState({});
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  // let filteredProducts = collections;

  useEffect(() => {
    axios.get("/api/collections").then((result) => {
      setCollections(result.data);
    });
  }, []);

  useEffect(() => {
    const getTranslations = async () => {
      const t = await getDictionary(params.lang);
      setTranslations(t);
    };
    getTranslations();
  }, []);

  let filteredCollection;

  if (activeCollection) {
    filteredCollection = collections.filter(
      (p) => p.collection_name === activeCollection
    );
  }

  const currentCollection = collections.find(
    (c) => c.collection_name === activeCollection
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

      <h2>
        {params.lang === "uk"
          ? currentCollection?.title_uk
          : currentCollection?.title_en}
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 px-10 pt-10">
        {collections.map((collection) => (
          <div key={collection._id} className="flex flex-col items-center">
            <Image
              src={collection.imageUrl}
              alt={collection.collection_name}
              width={600}
              height={600}
              priority
              className="img-product-in-stock hover:scale-110"
            />
            {/* <p>{product.inStock[params.lang]}</p> */}
            {/* <p className="text-center">{product.price} UAH</p> */}
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
