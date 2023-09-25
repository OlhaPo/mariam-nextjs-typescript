"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./constants";
import clsx from "clsx";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  return (
    <div
      className={clsx("nav", {
        "text-white": isOpenNav || isHome,
        "text-black-300 border border-b-slate-300": !isHome,
      })}
    >
      <div className="uppercase z-[140]">
        <Link href={"/"}>Maryna Kambur</Link>
      </div>{" "}
      <BiMenu size={30} onClick={handleNav} className="md:hidden z-[150]" />
      {isOpenNav ? (
        <div className="w-full bg-secondary absolute top-0 left-0 right-0 h-screen flex flex-col justify-center items-center z-[120] gap-5">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link href={link.href} onClick={handleNav}>
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="hidden md:inline-flex gap-7">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              className={clsx({
                "font-semibold": isActive,
                "text-primary": isActive,
                "font-normal": !isActive,
              })}
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
