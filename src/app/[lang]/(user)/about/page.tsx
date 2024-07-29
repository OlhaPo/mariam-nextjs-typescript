import Image from "next/image";
import HeroImage from "../../../../../public/images/hero.jpg";
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
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-5 md:gap-8">
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
            <p
              dangerouslySetInnerHTML={{ __html: page.about.description_p_one }}
            ></p>
            <p>{page.about.description_p_two}</p>
            <p>{page.about.description_p_two}</p>
            <p>{page.about.description_p_three}</p>
          </div>
          <div>
            <p>{page.about.shop_description}</p>
            <div className="py-5 text-center md:text-left">
              <LinkButton href={`/${lang}/shop`}>
                {page.about.shop_link}
              </LinkButton>
            </div>
          </div>
          <div>
            <p>{page.about.collections_description}</p>
            <div className="py-5 text-center md:text-left">
              <LinkButton href={`/${lang}/#collections`}>
                {page.about.collections_link}
              </LinkButton>
            </div>
          </div>
          <p>{page.about.description_ending}</p>
        </div>
      </div>
    </section>
  );
}
