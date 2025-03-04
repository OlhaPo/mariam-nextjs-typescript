import GalleryImages from "@/components/gallery-images";
import { getGalleryImagesFromDb } from "@/models/GalleryImagesSchema";


export default async function GalleryPage() {
  const galleryImages = await getGalleryImagesFromDb(); 

  return <GalleryImages galleryImages={galleryImages} />; 
}
