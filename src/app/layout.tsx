import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

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
      <body className={`${roboto.className} + bg-[#948D85]/30`}>
        <Navigation />
        <div className="mt-[80px] text-[16px] md:text-[18px]">{children}</div>
      </body>
    </html>
  );
}
