import { useCartStore } from "@/services/cart/hooks";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { Locale } from "../../i18n.config";
import { Translations, getLangField } from "@/lib/dictionaryUtils";

export default function EditCart({
  lang,
  translations,
}: {
  lang: Locale;
  translations: Translations;
}) {
  const { cart, removeFromCart, incrementItem, decrementItem } = useCartStore();
  return (
    <div className="overflow-y-auto flex-grow">
      {cart.map((product, i) => (
        <div key={i} className="flex flex-row gap-5 mt-5 first:mt-0">
          <div>
            <Image
              src={product.product.imageUrls[0]}
              alt="Picture of handcrafted item"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="pt-0 leading-6">
              {getLangField(product.product, "title_", lang)}
            </p>
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
              {
                ((translations?.page as Translations)?.cart as Translations)
                  ?.remove as string
              }
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
