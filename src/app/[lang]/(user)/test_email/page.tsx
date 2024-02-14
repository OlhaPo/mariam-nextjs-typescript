import { ConfirmationEmail } from "@/components/confirmation-email";
import { Locale } from "../../../../../i18n.config";
import { PopulatedOrder } from "@/models/OrderSchema";

export default function TestEmailPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const order: PopulatedOrder = {
    _id: "testid",
    items: [
      {
        product_id: {
          _id: "testproductid",
          title_en: "Necklace Test",
          title_uk: "Намисто Тест",
          price: 1500,
          description_en: "Description Test",
          description_uk: "Опис Тест",
          collection_id: "65aa82e3f923e690fa684eb6",
          imageUrls: [
            // "https://drive.google.com/uc?id=1rzNcjC98XjqygsU6SX_uLj9daLFO68He",
            "https://www.dropbox.com/scl/fi/9544hfxzdco417suwnhny/white-flowers.jpg?rlkey=gfe20pkmh2strdnfa65a7yp6d&dl=1",
          ],
          status: 0,
        },
        count: 2,
      },
    ],
    first_name: "Olya",
    last_name: "Po",
    email: "abcd@gmail.com",
    phone_number: "123456789",
    messenger: "Viber",
    comment: "Test email",
  };

  return <ConfirmationEmail lang={lang} order={order}></ConfirmationEmail>;
}
