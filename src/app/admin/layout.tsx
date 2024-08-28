"use client";

import "./admin.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { NextAuthProvider } from "./providers";
import LoginRequiredClient from "../../../lib/hooks/loginIsRequiredClient.hook";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <NextAuthProvider>
          <LoginRequiredClient>
            <Theme>
              {children}
            </Theme>
          </LoginRequiredClient>
        </NextAuthProvider>
      </body>
    </html>
  );
}
