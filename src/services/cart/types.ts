export type CartStore = {
  productIds: string[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  isItemInCart: (productId: string) => boolean;
};
