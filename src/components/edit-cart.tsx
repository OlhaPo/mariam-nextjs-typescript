import { useCartStore } from "@/services/cart/hooks";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image";

export default function EditCart() {
  const { cart, removeFromCart, incrementItem, decrementItem } = useCartStore();
  return (
    <>
      {cart.map((product, i) => (
        <div key={i} className="flex flex-row gap-5 mt-5 md:mt-10">
          <div>
            <Image
              src={product.product.imageUrls[0]}
              alt="Picture of handcrafted item"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col items-start">
            <p>{product.product.title_en}</p>
            <p className="text-gray">
              {product.product.price} <span> UAH</span>
            </p>
            <div className="inline-flex gap-2 items-center">
              <button onClick={() => decrementItem(product.product)}>
                <FaMinus />
              </button>
              <span>{product.count}</span>
              <button onClick={() => incrementItem(product.product)}>
                <FaPlus />
              </button>
            </div>

            <button onClick={() => removeFromCart(product.product)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
