"use client";

import { useCartStore } from "@/services/cart/hooks";
import { AiOutlineShopping } from "react-icons/ai";

export interface CartLabelProps {
  onOpen: () => void;
}

export function CartLabel({ onOpen }: CartLabelProps) {
  const { count, cart } = useCartStore();

  const displayCounter = () => {
    return <span className="mt-[-10px] text-[15px]">{count()}</span>;
  };

  return (
    <div className="inline-flex gap-1">
      <AiOutlineShopping size={28} onClick={onOpen} />
      {cart.length >= 1 ? displayCounter() : null}
    </div>
  );
}
