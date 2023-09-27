import Link from "next/link";
import Image from "next/image";
import dressImage from "public/dresses/dress-cover.jpg";
import broocheImage from "public/brooches/brooches-cover.jpg";
import braceletImage from "public/bracelets/bracelets-cover.jpg";
import earringImage from "public/earrings/earrings-cover.jpg";
import necklaceImage from "public/necklaces/necklaces-cover.jpg";
import ringImage from "public/rings/rings-cover.jpg";
import collarImage from "public/collars/collars-cover.jpg";
import bagImage from "public/bags/bags-cover.jpg";

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
        <div className="collection-navLink">
          <Link href={"/dresses"}>
            <Image
              src={dressImage}
              width={300}
              height={300}
              alt="Dresses"
              className="collection-cover"
            />
            <h3>Dresses</h3>
          </Link>
        </div>
        <div className="collection-navLink">
          <Link href={"/brooches"}>
            <Image
              alt="Brooches"
              src={broocheImage}
              width={300}
              height={300}
              className="collection-cover"
            />
            <h3>Brooches</h3>
          </Link>
        </div>
        <div className="collection-navLink">
          <Link href={"/bracelets"}>
            <Image
              src={braceletImage}
              width={300}
              height={300}
              alt="Bracelets"
              className="collection-cover"
            />
            <h3>Bracelets</h3>
          </Link>
        </div>
        <div className="collection-navLink">
          <Link href={"/earrings"}>
            <Image
              alt="Earrings"
              src={earringImage}
              width={300}
              height={300}
              className="collection-cover"
            />
            <h3>Earrings</h3>
          </Link>
        </div>
        <div className="collection-navLink">
          <Link href={"/necklaces"}>
            <Image
              alt="Necklaces"
              src={necklaceImage}
              width={300}
              height={300}
              className="collection-cover"
            />
            <h3>Necklaces</h3>
          </Link>
        </div>
        <div className="collection-navLink">
          <Link href={"/rings"}>
            <Image
              src={ringImage}
              width={300}
              height={300}
              alt="Rings"
              className="collection-cover"
            />
            <h3>Rings</h3>
          </Link>
        </div>
        <div className="collection-navLink">
          <Link href={"/collars"}>
            <Image
              alt="Collars"
              src={collarImage}
              width={300}
              height={300}
              className="collection-cover"
            />
            <h3>Collars</h3>
          </Link>
        </div>
        <div className="collection-navLink">
          <Link href={"/bags"}>
            <Image
              alt="Bags"
              src={bagImage}
              width={300}
              height={300}
              className="collection-cover"
            />
            <h3>Bags</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
