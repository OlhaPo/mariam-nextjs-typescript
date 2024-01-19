import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem, CartState } from "./types";
import { ProductItem } from "@/models/ProductSchema";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      count: (): number => {
        const { cart } = get();
        if (cart.length) {
          return cart.map((item) => item.count).reduce((a, b) => a + b);
        }
        return 0;
      },
      incrementItem: (product: ProductItem) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.product._id === product._id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        })),
      decrementItem: (product: ProductItem) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.product._id === product._id
              ? { ...item, count: Math.max(item.count - 1, 1) }
              : item
          ),
        })),
      addToCart: (product: ProductItem) => {
        const newItem: CartItem = {
          product,
          count: 1,
        };

        set((state) => ({ cart: [...state.cart, newItem] }));
      },
      removeFromCart: (product: ProductItem) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.product._id !== product._id),
        }));
      },
      totalPrice: (): number => {
        const { cart } = get();
        if (cart.length) {
          return cart
            .map((item) => item.count * item.product.price)
            .reduce((a, b) => a + b);
        }
        return 0;
      },
    }),
    {
      name: "items-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
