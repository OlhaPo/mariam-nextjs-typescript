"use client";

import { RxCross1 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { useCartStore } from "@/services/cart/hooks";

export default function ShoppingCart({ onClose }: { onClose: () => void }) {
  const {
    cart,
    removeFromCart,
    count,
    incrementItem,
    decrementItem,
    totalPrice,
  } = useCartStore();

  return (
    <section className="cart">
      <div className="flex flex-row justify-between border-b-black border-b">
        <h2>Shopping Cart</h2>
        <RxCross1 onClick={() => onClose()} />
      </div>
      {cart.map((product, i) => (
        <div className="flex flex-row gap-5">
          <div key={i}>
            <Image
              src={product.product.imageUrls[0]}
              alt="hero"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col items-start">
            <h2>{product.product.title_en}</h2>
            <h3 className="text-gray">
              {product.product.price} <span> UAH</span>
            </h3>
            <div className="inline-flex gap-2 items-center">
              <button onClick={() => decrementItem(product.product)}>
                <FaMinus />
              </button>
              <span>{product.count}</span>
              <button onClick={() => incrementItem(product.product)}>
                <FaPlus />
              </button>
            </div>
            <div>
              <button onClick={() => removeFromCart(product.product)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col">
        <div className="inline-flex justify-between items-center">
          <h2>Total items in cart</h2>
          <p>
            <span>{count()}</span> pieces
          </p>
        </div>
        <div className="inline-flex justify-between items-center">
          <h2>Subtotal</h2>
          <p>
            <span>{totalPrice()}</span> UAH
          </p>
        </div>
      </div>
      <button className="btn-nav">Checkout</button>
    </section>
  );
}
