"use client";

import EditProductForm from "@/components/edit-product-form";
import { ProductItem } from "@/models/ProductSchema";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { adminPanel } from "@/lib/constants";

export default function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const [productInfo, setProductInfo] = useState<ProductItem | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (!params.id) {
      return;
    }
    axios
      .get("/api/products?id=" + params.id)
      .then((response) => {
        setProductInfo(response.data as ProductItem);
      })
      .catch(() => {
        // show err message
      });
  }, [params.id]);

  async function saveData(data: ProductItem) {
    try {
      await axios.put("/api/products", data);
      router.push("/admin/products");
    } catch (e) {
      // @TODO: show error msg
      console.error(e);
    }
  }

  return (
    <div className="pt-3">
      <h1 className="page-headers mb-5">{adminPanel.editProduct}</h1>
      {productInfo ? (
        <EditProductForm data={productInfo} onSave={saveData} />
      ) : (
        <div>{adminPanel.productNotFound}</div>
      )}
    </div>
  );
}
