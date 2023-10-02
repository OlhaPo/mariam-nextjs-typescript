import { productsInStock } from "../domains/product/productsInStock";
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="section-container">
      <h2 className="mb-5">
        All clothing and jewelry pieces are already available for buying
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8 px-10">
        {productsInStock.map((product) => (
          <div key={product.id} className="flex flex-col items-center gap-2">
            <Link href={"/product"}>
              <Image
                src={product.imageUrls[0]}
                alt={product.title}
                width={500}
                height={500}
                priority
                className="img-product-in-stock hover:scale-100"
              />
              <h3>{product.title}</h3>
              <p className="text-center">{product.price} UAH</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
