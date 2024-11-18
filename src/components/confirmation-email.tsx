import { PopulatedOrder } from "@/models/OrderSchema";
import * as React from "react";
import { Locale } from "../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { getLangField } from "@/lib/dictionaryUtils";
import { calculateSubtotal } from "@/lib/orderUtils";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "@/constants/contacts";
import axios from "axios";

export interface ConfirmationEmailProps {
  lang: Locale;
  order: PopulatedOrder;
}

export const ConfirmationEmail: React.FC<
  Readonly<ConfirmationEmailProps>
> = async ({ order, lang }: ConfirmationEmailProps) => {
  const { page } = await getDictionary(lang);
  const subtotal = calculateSubtotal(
    order.items.map((item) => ({ count: item.count, product: item.product }))
  );

  return (
    <div style={{ marginLeft: "15px", marginTop: "50px" }}>
      <h2 className="email-h2">
        {page.confirmation_email.header} {order.first_name}!
      </h2>
      <p>
        {page.confirmation_email.order_received}{" "}
        {page.confirmation_email.details_below}
      </p>
      {order.items.map(async (item, index) => {
        return (
          <div key={index} className="email-img-section">
            <div>
              <img
                src={item.product.imageUrls[0]}
                // src={`data:image/jpeg;base64,${imgData}`}
                alt="Picture of handcrafted item"
                width={150}
                loading="lazy"
              />
            </div>
            <div className="email-price-section">
              <p>
                {item.count} x {getLangField(item.product, "title_", lang)}
              </p>
              <p>
                <span>{page.confirmation_email.price}:</span>{" "}
                {item.product.price} UAH
              </p>
            </div>
          </div>
        );
      })}
      <p>
        {page.confirmation_email.order_subtotal}: {subtotal} UAH
      </p>
      <div>
        <h3 className="email-h3">{page.confirmation_email.info_provided}:</h3>
        <ul>
          <li>
            {page.checkout_page.phone_number}:{" "}
            <span className="text-gray">{order.phone_number}</span>
          </li>
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: page.checkout_page.messenger,
              }}
            ></span>
            <span>: {order.messenger}</span>
          </li>
          <li>
            {page.checkout_page.comment}:{" "}
            <span className="text-gray">{order.comment}</span>
          </li>
        </ul>
      </div>
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: page.confirmation_email.email_ending,
          }}
        ></p>
        <div className="email-links">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{" "}
          <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};
