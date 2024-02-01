import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, CartState } from "./types";
import { ProductItem } from "@/models/ProductSchema";
import { calculateSubtotal } from "@/lib/orderUtils";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: <CartItem[]>[],
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
        set((state) => {
          if (state.cart.some((item) => item.product._id === product._id)) {
            return state;
          }
          const newItem: CartItem = {
            product,
            count: 1,
          };
          return { cart: [...state.cart, newItem] };
        });
      },
      removeFromCart: (product: ProductItem) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.product._id !== product._id),
        }));
      },
      totalPrice: (): number => {
        const { cart } = get();
        if (cart.length) {
          return calculateSubtotal(cart);
        }
        return 0;
      },
      clearCart: () => set({ cart: [] }),
      isInCart: (productId: string | undefined): boolean => {
        return get().cart.some((p) => p.product._id === productId);
      },
    }),
    {
      name: "items-storage",
    }
  )
);
