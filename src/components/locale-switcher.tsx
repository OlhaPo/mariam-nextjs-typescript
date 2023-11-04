"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { i18n } from "../../i18n.config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const redirectedPathName = (newLocale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = newLocale;

    const addSearchParams = searchParams.toString()
      ? `?${searchParams.toString()}`
      : "";

    return segments.join("/") + addSearchParams;
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
