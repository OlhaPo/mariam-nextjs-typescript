"use client";

import CollectionsForm from "@/components/collections-form";
import { CollectionItem } from "@/models/CollectionSchema";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NewCollectionPage() {
  const router = useRouter();

  async function saveCollection(data: CollectionItem) {
    try {
      await axios.post("/api/collections", data);
      router.push("/admin/collections");
    } catch (e) {
      // @TODO: show error msg
      console.error(e);
    }
  }

  return (
    <div className="pt-3">
      <h1 className="page-headers mb-5">New Collection</h1>
      <CollectionsForm onSave={saveCollection} />
    </div>
  );
}
