import Image from "next/image";
import HeroImage from "public/images/hero.jpg";
import LinkButton from "@/components/uikit/button";
import { Locale } from "../../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <section className="max-w-[1040px] m-auto py-4 md:py-16 px-6 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-8">
        <div>
          <Image
            src={HeroImage}
            width={450}
            height={350}
            alt="Picture of the brand owner"
            className="border-1 rounded-md mt-5 md:mt-0 h-auto"
          />
        </div>
        <div>
          <div>
            <h2 className="text-left">{page.about.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: page.about.description }}></p>
          </div>
          <div>
            <p>
              Thank you for stopping by my online corner. Feel free to check out
              the handmade jewelry and clothing pieces that are ready and
              waiting for buying.
            </p>
            <div className="py-5 text-center md:text-left">
              <LinkButton href={`/${lang}/shop`}>Welcome to Shop</LinkButton>
            </div>
          </div>
          <div>
            <p>
              For more inspiration I invite you to explore the collections,
              where everything is available for pre-order. Also, I would be
              honored to create something beautiful and unique just for you.
            </p>
            <div className="py-5 text-center md:text-left">
              <LinkButton href="/#collections">View all Collections</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
