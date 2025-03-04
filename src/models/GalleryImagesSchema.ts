import { Schema, model, models } from "mongoose";
import { mongooseConnect } from "../../lib/mongogoose";


export interface GalleryImage {
  _id: string;  
  imageUrl: string;
  title: string;
  sort_position?: number;
}

export async function getGalleryImagesFromDb(): Promise<GalleryImage[]> {
  await mongooseConnect();  
  const result = await Gallery.find().sort({ sort_position: 1 }).lean<GalleryImage[]>();
  return result.map((image) => ({
    _id: image._id.toString(), 
    imageUrl: image.imageUrl, 
    title: image.title,
    sort_position: image.sort_position ?? 0, 
  }));  
}

const gallerySchema = new Schema<GalleryImage>({ 
  imageUrl: { type: String },  
  title: { type: String, required: true },
  sort_position: { type: Number, required: true },
});

export const Gallery =
  models?.GalleryImages || model<GalleryImage>("GalleryImages", gallerySchema);
