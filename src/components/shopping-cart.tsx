"use client";

import { RxCross1 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { useCartStore } from "@/services/cart/hooks";
import { Locale } from "../../i18n.config";
import { useRouter } from "next/navigation";

export default function ShoppingCart({
  onClose,
  lang,
}: {
  onClose: () => void;
  lang: Locale;
}) {
  const {
    cart,
    removeFromCart,
    count,
    incrementItem,
    decrementItem,
    totalPrice,
  } = useCartStore();

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
          <h3>Your cart is empty</h3>
          <button onClick={() => navigateToShop()} className="btn-primary">
            Continue shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="flex flex-row justify-between border-b-black border-b mb-5">
            <h2>Shopping Cart</h2>
            <RxCross1 onClick={() => onClose()} />
          </div>{" "}
          {cart.map((product, i) => (
            <div key={i} className="flex flex-row gap-5">
              <div>
                <Image
                  src={product.product.imageUrls[0]}
                  alt="hero"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex flex-col items-start">
                <p>{product.product.title_en}</p>
                <p className="text-gray">
                  {product.product.price} <span> UAH</span>
                </p>
                <div className="inline-flex gap-2 items-center">
                  <button onClick={() => decrementItem(product.product)}>
                    <FaMinus />
                  </button>
                  <span>{product.count}</span>
                  <button onClick={() => incrementItem(product.product)}>
                    <FaPlus />
                  </button>
                </div>

                <button onClick={() => removeFromCart(product.product)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col">
            <div className="inline-flex justify-between items-center">
              <h2>Total items in cart</h2>
              <p>
                <span>{count()}</span> pieces
              </p>
            </div>
            <div className="inline-flex justify-between items-center">
              <h2>Subtotal</h2>
              <p>
                <span>{totalPrice()}</span> UAH
              </p>
            </div>
          </div>
          <button
            onClick={() => navigateToCheckout()}
            className="btn-nav w-full"
          >
            Checkout
          </button>
        </div>
      )}
    </section>
  );
}
