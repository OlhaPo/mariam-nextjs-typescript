"use client";

import { usePathname } from "next/navigation";
import { navLinks } from "./constants";
import clsx from "clsx";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "./NavLink";

export function Navigation() {
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
        "text-text border border-b-slate-300": !isHome,
      })}
    >
      <div className="uppercase z-[140]">
        <NavLink href="/" name="Maryna Kambur" />
      </div>{" "}
      <BiMenu size={30} onClick={handleNav} className="md:hidden z-[150]" />
      {isOpenNav ? (
        <div className="w-full bg-[#948D85] absolute top-0 left-0 right-0 min-h-screen flex flex-col justify-center items-center z-[120] gap-5">
          {navLinks.map((link) => (
            <NavLink
              href={link.href}
              name={link.name}
              onClick={handleNav}
              key={link.name}
            />
          ))}
        </div>
      ) : null}
      <div className="hidden md:inline-flex gap-7">
        {navLinks.map((link) => (
          <NavLink
            href={link.href}
            key={link.name}
            name={link.name}
            isActive={pathname === link.href}
          />
        ))}
      </div>
    </div>
  );
}
