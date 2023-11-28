import Nav from "@/components/admin-navmenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <div className="flex">{children}</div>
    </>
  );
}
