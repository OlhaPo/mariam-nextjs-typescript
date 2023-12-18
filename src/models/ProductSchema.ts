import mongoose, { Schema, model, models } from "mongoose";

export interface ProductItem {
  _id?: string;
  title_uk: string;
  title_en: string;
  description_uk: string;
  description_en: string;
  collection_id: string | undefined;
  price: number;
  imageUrls: string[];
  status: string;
}

const productSchema = new Schema<ProductItem>({
  title_uk: { type: String, required: true },
  title_en: { type: String, required: true },
  description_uk: { type: String, required: true },
  description_en: { type: String, required: true },
  collection_id: { type: mongoose.Types.ObjectId, ref: "CollectionItems" },
  price: { type: Number, required: true },
  imageUrls: [{ type: String }],
  status: { type: String, required: true },
});

export const Product =
  models.ProductItems || model<ProductItem>("ProductItems", productSchema);
