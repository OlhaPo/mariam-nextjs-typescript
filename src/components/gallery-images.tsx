"use client";

import NextJsImage from "@/lib/galleryNextImage.hook";
import { GalleryImage } from "@/models/GalleryImagesSchema";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({ galleryImages }: { galleryImages: GalleryImage[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = galleryImages.map((image) => ({
    src: image.imageUrl,
    alt: image.title,
  }));

  return (
    <div className="section-container">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8 px-10">
        {galleryImages.map((image, i) => (
          <div key={image._id} className="relative w-full h-[300px]">
            <Image
              src={image.imageUrl}
              alt={image.title}
              width={500}
              height={500}
              className="cursor-pointer"
              loading="lazy"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      <Lightbox
        styles={{ container: { backgroundColor: "#EEEEEE" }, icon: {color: "#2B4A33"} }}
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
}