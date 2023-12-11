import { Collection } from "@/models/CollectionSchema";
import { mongooseConnect } from "../../../../lib/mongogoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await mongooseConnect();
  const data = await req.json();
  const { titleUk, titleEn, collectionName, imageUrl } = data;
  const collectionDoc = await Collection.create({
    titleUk,
    titleEn,
    collectionName,
    imageUrl,
  });
  return NextResponse.json(collectionDoc);
}

export async function GET(req: NextRequest) {
  await mongooseConnect();
  const id = req.nextUrl.searchParams.get("id");

  let result;
  if (id) {
    result = await Collection.findById(id);
  } else {
    result = await Collection.find();
  }
  return NextResponse.json(result);
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const { titleUk, titleEn, collectionName, _id, imageUrl } = data;
  const collectionDoc = await Collection.updateOne(
    { _id },
    {
      titleUk,
      titleEn,
      collectionName,
      imageUrl,
    }
  );
  return NextResponse.json(collectionDoc);
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await mongooseConnect();
  try {
    await Collection.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "Collection Name deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    {
      return NextResponse.json(
        {
          message: "Failed to Delete Collection Name",
          error,
        },
        { status: 500 }
      );
    }
  }
}
