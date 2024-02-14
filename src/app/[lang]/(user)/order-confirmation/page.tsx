import { getDictionary } from "@/lib/dictionary";
import { Locale } from "../../../../../i18n.config";

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
      </div>
    </section>
  );
}
