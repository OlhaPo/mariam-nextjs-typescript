"use client";

import { RxCross1 } from "react-icons/rx";
import { useCartStore } from "@/services/cart/hooks";
import { Locale } from "../../i18n.config";
import { useRouter } from "next/navigation";
import EditCart from "./edit-cart";
import { Translations } from "@/lib/dictionaryUtils";

export default function ShoppingCart({
  onClose,
  lang,
  translations,
}: {
  onClose: () => void;
  lang: Locale;
  translations: Translations;
}) {
  const cart = useCartStore((state) => state.cart);
  const count = useCartStore((state) => state.count);
  const totalPrice = useCartStore((state) => state.totalPrice);

  const router = useRouter();

  function navigateToCheckout() {
    onClose();
    router.push(`/${lang}/checkout`);
  }

  function navigateToShop() {
    onClose();
    router.push(`/${lang}/shop`);
  }

  return (
    <section className="cart">
      {cart.length === 0 ? (
        <div className="flex flex-col min-h-screen justify-center items-center gap-10">
          <p className="text-lg">
            {
              ((translations.page as Translations).cart as Translations)
                .empty_cart as string
            }
          </p>
          <button onClick={() => navigateToShop()} className="btn-primary">
            {
              ((translations.page as Translations).cart as Translations)
                .to_shopping as string
            }
          </button>
        </div>
      ) : (
        <div>
          <div className="flex flex-row justify-between border-b-black border-b mb-10">
            <h2>
              {
                ((translations.page as Translations).cart as Translations)
                  .title as string
              }
            </h2>
            <RxCross1 onClick={() => onClose()} />
          </div>{" "}
          <EditCart lang={lang} translations={translations} />
          <div className="flex flex-col gap-3 lg:gap-0 mt-10 md:mt-5">
            <div className="inline-flex justify-between items-center text-lg">
              <p>
                {
                  ((translations.page as Translations).cart as Translations)
                    .total_items as string
                }
              </p>
              <p>
                <span>{count()}</span>{" "}
                {
                  ((translations.page as Translations).cart as Translations)
                    .entity as string
                }
              </p>
            </div>
            <div className="inline-flex justify-between items-center text-lg">
              <p>
                {
                  ((translations.page as Translations).cart as Translations)
                    .subtotal as string
                }
              </p>
              <p>
                <span>{totalPrice()}</span> UAH
              </p>
            </div>
          </div>
          <button
            onClick={() => navigateToCheckout()}
            className="checkout-btn mt-10 md:mt-5"
          >
            {
              ((translations.page as Translations).cart as Translations)
                .checkout as string
            }
          </button>
        </div>
      )}
    </section>
  );
}
