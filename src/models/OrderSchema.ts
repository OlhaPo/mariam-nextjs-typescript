import mongoose, { Schema, model, models } from "mongoose";
import { mongooseConnect } from "../../lib/mongogoose";

export interface OrderItem {
  product_id: string;
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

export const orderSchema = new Schema<Order>({
  items: [
    {
      product_id: {
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
});

export const OrderModel = models.Orders || model<Order>("Orders", orderSchema);
