export default function Products() {
  return (
    <div className="products-page">
      <div className="flex items-center gap-48">
        <h1 className="uppercase text-primary text-xl font-semibold">
          List of products
        </h1>
        <button className="bg-[#9DACB7] rounded-md border px-5 py-3">
          Add new product
        </button>
      </div>
    </div>
  );
}
