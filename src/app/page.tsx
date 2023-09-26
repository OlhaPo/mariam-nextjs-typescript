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
        className="max-w-screen-xl mx-auto py-16 font-semibold text-primary"
      >
        <div>
          <h2 className="mb-5 text-center">View collections</h2>
        </div>

        <div className="flex flex-wrap flex-row max-w-screen-xl gap-5 md:gap-12 items-center justify-center">
          <div className="collection-navLink">
            <Link href={"/dresses"}>
              <Image
                src="/dresses/dress-cover.jpg"
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
                src="/brooches/brooches-cover.jpg"
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
                src="/bracelets/bracelets-cover.jpg"
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
                src="/earrings/earrings-cover.jpg"
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
                src="/necklaces/necklaces-cover.jpg"
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
                src="/rings/rings-cover.jpg"
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
                src="/collars/collars-cover.jpg"
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
                src="/bags/bags-cover.jpg"
                width={300}
                height={300}
                className="collection-cover"
              />
              <h3>Bags</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
