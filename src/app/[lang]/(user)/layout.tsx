"use client";

import "../globals.css";
import { Navigation } from "@/components/navigation/index";
import { Footer } from "@/components/footer/index";
import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ShoppingCart from "@/components/shopping-cart";
import { useEffect, useState } from "react";
import { Translations } from "@/lib/dictionaryUtils";

export default function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const [translations, setTranslations] = useState<Translations>({});
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const load = async () => {
      const tr = await getDictionary(params.lang);
      setTranslations(tr);
    };
    load();
  }, [params.lang]);

  const handleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      {showCart ? <ShoppingCart onClose={handleCart} /> : null}
      <div className={showCart ? "opacity-50" : "opacity-100"}>
        <Navigation
          translations={translations.navigation}
          lang={params.lang}
          onOpenCart={handleCart}
        />
        <div className="mt-20 text-base md:text-lg">{children}</div>
        <Footer lang={params.lang} translations={translations} />
      </div>
    </>
  );
}
