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
      <div className="flex flex-wrap flex-row gap-5 md:gap-8 justify-center md:justify-normal">
        {galleryImages.map((image, i) => (
          <div key={image._id}>
            <Image
              src={image.imageUrl}
              alt={image.title}
              className="img-product hover:scale-100"
              width={200}
              height={200}
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