"use client";

import { useCartStore } from "@/services/cart/hooks";
import Link from "next/link";
import Image from "next/image";
import EditCart from "./edit-cart";

export function CartSummary() {
  const { totalPrice } = useCartStore();

  return (
    <div className="flex flex-col">
      <h2 className="text-left uppercase text-xl">Cart Summary</h2>
      <EditCart />
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
