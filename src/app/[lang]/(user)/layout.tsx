import "../globals.css";
import { Navigation } from "@/components/navigation/index";
import { Footer } from "@/components/footer/index";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <div className="mt-20 text-base md:text-lg">{children}</div>
      <Footer />
    </>
  );
}
