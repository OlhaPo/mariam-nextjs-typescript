"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "@radix-ui/themes";
import { ProductItem } from "@/models/ProductSchema";
import Swal from "sweetalert2";

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
      title: "Are you sure?",
      text: `Do you want to delete ${product.titleEn}?`,
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes, Delete!",
      confirmButtonColor: "#d55",
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
        <h1 className="page-headers">Products</h1>
        <Link
          className="bg-[#9DACB7] rounded-md border px-5 py-3"
          href={"/admin/products/new"}
        >
          Add new product
        </Link>
      </div>
      <Table.Root className="mt-20">
        <Table.Header className="text-lg">
          <Table.Row>
            <Table.ColumnHeaderCell>Title UK</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Title En</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description Uk</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description En</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="text-base">
          {products.length > 0 &&
            products.map((product) => (
              <Table.Row key={product._id}>
                <Table.Cell>{product.titleUk}</Table.Cell>
                <Table.Cell>{product.titleEn}</Table.Cell>
                <Table.Cell>{product.descriptionUk}</Table.Cell>
                <Table.Cell>{product.descriptionEn}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>
                  <Link href={`/admin/products/edit/${product._id}`}>
                    <button className="edit-btn">Edit</button>
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => deleteProduct(product)}
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
