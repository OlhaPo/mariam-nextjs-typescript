import mongoose, { Schema, model, models } from "mongoose";

export interface OrderItem {
  product_id: string;
  count: number;
}

/*
@TODO:
    + complete Order interface
    + complete orderSchema
    - create API endpoints:
        - POST /order (for user)
        - GET /orders (admin)
    - create a helper fn for user `placeNewOrder()`
    - bind placeNewOrder() fn to 'Place Order' btn
*/

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
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductItems",
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
