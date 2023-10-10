"use client";

import { usePathname } from "next/navigation";
import { navLinks } from "./constants";
import clsx from "clsx";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import NavLink from "./NavLink";
import { Locale } from "../../../i18n.config";

export function Navigation({
  translations,
  lang,
}: {
  translations: any;
  lang: Locale;
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
      <div className="uppercase z-[140]">
        <NavLink href={createFullUrl("/")}>{translations.home}</NavLink>
      </div>{" "}
      <BiMenu size={30} onClick={handleNav} className="md:hidden z-[150]" />
      {isOpenNav ? (
        <div className="w-full bg-[#948D85] absolute top-0 left-0 right-0 min-h-screen flex flex-col justify-center items-center z-[120] gap-5">
          {navLinks.map((link) => (
            <NavLink
              href={createFullUrl(link.href)}
              onClick={handleNav}
              key={link.title[lang]}
            >
              {link.title[lang]}
            </NavLink>
          ))}
          <div className="inline-flex gap-3">
            <div>EN</div>
            <div>UA</div>
          </div>
        </div>
      ) : null}
      <div className="hidden md:inline-flex gap-24">
        <div className="flex gap-3">
          <div>EN</div>
          <div>UA</div>
        </div>
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              href={createFullUrl(link.href)}
              key={link.title[lang]}
              isactive={pathname === createFullUrl(link.href)}
            >
              {link.title[lang]}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
