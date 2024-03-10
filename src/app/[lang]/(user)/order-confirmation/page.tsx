import { getDictionary } from "@/lib/dictionary";
import { Locale } from "../../../../../i18n.config";
import Image from "next/image";
import Logo from "../../../../../public/images/mariam-logo.svg";
import Link from "next/link";
import { INSTAGRAM_LINK, FACEBOOK_LINK } from "@/constants/contacts";

export default async function OrderConfirmationPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <section className="confirmation-page">
      <h1 className="text-3xl text-primary">
        {page.confirmation_page.thank_you}
      </h1>
      <div className="text-[19px] mt-10">
        <p
          dangerouslySetInnerHTML={{
            __html: page.confirmation_page.paragraph_one,
          }}
        ></p>
        <p>{page.confirmation_page.paragraph_two}</p>
        <p>{page.confirmation_page.paragraph_three}</p>
        <div className="inline-flex gap-3 items-baseline">
          <Link
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-links"
          >
            Instagram
          </Link>
          <span>{page.confirmation_page.span}</span>
          <Link
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-links"
          >
            Facebook
          </Link>
        </div>
        <p>{page.confirmation_page.paragraph_four}</p>
      </div>
      <Image src={Logo} alt="Logo" width={100} className="mt-10" />
    </section>
  );
}
