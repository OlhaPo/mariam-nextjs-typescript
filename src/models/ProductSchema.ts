import mongoose, { Schema, model, models } from "mongoose";

export interface ProductItem {
  _id?: string;
  titleUk: string;
  titleEn: string;
  descriptionUk: string;
  descriptionEn: string;
  collectionId: string | undefined;
  price: number;
  imageUrls: string[];
}

const productSchema = new Schema<ProductItem>({
  titleUk: { type: String, required: true },
  titleEn: { type: String, required: true },
  descriptionUk: { type: String, required: true },
  descriptionEn: { type: String, required: true },
  collectionId: { type: mongoose.Types.ObjectId, ref: "CollectionItems" },
  price: { type: Number, required: true },
  imageUrls: [{ type: String }],
});

export const Product =
  models.ProductItems || model<ProductItem>("ProductItems", productSchema);
