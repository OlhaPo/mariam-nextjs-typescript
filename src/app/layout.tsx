import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans, Fredoka } from "next/font/google";
import { Navigation } from "@/components/navigation/index";
import { Footer } from "@/components/footer/index";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(fredoka.variable, noto_sans.variable, "bg-secondary")}
      >
        <Navigation />
        <div className="mt-20 text-base md:text-lg">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
