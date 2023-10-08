export type Product = {
  id: number;
  imageUrls: string[];
  title: string;
  price: number;
  description?: string;
  category: string;
};

export type Collection = {
  title: string;
  name: string;
  imageUrl: string;
};
