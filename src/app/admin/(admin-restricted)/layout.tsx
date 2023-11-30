import AdminHeaderBar from "@/components/admin-header-bar";
import AdminNavMenu from "@/components/admin-navmenu/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminHeaderBar />
      <AdminNavMenu />
      <div className="flex">{children}</div>
    </>
  );
}
