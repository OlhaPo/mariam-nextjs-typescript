"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "@radix-ui/themes";
import { CollectionItem } from "@/models/CollectionSchema";
import Swal from "sweetalert2";

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
      title: "Are you sure?",
      text: `Do you want to delete ${collection.collectionName}?`,
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes, Delete!",
      confirmButtonColor: "#d55",
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
        <h1 className="page-headers">Collections</h1>
        <Link
          className="bg-[#9DACB7] rounded-md border px-5 py-3"
          href={"/admin/collections/new"}
        >
          Add new collection
        </Link>
      </div>

      <Table.Root className="mt-20">
        <Table.Header className="text-lg">
          <Table.Row>
            <Table.ColumnHeaderCell>Title UK</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Title En</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="text-base">
          {collections.length > 0 &&
            collections.map((collection) => (
              <Table.Row key={collection._id}>
                <Table.Cell>{collection.title_uk}</Table.Cell>
                <Table.Cell>{collection.title_en}</Table.Cell>
                <Table.Cell>{collection.collectionName}</Table.Cell>
                <Table.Cell>
                  <Link href={`/admin/collections/edit/${collection._id}`}>
                    <button className="edit-btn">Edit</button>
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => deleteCollection(collection)}
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
