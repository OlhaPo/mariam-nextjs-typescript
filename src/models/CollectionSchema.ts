import { Schema, model, models } from "mongoose";
import { mongooseConnect } from "../../lib/mongogoose";

// 1. Create an interface representing a document in MongoDB.
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

// 2. Create a Schema corresponding to the document interface.
const collectionSchema = new Schema<CollectionItem>({
  title_uk: { type: String, required: true },
  title_en: { type: String, required: true },
  collection_name: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

// 3. Create a Model.
export const Collection =
  models.CollectionItems ||
  model<CollectionItem>("CollectionItems", collectionSchema);
