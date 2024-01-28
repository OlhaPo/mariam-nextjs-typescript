import { Order, OrderModel } from "@/models/OrderSchema";
import { mongooseConnect } from "../../../../lib/mongogoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await mongooseConnect();
  const data = await req.json();
  const {
    items,
    first_name,
    last_name,
    email,
    phone_number,
    messenger,
    comment,
  } = data;
  const orderDoc = await OrderModel.create({
    items,
    first_name,
    last_name,
    email,
    phone_number,
    messenger,
    comment,
  });
  return NextResponse.json(orderDoc);
}

// export async function GET() {
//   const result = await getAllOrdersFromDb();
//   return NextResponse.json(result);
// }

export async function GET() {
  await mongooseConnect();
  const result = await OrderModel.find<Order>().populate("items.product_id");
  return NextResponse.json(result);
}
