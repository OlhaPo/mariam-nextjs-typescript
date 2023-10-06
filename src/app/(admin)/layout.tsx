export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen mx-auto w-full px-4 pt-8">
      <main className="my-0 py-16">{children}</main>
    </div>
  );
}
