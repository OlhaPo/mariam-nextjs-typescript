import { Product } from "./types";

export const productsInStock: Product[] = [
  {
    id: 1,
    imageUrls: ["/images/products-in-stock/bags-cover.jpg"],
    title: "title",
    price: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a mollis leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse a pulvinar arcu.",
    category: "bags",
  },
  {
    id: 2,
    imageUrls: ["/images/bracelets/bracelets-on-hand-set.jpg"],
    title: "title",
    price: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a mollis leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse a pulvinar arcu.",
    category: "bracelets",
  },
];
