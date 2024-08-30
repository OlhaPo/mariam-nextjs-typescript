"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "@radix-ui/themes";
import { ProductItem } from "@/models/ProductSchema";
import Swal from "sweetalert2";
import { adminPanel } from "@/lib/constants";

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    axios.get("/api/products").then((result) => setProducts(result.data));
  }

  function deleteProduct(product: ProductItem) {
    Swal.fire({
      title: adminPanel.swalTitle,
      text: `${adminPanel.swalText} ${product.title_en}?`,
      showCancelButton: true,
      cancelButtonText: adminPanel.swalCancelBtn,
      confirmButtonText: adminPanel.swalConfirmBtn,
      confirmButtonColor: "#d55",
      cancelButtonColor: "#2b4a33",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { _id } = product;
        await axios.delete("/api/products?id=" + _id);
        fetchProducts();
      }
    });
  }
  return (
    <div className="products-page">
      <div className="flex items-center gap-48">
        <h1 className="page-headers">{adminPanel.products}</h1>
        <Link
          className="bg-[#9DACB7] rounded-md border px-5 py-3"
          href={"/admin/products/new"}
        >
          {adminPanel.addProduct}
        </Link>
      </div>
      <Table.Root className="mt-20">
        <Table.Header className="text-lg">
          <Table.Row>
            <Table.ColumnHeaderCell>{adminPanel.titleUk}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{adminPanel.descriptionUk}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{adminPanel.priceUAH}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="text-base">
          {products.length > 0 &&
            products.map((product) => (
              <Table.Row key={product._id}>
                <Table.Cell>{product.title_uk}</Table.Cell>
                <Table.Cell>{product.description_uk}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>
                  <Link href={`/admin/products/edit/${product._id}`}>
                    <button className="edit-btn">{adminPanel.edit}</button>
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => deleteProduct(product)}
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
