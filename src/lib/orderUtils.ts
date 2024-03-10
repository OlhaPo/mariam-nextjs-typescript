import { CartItem } from "@/services/cart/types";

export function calculateSubtotal(items: CartItem[]): number {
  return items
    .map((item) => item.count * item.product.price)
    .reduce((a, b) => a + b);
}
