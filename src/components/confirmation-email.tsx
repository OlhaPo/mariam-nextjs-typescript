import { PopulatedOrder } from "@/models/OrderSchema";
import * as React from "react";
import { Locale } from "../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { getLangField } from "@/lib/dictionaryUtils";

import { calculateSubtotal } from "@/lib/orderUtils";

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
    <div>
      <h2>
        {page.confirmation_email.header} {order.first_name}!
      </h2>
      <p>{page.confirmation_email.order_received}</p>
      <p>{page.confirmation_email.details_below}</p>
      <div>
        {order.items.map((item, index) => (
          <div key={index} className="flex flex-row gap-5 mt-5 md:mt-10">
            <div>
              <img
                src={item.product_id.imageUrls[0]}
                alt="Picture of handcrafted item"
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="pt-0">
                {item.count} x {getLangField(item.product_id, "title_", lang)}
              </p>
              <p className="text-gray">
                {item.product_id.price} <span>UAH</span>
              </p>
            </div>
          </div>
        ))}
        <p>
          {page.cart.subtotal}: {subtotal}
        </p>
        <div>
          <h3>{page.confirmation_email.info_provided}</h3>
          <p>
            {page.checkout_page.phone_number}:{" "}
            <span className="text-gray">{order.phone_number}</span>
          </p>
          <div className="inline-flex gap-2">
            <p
              dangerouslySetInnerHTML={{
                __html: page.checkout_page.messenger,
              }}
            ></p>
            <p className="text-gray">{order.messenger}</p>
          </div>

          <p>
            <p>
              {page.checkout_page.comment}:{" "}
              <span className="text-gray">{order.comment}</span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
