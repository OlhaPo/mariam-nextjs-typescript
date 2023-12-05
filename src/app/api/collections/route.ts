import { Collection } from "@/models/CollectionSchema";
import { mongooseConnect } from "../../../../lib/mongogoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await mongooseConnect();

  const data = await req.json();
  const { titleUk, titleEn, collectionName } = data;
  const collectionDoc = await Collection.create({
    titleUk,
    titleEn,
    collectionName,
  });
  return NextResponse.json(collectionDoc);
}

export async function GET(req: NextRequest) {
  await mongooseConnect();
  const result = await Collection.find({});
  return NextResponse.json(result);
}
