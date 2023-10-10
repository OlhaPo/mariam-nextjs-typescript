"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "../../i18n.config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  console.log("--- pathName:", pathName);

  const redirectedPathName = (newLocale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  return (
    <ul className="flex gap-x-3">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link href={redirectedPathName(locale)}>{locale}</Link>
          </li>
        );
      })}
    </ul>
  );
}
