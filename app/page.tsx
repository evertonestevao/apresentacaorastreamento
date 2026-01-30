// app/page.tsx
import HeroSection from "@/components/Hero";
import ResumoSection from "@/components/ResumoSection";
import TecnologiasSection from "@/components/TecnologiasSection";
import DemoSection from "@/components/DemoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-gray-950 text-gray-100">
      <HeroSection />
      <ResumoSection />
      <TecnologiasSection />
      {/* <DemoSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
}
