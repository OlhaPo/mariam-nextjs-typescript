import Link from "next/link";
import Image from "next/image";
import { collectionCovers } from "@/app/domains/product/productsToPreOrder";

export default function Collections() {
  return (
    <section
      id="collections"
      className="max-w-screen-xl mx-auto py-16 font-semibold text-primary"
    >
      <div>
        <h2 className="mb-5 text-center">View collections</h2>
      </div>
      <div className="flex flex-wrap flex-row max-w-screen-xl gap-5 md:gap-12 items-center justify-center">
        {collectionCovers.map((item) => (
          <div className="collection-navLink">
            <Link href={item.pathName}>
              <Image
                src={item.imageUrl}
                width={300}
                height={300}
                alt={item.title}
                className="collection-cover"
              />
              <h3>{item.title}</h3>
            </Link>{" "}
          </div>
        ))}
      </div>
    </section>
  );
}
