import { productsInStock } from "../domains/product/productsInStock";
import Image from "next/image";

export default function Shop() {
  return (
    <div>
      <h2>
        All clothing and crocheted jewelry pieces are already available for
        buying.
      </h2>
      <div>
        {productsInStock.map((product) => (
          <div key={product.id}>
            {product.title}
            <Image
              src={product.image}
              alt={product.title}
              width={350}
              height={350}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
