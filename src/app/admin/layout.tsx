import "./admin.css";
import "@radix-ui/themes/styles.css";
import ProvidersWrapper from "./ProvidersWrapper";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProvidersWrapper>
      <html lang="en">
        <body>
          <Theme>{children}</Theme>
        </body>
      </html>
    </ProvidersWrapper>
  );
}
