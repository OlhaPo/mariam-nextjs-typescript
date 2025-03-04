"use client";

import EditGalleryImageForm from "@/components/edit-gallery-image-form";
import { adminPanel } from "@/lib/constants";
import { GalleryImage } from "@/models/GalleryImagesSchema";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NewGalleryImagePage() {
  const router = useRouter();

  async function saveGalleryImage(data: GalleryImage) {
    try {
      await axios.post("/api/gallery", data);
      router.push("/admin/gallery");
    } catch (e) {
      // @TODO: show error msg
      console.error(e);
    }
  }

  return (
    <div className="pt-3">
      <h1 className="page-headers mb-5">{adminPanel.newGalleryImage}</h1>
      <EditGalleryImageForm onSave={saveGalleryImage} />
    </div>
  );
}
