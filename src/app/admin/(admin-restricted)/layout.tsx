import AdminHeaderBar from "@/components/admin-header-bar";
import AdminNavMenu from "@/components/admin-navmenu/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-panel">
      <AdminHeaderBar />
      <div className="flex border-t border-gray-400">
        <AdminNavMenu />
        <div className="flex-grow pl-10 py-5">{children}</div>
      </div>
    </div>
  );
}
