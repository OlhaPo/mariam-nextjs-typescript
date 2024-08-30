"use client";

import EditProductForm from "@/components/edit-product-form";
import { adminPanel } from "@/lib/constants";
import { ProductItem } from "@/models/ProductSchema";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const router = useRouter();

  async function saveProduct(data: ProductItem) {
    try {
      await axios.post("/api/products", data);
      router.push("/admin/products");
    } catch (e) {
      // @TODO: show error msg
      console.error(e);
    }
  }
  return (
    <div className="pt-3">
      <h1 className="page-headers mb-5">{adminPanel.newProduct}</h1>
      <EditProductForm onSave={saveProduct} />
    </div>
  );
}
