"use client";

import CollectionsForm from "@/components/collections-form";
import { CollectionItem } from "@/models/CollectionSchema";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditCollectionPage({
  params,
}: {
  params: { id: string };
}) {
  const [collectionInfo, setCollectionInfo] = useState<CollectionItem | null>(
    null
  );

  const router = useRouter();

  useEffect(() => {
    if (!params.id) {
      return;
    }
    axios.get("/api/collections?id=" + params.id).then((response) => {
      setCollectionInfo(response.data as CollectionItem);
    });
  }, [params.id]);

  async function saveData(data: CollectionItem) {
    // @TODO: implement save
    try {
      await axios.put("/api/collections", data);
      router.push("/admin/collections");
    } catch (e) {
      // @TODO: show error msg
      console.error(e);
    }
  }

  return (
    <div className="pt-3">
      <h1 className="page-headers mb-5">Edit Collection</h1>
      {collectionInfo ? (
        <CollectionsForm data={collectionInfo} onSave={saveData} />
      ) : (
        <div>Collection not found</div>
      )}
    </div>
  );
}
