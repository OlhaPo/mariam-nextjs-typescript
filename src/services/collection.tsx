import { CollectionItem } from "@/models/CollectionSchema";

export const getAllCollections = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/collections", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCollectionByName = async (
  name: string | null
): Promise<CollectionItem | null> => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/collections?name=${name}`,
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
