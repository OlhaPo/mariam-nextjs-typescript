import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans, Fredoka } from "next/font/google";
import { Locale, i18n } from "../../../i18n.config";
import clsx from "clsx";
// import { DefaultSeo } from "next-seo";
// import SEO from "../../../next-seo.config";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto_sans",
});

export const metadata: Metadata = {
  title: "mariam corner — Maryna Kambur",
  description:
    "mariam corner – всесвіт зцілення красою. mariam сrochet jewelry – ювелірна робота гачком, бренд Марини Камбур, створений у 2017 році.",
  keywords: [
    "mariam corner",
    "mariam crochet jewelry",
    "maryna kambur",
    "марина камбур",
    "вязані прикраси",
    "українські дизайнери",
    "вязаные украшения",
  ],
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16" type="image/x-icon"/>
      </head>
      <body
        className={clsx(fredoka.variable, noto_sans.variable, "bg-secondary")}
      >
        {/* <DefaultSeo {...SEO} /> */}
        {children}
      </body>
    </html>
  );
}
