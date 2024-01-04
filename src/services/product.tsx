import { ProductItem } from "@/models/ProductSchema";

export const getProductsInStock = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products/in_stock", {
      method: "GET",
      // cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getProductsByCollectionId = async (
  collectionId: string | undefined
): Promise<ProductItem[] | null> => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products?collection_id=${collectionId}`,
      {
        method: "GET",
        // cache: "no-store",
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getProductById = async (
  id: string | undefined
): Promise<ProductItem | null> => {
  try {
    const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
      method: "GET",
      // cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
