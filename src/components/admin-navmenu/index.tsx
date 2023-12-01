"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { adminNavLinks } from "./constants";

export default function AdminNavMenu() {
  const inactiveLink = "inline-flex items-center gap-2 py-3 px-5";
  const activeLink =
    inactiveLink + "border bg-white text-black rounded-md px-5";
  const activeIcon = "text-black";
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4 pt-5 min-h-screen bg-[#9DACB7] px-5">
      {adminNavLinks.map((link) => (
        <Link
          href={link.href}
          key={link.title}
          className={pathname.includes(link.href) ? activeLink : inactiveLink}
        >
          <div className={pathname.includes(link.href) ? activeIcon : ""}>
            {React.createElement(link.icon)}
          </div>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
