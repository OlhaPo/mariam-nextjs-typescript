import { Schema, model, models } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface CollectionItem {
  titleUk: string;
  titleEn: string;
  collectionName: string;
}

// 2. Create a Schema corresponding to the document interface.
const collectionSchema = new Schema<CollectionItem>({
  titleUk: { type: String, required: true },
  titleEn: { type: String, required: true },
  collectionName: { type: String, required: true },
});

// 3. Create a Model.
export const Collection =
  models.CollectionItems ||
  model<CollectionItem>("CollectionItems", collectionSchema);
