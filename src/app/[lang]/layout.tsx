import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans, Fredoka } from "next/font/google";
import { Locale, i18n } from "../../../i18n.config";
import clsx from "clsx";

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
  title: "mariam crochet jewelry - Maryna Kambur",
  description:
    "mariam crochet jewelry is a Ukrainian clothing and crocheted jewelry brand founded by designer Maryna Kambur",
  keywords: [
    "mariam corner",
    "mariam crochet jewelry",
    "maryna kambur",
    "марина камбур",
    "вязані прикраси",
    "українські дизайнери",
    "вязаные украшения",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <body
        className={clsx(fredoka.variable, noto_sans.variable, "bg-secondary")}
      >
        {children}
      </body>
    </html>
  );
}
