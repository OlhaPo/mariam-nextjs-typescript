"use client";

import { useCartStore } from "@/services/cart/hooks";
import Link from "next/link";
import EditCart from "./edit-cart";
import { Locale } from "../../i18n.config";
import { Translations } from "@/lib/dictionaryUtils";

export function CartSummary({
  lang,
  translations,
}: {
  lang: Locale;
  translations: Translations;
}) {
  const { totalPrice } = useCartStore();

  return (
    <div className="flex flex-col">
      <h2 className="text-left uppercase text-xl">
        {
          ((translations?.page as Translations)?.cart as Translations)
            ?.cart_summary as string
        }
      </h2>
      <EditCart lang={lang} translations={translations} />
      <div className="inline-block my-5">
        {
          ((translations?.page as Translations)?.cart as Translations)
            ?.subtotal as string
        }
        : <span>{totalPrice()}</span> UAH{" "}
      </div>
      <div>
        <Link href={`/${lang}/shop`} className="btn-primary">
          {
            ((translations?.page as Translations)?.cart as Translations)
              ?.to_shopping as string
          }
        </Link>
      </div>
    </div>
  );
}
