import mongoose, { Schema, model, models } from "mongoose";
import { mongooseConnect } from "../../lib/mongogoose";

export enum ProductStatus {
  InStock,
  PreOrder,
  SoldOut,
}

export interface ProductItem {
  _id?: string;
  title_uk: string;
  title_en: string;
  description_uk: string;
  description_en: string;
  collection_id: string | undefined;
  price: number;
  imageUrls: string[];
  status: ProductStatus;
  sort_position?: number;
}

export async function getProductsInStockFromDb(): Promise<ProductItem[]> {
  await mongooseConnect();
  const result = await Product.find<ProductItem>({
    status: ProductStatus.InStock,
  }).sort({ sort_position: 1 });
  return result;
}

const productSchema = new Schema<ProductItem>({
  title_uk: { type: String, required: true },
  title_en: { type: String, required: true },
  description_uk: { type: String },
  description_en: { type: String },
  collection_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CollectionItems",
  },
  price: { type: Number },
  imageUrls: [{ type: String }],
  status: {
    type: Number,
    enum: Object.values(ProductStatus).filter((s) => !isNaN(Number(s))),
  },
  sort_position: { type: Number, required: true },
});

export const Product =
  models?.ProductItems || model<ProductItem>("ProductItems", productSchema);
