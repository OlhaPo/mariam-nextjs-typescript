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
            {(translations as any)?.page?.cart?.empty_cart}
          </p>
          <button onClick={() => navigateToShop()} className="btn-primary">
            {(translations as any)?.page?.cart?.to_shopping}
          </button>
        </div>
      ) : (
        <div>
          <div className="flex flex-row justify-between border-b-black border-b mb-10">
            <h2>Shopping Cart</h2>
            <RxCross1 onClick={() => onClose()} />
          </div>{" "}
          <EditCart />
          <div className="flex flex-col gap-3 lg:gap-0 mt-10 md:mt-5">
            <div className="inline-flex justify-between items-center text-lg">
              <p>Total items in cart</p>
              <p>
                <span>{count()}</span> pieces
              </p>
            </div>
            <div className="inline-flex justify-between items-center text-lg">
              <p>Subtotal</p>
              <p>
                <span>{totalPrice()}</span> UAH
              </p>
            </div>
          </div>
          <button
            onClick={() => navigateToCheckout()}
            className="btn-nav w-full mt-10 md:mt-5"
          >
            Checkout
          </button>
        </div>
      )}
    </section>
  );
}
