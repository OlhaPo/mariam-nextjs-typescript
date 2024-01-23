import { ProductItem } from "@/models/ProductSchema";

export interface CartItem {
  product: ProductItem;
  count: number;
}

export type CartState = {
  cart: CartItem[];
  count: () => number;
  incrementItem: (product: ProductItem) => void;
  decrementItem: (product: ProductItem) => void;
  addToCart: (product: ProductItem) => void;
  removeFromCart: (product: ProductItem) => void;
  totalPrice: () => number;
  clearCart: () => void;
};
