"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { adminNavLinks } from "./constants";

export default function AdminNavMenu() {
  const inactiveLink = "inline-flex items-center gap-2 pr-10 py-2 pl-2";
  const activeLink = inactiveLink + " bg-[#3E6A49] text-white rounded-r-md";
  const activeIcon = "text-white";
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 pt-5">
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
