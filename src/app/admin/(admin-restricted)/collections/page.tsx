"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";

export default function CollectionsPage() {
  useEffect(() => {
    axios.get("/api/collections");
  }, []);

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
    </div>
  );
}
