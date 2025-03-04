"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { adminPanel } from "@/lib/constants";
import { GalleryImage } from "@/models/GalleryImagesSchema";
import EditGalleryImageForm from "@/components/edit-gallery-image-form";

export default function EditGalleryImagePage({
  params,
}: {
  params: { id: string };
}) {
  const [imageInfo, setImageInfo] = useState<GalleryImage | null>(
    null
  );

  const router = useRouter();

  useEffect(() => {
    if (!params.id) {
      return;
    }
    axios.get("/api/gallery?id=" + params.id).then((response) => {
      setImageInfo(response.data as GalleryImage);
    });
  }, [params.id]);

  async function saveData(data: GalleryImage) {
    try {
      await axios.put("/api/gallery", data);
      router.push("/admin/gallery");
    } catch (e) {
      // @TODO: show error msg
      console.error(e);
    }
  }

  return (
    <div className="pt-3">
      <h1 className="page-headers mb-5">{adminPanel.editGalleryImage}</h1>
      {imageInfo ? (
        <EditGalleryImageForm data={imageInfo} onSave={saveData} />
      ) : (
        <div>{adminPanel.galleryImageNotFound}</div>
      )}
    </div>
  );
}
