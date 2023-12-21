import { productsInStock } from "@/domains/product/productsInStock";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "../../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Shop({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <div className="section-container">
      <h3 className="mb-5">{page.shop.header}</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8 px-10">
        {productsInStock.map((product) => (
          <div key={product.id} className="flex flex-col items-center gap-2">
            {/* <Link href={`/items/${product.id}`}> */}
            <Image
              src={product.imageUrls[0]}
              alt={product.title}
              width={500}
              height={500}
              priority
              className="img-product-in-stock hover:scale-100"
            />
            {/* </Link> */}
            <h3>{product.title}</h3>
            <p className="text-center">{product.price} UAH</p>
          </div>
        ))}
      </div>
    </div>
  );
}
