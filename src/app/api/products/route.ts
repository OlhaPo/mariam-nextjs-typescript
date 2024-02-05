import { Product, ProductItem, ProductStatus } from "@/models/ProductSchema";
import { mongooseConnect } from "../../../../lib/mongogoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await mongooseConnect();
  const data = await req.json();
  const {
    title_uk,
    title_en,
    description_en,
    description_uk,
    price,
    collection_id,
    imageUrls,
    status,
  } = data;

  let sort_position = 1;
  const lastProduct = await Product.findOne<ProductItem>({})
    .sort({ sort_position: -1 })
    .exec();
  if (lastProduct) {
    sort_position = (lastProduct.sort_position ?? 0) + 1;
  }

  const productDoc = await Product.create({
    title_uk,
    title_en,
    description_en,
    description_uk,
    price,
    collection_id,
    imageUrls,
    status: status as ProductStatus,
    sort_position,
  });
  return NextResponse.json(productDoc);
}

export async function GET(req: NextRequest) {
  await mongooseConnect();
  const id = req.nextUrl.searchParams.get("id");
  const collection_id = req.nextUrl.searchParams.get("collection_id");
  const status = req.nextUrl.searchParams.get("status");

  let result: ProductItem[] | ProductItem | null;
  if (id) {
    result = await Product.findById<ProductItem>(id);
  } else if (collection_id) {
    result = await Product.find<ProductItem>({ collection_id }).sort({
      sort_position: 1,
    });
  } else if (status) {
    result = await Product.find<ProductItem>({ status }).sort({
      sort_position: 1,
    });
  } else {
    result = await Product.find<ProductItem>().sort({ sort_position: 1 });
  }
  return NextResponse.json(result);
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const {
    _id,
    title_uk,
    title_en,
    description_en,
    description_uk,
    price,
    collection_id,
    imageUrls,
    status,
  } = data;
  const productDoc = await Product.updateOne<ProductItem>(
    { _id },
    {
      title_uk,
      title_en,
      description_en,
      description_uk,
      price,
      collection_id,
      imageUrls,
      status,
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
