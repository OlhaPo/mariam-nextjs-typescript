"use client";

// import { CartSummaryProps } from "@/components/cart-summary";
// import { CheckoutForm } from "@/components/checkout-form";
import dynamic from "next/dynamic";

const CartSummaryNoSSR = dynamic(
  () => import("@/components/cart-summary").then((mod) => mod.CartSummary),
  {
    ssr: false,
  }
);

const CheckoutFormNoSSR = dynamic(
  () => import("@/components/checkout-form").then((mod) => mod.CheckoutForm),
  {
    ssr: false,
  }
);

export default function CheckoutPage() {
  return (
    <section className="checkout">
      <div>
        <h1 className="uppercase text-2xl mb-10">Checkout</h1>
        <CheckoutFormNoSSR />
      </div>
      <div>
        <CartSummaryNoSSR />
      </div>
    </section>
  );
}
