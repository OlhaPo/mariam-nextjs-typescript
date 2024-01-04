import { Product, ProductItem, ProductStatus } from "@/models/ProductSchema";
import { mongooseConnect } from "../../../../../lib/mongogoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongooseConnect();
  const result = await Product.find<ProductItem>({
    status: ProductStatus.InStock,
  });
  return NextResponse.json(result);
}
