import { ProductItem } from "@/models/ProductSchema";

export const getProductsByCollectionId = async (
  collectionId: string
): Promise<ProductItem[] | null> => {
  try {
    const res = await fetch(`/api/products?collection_id=${collectionId}`, {
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

export const getProductById = async (
  id: string | undefined
): Promise<ProductItem | null> => {
  try {
    const res = await fetch(`/api/products?id=${id}`, {
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
