import { CollectionItem } from "@/models/CollectionSchema";

export const getCollectionByName = async (
  name: string | null
): Promise<CollectionItem | null> => {
  try {
    const res = await fetch(`/api/collections?name=${name}`, {
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
