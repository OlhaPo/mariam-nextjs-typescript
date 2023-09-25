import { Fredoka } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["300"] });

export default function Home() {
  return (
    <>
      <div className="main">
        <h1 className={fredoka.className}>
          <span className="text-center block md:inline mb-1 md:mb-0">
            mariam
          </span>{" "}
          crochet jewelry
        </h1>
      </div>
      <div
        id="collections"
        className="max-w-screen-xl mx-auto px-10 py-16 text-center font-semibold text-primary"
      >
        <h2 className="mb-5">View collections</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-10 justify-items-center">
          <Link href={"/dresses"}>
            <Image
              src="/dresses/dress-cover.jpg"
              width={450}
              height={450}
              alt="Dresses"
              className="collection-cover"
            />
            <h3>Dresses</h3>
          </Link>
          <Link href={"/brooches"}>
            <Image
              alt="Brooches"
              src="/brooches/brooches-cover.jpg"
              width={450}
              height={450}
              className="collection-cover"
            />
            <h3>Brooches</h3>
          </Link>
          <Link href={"/bracelets"}>
            <Image
              src="/bracelets/bracelets-cover.jpg"
              width={450}
              height={450}
              alt="Bracelets"
              className="collection-cover"
            />
            <h3>Bracelets</h3>
          </Link>
          <Link href={"/earrings"}>
            <Image
              alt="Earrings"
              src="/earrings/earrings-cover.jpg"
              width={450}
              height={450}
              className="collection-cover"
            />
            <h3>Earrings</h3>
          </Link>
          <Link href={"/necklaces"}>
            <Image
              alt="Necklaces"
              src="/necklaces/necklaces-cover.jpg"
              width={450}
              height={450}
              className="collection-cover"
            />
            <h3>Necklaces</h3>
          </Link>
          <Link href={"/rings"}>
            <Image
              src="/rings/rings-cover.jpg"
              width={450}
              height={450}
              alt="Rings"
              className="collection-cover"
            />
            <h3>Rings</h3>
          </Link>
          <Link href={"/collars"}>
            <Image
              alt="Collars"
              src="/collars/collars-cover.jpg"
              width={450}
              height={450}
              className="collection-cover"
            />
            <h3>Collars</h3>
          </Link>
          <Link href={"/bags"}>
            <Image
              alt="Bags"
              src="/bags/bags-cover.jpg"
              width={450}
              height={450}
              className="collection-cover"
            />
            <h3>Bags</h3>
          </Link>
        </div>
      </div>
    </>
  );
}
