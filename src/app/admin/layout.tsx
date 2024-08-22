"use client";

import "./admin.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { SessionProvider } from "next-auth/react";
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
        <SessionProvider>
          <Theme>
            <LoginRequiredClient>
              {children}
            </LoginRequiredClient>
          </Theme>
        </SessionProvider>
      </body>
    </html>
  );
}
