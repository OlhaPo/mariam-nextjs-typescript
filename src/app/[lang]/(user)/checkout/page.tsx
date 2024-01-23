"use client";

import { CheckoutFormProps } from "@/components/checkout-form";
// import { CartSummaryProps } from "@/components/cart-summary";
// import { CheckoutForm } from "@/components/checkout-form";
import dynamic from "next/dynamic";

const CartSummaryNoSSR = dynamic(
  () => import("@/components/cart-summary").then((mod) => mod.CartSummary),
  {
    ssr: false,
  }
);

const CheckoutFormNoSSR = dynamic<CheckoutFormProps>(
  () => import("@/components/checkout-form").then((mod) => mod.CheckoutForm),
  {
    ssr: false,
  }
);

export default function CheckoutPage() {
  function placeNewOrder() {}
  return (
    <section className="checkout">
      <div>
        <h1 className="uppercase text-2xl mb-10">Checkout</h1>
        <CheckoutFormNoSSR onSave={placeNewOrder} />
      </div>
      <div>
        <CartSummaryNoSSR />
      </div>
    </section>
  );
}
