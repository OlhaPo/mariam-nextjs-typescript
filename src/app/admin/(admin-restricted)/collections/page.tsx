"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "@radix-ui/themes";
import { CollectionItem } from "@/models/CollectionSchema";

export default function CollectionsPage() {
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  useEffect(() => {
    fetchCollections();
  }, []);

  function fetchCollections() {
    axios.get("/api/collections").then((result) => setCollections(result.data));
  }

  return (
    <div className="collections-page">
      <div className="flex items-center gap-48">
        <h1 className="page-headers">List of collections</h1>
        <Link
          className="bg-[#9DACB7] rounded-md border px-5 py-3"
          href={"/admin/collections/new"}
        >
          Add new collection name
        </Link>
      </div>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title UK</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Title En</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Collection Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {collections.length > 0 &&
            collections.map((collection) => (
              <Table.Row key={collection._id}>
                <Table.RowHeaderCell>{collection.titleUk}</Table.RowHeaderCell>
                <Table.Cell>{collection.titleEn}</Table.Cell>
                <Table.Cell>{collection.collectionName}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
