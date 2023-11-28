import "./admin.css";
import ProvidersWrapper from "./ProvidersWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProvidersWrapper>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ProvidersWrapper>
  );
}
