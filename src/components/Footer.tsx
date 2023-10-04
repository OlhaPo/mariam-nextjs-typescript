import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";

export function Contacts() {
  return (
    <footer id="contacts" className="contacts">
      <div className="contacts-section basis-full xl:basis-1/2 lg:self-center">
        <p>
          <span className="font-fredoka text-lg md:text-2xl text-primary">
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
          <a href="mailto:mariam_jewelry@gmail.com">mariam_jewelry@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
