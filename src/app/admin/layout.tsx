export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 pt-8 bg-red-300">
      <div className="my-0 py-16">{children}</div>
    </div>
  );
}
