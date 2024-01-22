import { getProductsInStockFromDb } from "@/models/ProductSchema";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await getProductsInStockFromDb();
  return NextResponse.json(result);
}
