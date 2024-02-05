"use client";

import { CheckoutFormProps } from "@/components/checkout-form";
import { Order } from "@/models/OrderSchema";
import { useCartStore } from "@/services/cart/hooks";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Locale } from "../../../../../i18n.config";
import { Translations } from "@/lib/dictionaryUtils";
import { useEffect, useState } from "react";
import { getDictionary } from "@/lib/dictionary";
import { CartSummary } from "@/components/cart-summary";

const CartSummaryNoSSR = dynamic(
  () => import("@/components/cart-summary").then((mod) => mod.CartSummary),
  {
    ssr: false,
  }
);

const CheckoutFormNoSSR = dynamic<CheckoutFormProps>(
  () => import("@/components/checkout-form").then((mod) => mod.CheckoutForm),
  {
    ssr: false,
  }
);

export default function CheckoutPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [translations, setTranslations] = useState<Translations>({});

  const router = useRouter();

  const { clearCart } = useCartStore();

  useEffect(() => {
    const getTranslations = async () => {
      const t = await getDictionary(lang);
      setTranslations(t);
    };
    getTranslations();
  }, []);

  async function placeNewOrder(data: Order) {
    try {
      const res = await fetch(`/api/orders?lang=${lang}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      router.push(`/${lang}/order-confirmation`);
      clearCart();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  return (
    <section className="checkout">
      <div>
        <h1 className="uppercase text-2xl">
          {
            (
              (translations?.page as Translations)
                ?.checkout_page as Translations
            )?.title as string
          }
        </h1>
        <CheckoutFormNoSSR onSave={placeNewOrder} translations={translations} />
      </div>
      <div>
        <CartSummary lang={lang} translations={translations} />
      </div>
    </section>
  );
}
