import { PopulatedOrder } from "@/models/OrderSchema";
import * as React from "react";
import { Locale } from "../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { getLangField } from "@/lib/dictionaryUtils";
import { calculateSubtotal } from "@/lib/orderUtils";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "@/constants/contacts";

export interface ConfirmationEmailProps {
  lang: Locale;
  order: PopulatedOrder;
}

export const ConfirmationEmail: React.FC<
  Readonly<ConfirmationEmailProps>
> = async ({ order, lang }: ConfirmationEmailProps) => {
  const { page } = await getDictionary(lang);
  const subtotal = calculateSubtotal(
    order.items.map((item) => ({ count: item.count, product: item.product_id }))
  );
  return (
    <>
      <h2 className="text-primary text-xl">
        {page.confirmation_email.header} {order.first_name}!
      </h2>
      <p>
        {page.confirmation_email.order_received}{" "}
        {page.confirmation_email.details_below}.
      </p>
      {order.items.map((item, index) => (
        <div key={index} className="flex flex-row gap-8 mt-5">
          <div>
            <img
              src={item.product_id.imageUrls[0]}
              alt="Picture of handcrafted item"
              width={250}
              height={250}
            />
          </div>
          <div className="flex flex-col items-start">
            <p>
              {item.count} x {getLangField(item.product_id, "title_", lang)}
            </p>
            <p>
              {page.confirmation_email.price}: {item.product_id.price} UAH
            </p>
          </div>
        </div>
      ))}
      <p>
        {page.confirmation_email.order_subtotal}: {subtotal} UAH
      </p>
      <div>
        <h3>{page.confirmation_email.info_provided}:</h3>
        <p>
          {page.checkout_page.phone_number}:{" "}
          <span className="text-gray">{order.phone_number}</span>
        </p>
        <div className="flex flex-row gap-2">
          <p>
            <span
              dangerouslySetInnerHTML={{
                __html: page.checkout_page.messenger,
              }}
            ></span>
            <span>: {order.messenger}</span>
          </p>
        </div>
        <div>
          <p>
            {page.checkout_page.comment}:{" "}
            <span className="text-gray">{order.comment}</span>
          </p>
        </div>
      </div>
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: page.confirmation_email.email_ending,
          }}
        ></p>
        <div className="inline pr-3">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{" "}
          <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </>
  );
};
