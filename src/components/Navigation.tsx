"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", name: "About" },
  { href: "/shop", name: "Shop" },
  { href: "/contact", name: "Contact" },
  { href: "/cart", name: "Cart" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div
      className={
        (isHome ? "text-white" : "text-black-300 border border-b-slate-300") +
        " nav"
      }
    >
      <div className="uppercase">
        <Link href={"/"}>Maryna Kambur</Link>
      </div>{" "}
      <div className="inline-flex gap-7">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              className={isActive ? "font-semibold" : "font-normal"}
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
