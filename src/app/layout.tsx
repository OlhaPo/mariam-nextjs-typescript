import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navigation from "@/components/navigation/index";

const roboto = Roboto({ subsets: ["latin"], weight: ["300"] });

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
      <body className={`${roboto.className} + bg-secondary/30`}>
        <Navigation />
        <div className="mt-20 text-base md:text-lg">{children}</div>
      </body>
    </html>
  );
}
