export type CartStore = {
  productIds: string[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  isItemInCart: (productId: string) => boolean;
};

// import { ProductItem } from "@/models/ProductSchema";

// export interface CartStore extends ProductItem {
//   count: number;
// }
