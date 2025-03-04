import { Schema, model, models } from "mongoose";
import { mongooseConnect } from "../../lib/mongogoose";

export interface CollectionItem {
  _id?: string;
  title_uk: string;
  title_en: string;
  collection_name: string;
  imageUrl: string;
}

export async function getAllCollectionsFromDb(): Promise<CollectionItem[]> {
  await mongooseConnect();
  const result = await Collection.find<CollectionItem>();
  return result;
}

const collectionSchema = new Schema<CollectionItem>({
  title_uk: { type: String, required: true },
  title_en: { type: String, required: true },
  collection_name: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export const Collection =
  models.CollectionItems ||
  model<CollectionItem>("CollectionItems", collectionSchema);
