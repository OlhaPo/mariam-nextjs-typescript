"use client";

import { useCartStore } from "@/services/cart/hooks";
import Link from "next/link";
import EditCart from "./edit-cart";
import { Locale } from "../../i18n.config";
import { Translations } from "@/lib/dictionaryUtils";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export function CartSummary({
  lang,
  translations,
}: {
  lang: Locale;
  translations: Translations;
}) {
  const { totalPrice } = useCartStore();
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col">
      <h3 className="flex flex-row justify-between border-b-black border-b mb-5 items-center">
        <span>
          {
            ((translations?.page as Translations)?.cart as Translations)
              ?.cart_summary as string
          }
        </span>
        <IoIosArrowDown onClick={() => setOpen(!open)} />
      </h3>
      {open && (
        <>
          <EditCart lang={lang} translations={translations} />
        </>
      )}
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
