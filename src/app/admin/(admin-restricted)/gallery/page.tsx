"use client";

import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "@radix-ui/themes";
import Swal from "sweetalert2";
import { adminPanel } from "@/lib/constants";
import { GalleryImage } from "@/models/GalleryImagesSchema";

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  useEffect(() => {
    fetchGalleryImages();
  }, []);

  function fetchGalleryImages() {
    axios.get("/api/gallery").then((result) => setGalleryImages(result.data));
  }

  function deleteGalleryImage(image: GalleryImage) {
    Swal.fire({
      title: adminPanel.swalTitle,
      text: `${adminPanel.swalText} ${image.title}?`,
      showCancelButton: true,
      cancelButtonText: adminPanel.swalCancelBtn,
      confirmButtonText: adminPanel.swalConfirmBtn,
      confirmButtonColor: "#d55",
      cancelButtonColor: "#2b4a33",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { _id } = image;
        await axios.delete("/api/gallery?id=" + _id);
        fetchGalleryImages();
      }
    });
  }

  return (
    <div className="collections-page">
      <div className="flex items-center gap-48">
        <h1 className="page-headers">{adminPanel.gallery}</h1>
        <Link
          className="bg-[#9DACB7] rounded-md border px-5 py-3"
          href={"/admin/gallery/new"}
        >
          {adminPanel.addGalleryImage}</Link>
      </div>

      <Table.Root className="mt-20">
        <Table.Header className="text-lg">
          <Table.Row>
            <Table.ColumnHeaderCell>{adminPanel.titleUk}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{adminPanel.image}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="text-base">
          {galleryImages.length > 0 &&
            galleryImages.map((img) => (
              <Table.Row key={img._id}>
                <Table.Cell>{img.title}</Table.Cell>
                <Table.Cell><Image src={img.imageUrl} alt={img.title} width={50} height={50} /></Table.Cell>
                <Table.Cell>
                  <Link href={`/admin/gallery/edit/${img._id}`}>
                    <button className="edit-btn">{adminPanel.edit}</button>
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => deleteGalleryImage(img)}
                  >
                    {adminPanel.delete}
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
