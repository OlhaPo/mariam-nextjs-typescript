"use client";

import { CheckoutFormProps } from "@/components/checkout-form";
import { Order } from "@/models/OrderSchema";
import { useCartStore } from "@/services/cart/hooks";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const { clearCart } = useCartStore();
  async function placeNewOrder(data: Order) {
    try {
      const res = await fetch(`/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      router.push("/order-confirmation");
      clearCart();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  return (
    <section className="checkout">
      <div>
        <h1 className="uppercase text-2xl">Checkout</h1>
        <CheckoutFormNoSSR onSave={placeNewOrder} />
      </div>
      <div>
        <CartSummaryNoSSR />
      </div>
    </section>
  );
}
