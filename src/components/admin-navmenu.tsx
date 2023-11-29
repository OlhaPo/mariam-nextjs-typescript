"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { adminNavLinks } from "./admin-navmenu/constants";
import { BiLogOut } from "react-icons/bi";

export default function Nav() {
  const inactiveLink = "inline-flex items-center gap-2";
  const activeLink = inactiveLink + " bg-red-300 text-red-900 rounded-sm";
  const activeIcon = "text-blue-400";
  const pathname = usePathname();

  async function logout() {
    await signOut({ callbackUrl: "/admin/login" });
  }

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
        <button
          onClick={() => logout()}
          className="login-button inline-flex items-center gap-2"
        >
          <BiLogOut size={25} />
          Logout
        </button>
      </nav>
    </div>
  );
}
