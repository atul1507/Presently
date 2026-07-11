import Navbar from "@/components/desktop/Navbar";
import Footer from "@/components/desktop/Footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 flex h-screen flex-col">

      <Navbar />

      <main className="flex-1 min-h-0 overflow-hidden pt-16">
        {children}
      </main>

      <Footer />

    </div>
  );
}