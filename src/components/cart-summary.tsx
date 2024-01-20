"use client";

import { useCartStore } from "@/services/cart/hooks";
import Link from "next/link";
import Image from "next/image";

// export interface CartSummaryProps {}

export function CartSummary() {
  const { cart, totalPrice } = useCartStore();

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-left uppercase text-xl mb-10">Cart Summary</h2>
      {cart.map((item) => (
        <div
          className="border-b-slate-500 flex flex-row"
          key={item.product._id}
        >
          <div>
            <Image
              src={item.product.imageUrls[0]}
              alt="hero"
              width={150}
              height={150}
              className="pr-5"
            />
          </div>
          <div>
            <p>
              <span>{item.count}</span> x <span>{item.product.title_en}</span>
            </p>{" "}
            <p>Price: {item.product.price} UAH</p>
          </div>
        </div>
      ))}
      <div className="inline-block my-5">
        Subtotal: <span>{totalPrice()}</span> UAH{" "}
      </div>
      <div>
        <Link href="/" className="btn-primary">
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
