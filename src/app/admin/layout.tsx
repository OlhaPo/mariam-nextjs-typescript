import "./login/admin.css";
import ProvidersWrapper from "./ProvidersWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ProvidersWrapper>
        <body>{children}</body>
      </ProvidersWrapper>
    </html>
  );
}
