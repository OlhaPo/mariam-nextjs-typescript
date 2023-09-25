"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./constants";
import clsx from "clsx";

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div
      className={clsx("nav", {
        "text-white": isHome,
        "text-black-300 border border-b-slate-300": !isHome,
      })}
    >
      <div className="uppercase">
        <Link href={"/"}>Maryna Kambur</Link>
      </div>{" "}
      <div className="inline-flex gap-7">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              className={clsx({
                "font-semibold": isActive,
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
