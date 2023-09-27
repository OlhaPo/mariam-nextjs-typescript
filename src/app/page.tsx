import { Fredoka } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import dressImage from "public/dresses/dress-cover.jpg";
import broocheImage from "public/brooches/brooches-cover.jpg";
import braceletImage from "public/bracelets/bracelets-cover.jpg";
import earringImage from "public/earrings/earrings-cover.jpg";
import necklaceImage from "public/necklaces/necklaces-cover.jpg";
import ringImage from "public/rings/rings-cover.jpg";
import collarImage from "public/collars/collars-cover.jpg";
import bagImage from "public/bags/bags-cover.jpg";

export const fredoka = Fredoka({ subsets: ["latin"], weight: ["300", "400"] });

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
      </div>
      <div id="contact" className="contacts">
        <div className="contacts-section basis-full lg:basis-1/2 lg:self-center">
          <p>
            <span
              className={`${fredoka.className} font-medium text-lg md:text-2xl text-primary`}
            >
              mariam crochet jewelry
            </span>{" "}
            is a Ukrainian clothing and crocheted jewelry brand founded by
            designer Maryna Kambur. Handcrafted lovingly in Kyiv, Ukraine.
          </p>
        </div>
        <div className="contacts-section">
          <span className="contacts-subheader">Menu</span>
          <Link href={"/about"}>About</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/orders-info"}>Orders and delivery</Link>
        </div>
        <div className="contacts-section">
          <span className="contacts-subheader">Contacts</span>
          <div className="flex flex-row gap-4">
            <a
              href="https://www.instagram.com/mariam_crochet_jewelry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://t.me/+380678354246"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane size={20} />
            </a>
            <a
              href="https://www.facebook.com/mariam.corner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
          </div>
          <div className="flex flex-col gap-1 md:gap-4">
            <a href="tel:+380678354246">+380678354246</a>
            <a href="mailto:mariam_jewelry@gmail.com">
              mariam_jewelry@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
