export type Product = {
  id: number;
  imageUrls: string[];
  title: string;
  price: number;
  description?: string;
  collection_name: string;
  inStock: {
    [lang: string]: string;
  };
};
