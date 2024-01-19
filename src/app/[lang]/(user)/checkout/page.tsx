"use client";

import { useCartStore } from "@/services/cart/hooks";
import CheckoutForm from "@/components/checkout-form";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutPage() {
  const { cart, totalPrice } = useCartStore();

  return (
    <section className="checkout">
      <div>
        <h1 className="uppercase text-2xl mb-10">Checkout</h1>
        <CheckoutForm />
      </div>
      <div className="absolute top-[23%] right-[20%] border-box">
        <h2 className="text-left uppercase text-xl mb-10">Cart Summary</h2>
        {cart.map((item) => (
          <div
            className="border-b-slate-500 flex flex-row pb-5"
            key={item.product._id}
          >
            <Image
              src={item.product.imageUrls[0]}
              alt="hero"
              width={90}
              height={90}
              className="pr-5"
            />
            <p>
              <span>{item.count}</span> x <span>{item.product.title_en}</span>
            </p>{" "}
            <p>Price: {item.product.price} UAH</p>
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
    </section>
  );
}
