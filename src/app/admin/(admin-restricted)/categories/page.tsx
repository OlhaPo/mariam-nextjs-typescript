import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div className="categories-page">
      <div className="flex items-center gap-48">
        <h1 className="page-headers">List of categories</h1>
        <Link
          className="bg-[#9DACB7] rounded-md border px-5 py-3"
          href={"/admin/categories/new"}
        >
          Add new category
        </Link>
      </div>
    </div>
  );
}
