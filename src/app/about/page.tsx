import Image from "next/image";
import HeroImage from "public/hero.jpg";
import LinkBtn from "@/components/LinkBtn";

export default function About() {
  return (
    <section className="max-w-[1040px] m-auto py-16 px-6 lg:px-0">
      <div className="grid grid-cols-2 items-center md:gap-8">
        <div>
          <Image
            src={HeroImage}
            width={450}
            height={350}
            alt="Picture of the brand owner"
            className="border-1 rounded-md"
          />
        </div>
        <div>
          <div>
            <h2 className="text-2xl">Hi there, dearest!</h2>
            <p>
              My name is Maryna Kambur. I'm the designer and owner of the brand{" "}
              <span className="font-bold text-primary">
                mariam crochet jewelry
              </span>{" "}
              and an artist from Kyiv, Ukraine.
            </p>
          </div>
          <div>
            <p>
              Thank you for stopping by my online corner. Feel free to check out
              the handmade jewelry and clothing peaces that are ready and
              waiting for buying.
            </p>
            <div className="py-5">
              <LinkBtn title="Welcome to Shop" pathName="/shop" />
            </div>
          </div>
          <div>
            <p>
              For more inspiration I invite you to explore the collections,
              where everything is available for pre-order. Also, I would be
              honored to create something beautiful and unique just for you.
            </p>
            <div className="py-5">
              <LinkBtn title="View all Collections" pathName="/#collections" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
