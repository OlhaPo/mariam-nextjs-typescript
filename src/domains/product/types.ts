export type Product = {
  id: number;
  imageUrls: string[];
  title: string;
  price: number;
  description?: string;
  category: string;
  inStock: {
    [lang: string]: string;
  };
};

export type Collection = {
  title: {
    [lang: string]: string;
  };
  category: string;
  imageUrl: string;
};
