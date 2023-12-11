import { Schema, model, models } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface CollectionItem {
  _id?: string;
  titleUk: string;
  titleEn: string;
  collectionName: string;
  imageUrl: string;
}

// 2. Create a Schema corresponding to the document interface.
const collectionSchema = new Schema<CollectionItem>({
  titleUk: { type: String, required: true },
  titleEn: { type: String, required: true },
  collectionName: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

// 3. Create a Model.
export const Collection =
  models.CollectionItems ||
  model<CollectionItem>("CollectionItems", collectionSchema);
