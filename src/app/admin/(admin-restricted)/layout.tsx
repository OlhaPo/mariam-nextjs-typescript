import AdminNavMenu from "@/components/admin-navmenu/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminNavMenu />
      <div className="flex">{children}</div>
    </>
  );
}
