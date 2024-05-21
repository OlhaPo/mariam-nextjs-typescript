"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { navLinks } from "./constants";
import clsx from "clsx";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import NavLink from "./nav-link";
import { Locale } from "../../../i18n.config";
import LocaleSwitcher from "../locale-switcher";
import { CartLabelProps } from "./cart-label";

const CartLabelNoSSR = dynamic<CartLabelProps>(
  () => import("./cart-label").then((mod) => mod.CartLabel),
  { ssr: false }
);

export function Navigation({
  translations,
  lang,
  onOpenCart,
}: {
  translations: any;
  lang: Locale;
  onOpenCart: () => void;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/" + lang;

  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  const createFullUrl = (url: string) => `/${lang}/${url}`;

  return (
    <div
      className={clsx("nav", {
        "text-white": isOpenNav || isHome,
        "border border-b-slate-300": !isHome,
      })}
    >
      <BiMenu size={30} onClick={handleNav} className="md:hidden z-[150]" />
      <div className="uppercase z-[140]">
        <NavLink href={createFullUrl("/")}>{translations?.home}</NavLink>
      </div>{" "}
      <div className="md:hidden">
        <CartLabelNoSSR onOpen={onOpenCart} />
      </div>
      {isOpenNav ? (
        <div className="w-full bg-[#948D85] fixed top-0 left-0 right-0 min-h-screen flex flex-col justify-center items-center z-[120] gap-5">
          {navLinks.map((link, i) => (
            <NavLink
              href={createFullUrl(link.href)}
              onClick={handleNav}
              key={i}
            >
              {link.title[lang]}
            </NavLink>
          ))}
          <div>
            <LocaleSwitcher />
          </div>
        </div>
      ) : null}
      <div className="hidden md:inline-flex gap-12 items-center">
        <div>
          <LocaleSwitcher />
        </div>
        <div className="flex gap-8">
          {navLinks.map((link, i) => (
            <NavLink
              href={createFullUrl(link.href)}
              key={i}
              isactive={pathname === createFullUrl(link.href)}
            >
              {link.title[lang]}
            </NavLink>
          ))}
        </div>
        <CartLabelNoSSR onOpen={onOpenCart} />
      </div>
    </div>
  );
}
