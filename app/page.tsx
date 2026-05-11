import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import {
  WhySection,
  ProcessSection,
  CtaSection,
} from "@/components/sections/HomeSections";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <WhySection />
        <ProcessSection />
        <TrustedBySection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}