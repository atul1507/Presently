import Navbar from "@/components/desktop/Navbar";
import HomeHero from "@/components/desktop/HomeHero";
import Features from "@/components/desktop/Features";
import Footer from "@/components/desktop/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HomeHero />
        <Features />
      </main>

      <Footer />
    </>
  );
}