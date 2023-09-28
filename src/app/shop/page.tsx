import { productsInStock } from "../domains/product/productsInStock";
import Image from "next/image";

export default function Shop() {
  return (
    <div className="section-container">
      <h2 className="mb-5">
        All clothing and jewelry pieces are already available for buying
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8 px-10">
        {productsInStock.map((product) => (
          <div key={product.id} className="flex flex-col items-center gap-2">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={350}
              height={350}
              priority
              className="img-product-in-stock hover:scale-100"
            />
            <h3>{product.title}</h3>
            <div>{product.price} UAH</div>
          </div>
        ))}
      </div>
    </div>
  );
}
