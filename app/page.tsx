// app/page.tsx
import HeroSection from "@/components/Hero";
import ResumoSection from "@/components/ResumoSection";
import TecnologiasSection from "@/components/TecnologiasSection";
import DemoSection from "@/components/DemoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ComoFuncionaSection from "@/components/ComoFunciona";
import HowItWorks from "@/components/HowItWorks";

export default function HomePage() {
  return (
    <main className="bg-gray-950 text-gray-100">
      <HeroSection />
      <ResumoSection />
      <ComoFuncionaSection />
      <TecnologiasSection />
      {/* <HowItWorks /> */}
      {/* <DemoSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
}
