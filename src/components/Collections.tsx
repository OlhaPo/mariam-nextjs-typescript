import Link from "next/link";
import Image from "next/image";
import { mainPageCollections } from "@/constants/collection/constants";

export function Collections() {
  return (
    <section id="collections" className="section-container">
      <div>
        <h2 className="mb-5">View collections</h2>
      </div>
      <div className="flex flex-wrap flex-row gap-5 md:gap-12 items-center justify-center">
        {mainPageCollections.map((item) => (
          <div className="collection-navLink" key={item.title}>
            <Link href={item.name}>
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
