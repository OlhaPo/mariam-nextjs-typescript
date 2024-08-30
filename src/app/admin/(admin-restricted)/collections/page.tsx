"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "@radix-ui/themes";
import { CollectionItem } from "@/models/CollectionSchema";
import Swal from "sweetalert2";
import { adminPanel } from "@/lib/constants";

export default function CollectionsPage() {
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  useEffect(() => {
    fetchCollections();
  }, []);

  function fetchCollections() {
    axios.get("/api/collections").then((result) => setCollections(result.data));
  }

  function deleteCollection(collection: CollectionItem) {
    Swal.fire({
      title: adminPanel.swalTitle,
      text: `${adminPanel.swalText} ${collection.collection_name}?`,
      showCancelButton: true,
      cancelButtonText: adminPanel.swalCancelBtn,
      confirmButtonText: adminPanel.swalConfirmBtn,
      confirmButtonColor: "#d55",
      cancelButtonColor: "#2b4a33",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { _id } = collection;
        await axios.delete("/api/collections?id=" + _id);
        fetchCollections();
      }
    });
  }

  return (
    <div className="collections-page">
      <div className="flex items-center gap-48">
        <h1 className="page-headers">{adminPanel.сollections}</h1>
        <Link
          className="bg-[#9DACB7] rounded-md border px-5 py-3"
          href={"/admin/collections/new"}
        >
          {adminPanel.addCollection}</Link>
      </div>

      <Table.Root className="mt-20">
        <Table.Header className="text-lg">
          <Table.Row>
            <Table.ColumnHeaderCell>{adminPanel.titleUk}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="text-base">
          {collections.length > 0 &&
            collections.map((collection) => (
              <Table.Row key={collection._id}>
                <Table.Cell>{collection.title_uk}</Table.Cell>
                <Table.Cell>
                  <Link href={`/admin/collections/edit/${collection._id}`}>
                    <button className="edit-btn">{adminPanel.edit}</button>
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => deleteCollection(collection)}
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
