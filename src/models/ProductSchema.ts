import { Schema, model, models } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface ProductItem {
  _id?: string;
  titleUk: string;
  titleEn: string;
  descriptionUk: string;
  descriptionEn: string;
  price: number;
  imageUrls: string[];
}

// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<ProductItem>({
  titleUk: { type: String, required: true },
  titleEn: { type: String, required: true },
  descriptionUk: { type: String, required: true },
  descriptionEn: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrls: [{ type: String }],
});

// 3. Create a Model.
export const Product =
  models.ProductItems || model<ProductItem>("ProductItems", productSchema);
