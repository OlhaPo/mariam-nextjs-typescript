import mongoose, { Schema, model, models } from "mongoose";
import { ProductItem } from "./ProductSchema";

export interface OrderItem {
  product: string;
  count: number;
}

export interface Order {
  _id?: string;
  items: OrderItem[];
  first_name: string;
  last_name: string;
  email?: string;
  phone_number: string;
  messenger: string;
  comment?: string;
}

export interface PopulatedOrder {
  _id: string;
  items: { product: ProductItem; count: number }[];
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  messenger: string;
  comment: string;
  createdAt: Date;
}

export const orderSchema = new Schema<Order>(
  {
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ProductItems",
        },
        count: { type: Number },
      },
    ],
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String },
    phone_number: { type: String, required: true },
    messenger: { type: String, required: true },
    comment: { type: String },
  },
  { timestamps: true }
);

export const OrderModel = models.Orders || model<Order>("Orders", orderSchema);
