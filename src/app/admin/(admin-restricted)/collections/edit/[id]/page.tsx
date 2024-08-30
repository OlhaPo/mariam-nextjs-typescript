"use client";

import EditCollectionForm from "@/components/edit-collection-form";
import { CollectionItem } from "@/models/CollectionSchema";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { adminPanel } from "@/lib/constants";

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
      <h1 className="page-headers mb-5">{adminPanel.editCollection}</h1>
      {collectionInfo ? (
        <EditCollectionForm data={collectionInfo} onSave={saveData} />
      ) : (
        <div>{adminPanel.collectionNotFound}</div>
      )}
    </div>
  );
}
