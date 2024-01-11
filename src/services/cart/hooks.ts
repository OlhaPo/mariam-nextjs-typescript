import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartStore } from "./types";

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      productIds: [],
      addItem: (productId) =>
        set((state) => ({ productIds: [...state.productIds, productId] })),
      removeItem: (productId: string) =>
        set((state) => ({
          productIds: state.productIds.filter((id) => id !== productId),
        })),
      isItemInCart: (productId: string) => get().productIds.includes(productId),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
