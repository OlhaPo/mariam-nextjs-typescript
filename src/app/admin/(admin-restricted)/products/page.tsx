import Link from "next/link";

export default function Products() {
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
    </div>
  );
}
