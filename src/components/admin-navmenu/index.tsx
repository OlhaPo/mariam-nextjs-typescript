"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { adminNavLinks } from "./constants";

export default function AdminNavMenu() {
  const inactiveLink = "inline-flex items-center gap-2";
  const activeLink = inactiveLink + " bg-red-300 text-red-900 rounded-sm";
  const activeIcon = "text-blue-400";
  const pathname = usePathname();

  return (
    <div>
      <nav className="flex flex-col gap-2">
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
    </div>
  );
}
