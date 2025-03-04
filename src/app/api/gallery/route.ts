import { Gallery, GalleryImage, getGalleryImagesFromDb } from "@/models/GalleryImagesSchema";
import { NextRequest, NextResponse } from "next/server";
import { mongooseConnect } from "../../../../lib/mongogoose";

export async function POST(req: NextRequest) {
  await mongooseConnect();
  const data = await req.json();
  const { title, imageUrl } = data;

let sort_position = 1;
  const lastImage = await Gallery.findOne<GalleryImage>({})
    .sort({ sort_position: -1 })
    .exec();
  if (lastImage) {
    sort_position = (lastImage.sort_position ?? 0) + 1;
  }

  const galleryDoc = await Gallery.create({
    title,    
    imageUrl,
    sort_position,
  });
  return NextResponse.json(galleryDoc);
}

export async function GET(req: NextRequest) {
  await mongooseConnect();
  const id = req.nextUrl.searchParams.get("id");

  let result;
    if (id) {
      result = await Gallery.findById(id);
    }  else {
      result = await getGalleryImagesFromDb();
    }
    return NextResponse.json(result);
  }
  

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const { title, imageUrl, _id } = data;
  const galleryDoc = await Gallery.updateOne(
    { _id },
    {
      title,     
      imageUrl,
    }
  );
  return NextResponse.json(galleryDoc);
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await mongooseConnect();
  try {
    await Gallery.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "Gallery Image deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    {
      return NextResponse.json(
        {
          message: "Failed to Delete Gallery Image",
          error,
        },
        { status: 500 }
      );
    }
  }
}