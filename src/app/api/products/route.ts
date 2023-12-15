import { Product, ProductItem } from "@/models/ProductSchema";
import { mongooseConnect } from "../../../../lib/mongogoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await mongooseConnect();
  const data = await req.json();
  const {
    titleUk,
    titleEn,
    descriptionEn,
    descriptionUk,
    price,
    collectionId,
    imageUrls,
  } = data;
  const productDoc = await Product.create({
    titleUk,
    titleEn,
    descriptionEn,
    descriptionUk,
    price,
    collectionId,
    imageUrls,
  });
  return NextResponse.json(productDoc);
}

export async function GET(req: NextRequest) {
  await mongooseConnect();
  const id = req.nextUrl.searchParams.get("id");

  let result;
  if (id) {
    result = await Product.findById(id);
  } else {
    result = await Product.find();
  }
  return NextResponse.json(result);
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const {
    _id,
    titleUk,
    titleEn,
    descriptionEn,
    descriptionUk,
    price,
    collectionId,
    imageUrls,
  } = data;
  const productDoc = await Product.updateOne<ProductItem>(
    { _id },
    {
      titleUk,
      titleEn,
      descriptionEn,
      descriptionUk,
      price,
      collectionId,
      imageUrls,
    }
  );
  return NextResponse.json(productDoc);
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await mongooseConnect();
  try {
    await Product.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "Product Item deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    {
      return NextResponse.json(
        {
          message: "Failed to Delete Product Item",
          error,
        },
        { status: 500 }
      );
    }
  }
}
