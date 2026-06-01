import HeroSection from "@/components/HeroSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import TechnologiesSection from "@/components/serviceSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import StatsSection from "@/components/StatsSection";
import PortfolioSection from "@/components/portfolioSection";
import AdvisorCarousel from "@/components/AdvisorCarousel";
import CTASection from "@/components/CTASection";
import MissionSection from "@/components/MissionSection";
import StudioModelSection from "@/components/StudioModelSection";

const SHOW_ADVISOR_CAROUSEL = false;

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <StatsSection/>
      <PrinciplesSection />
      <TeamSection />
      <TechnologiesSection />
      <StudioModelSection />
      <PortfolioSection />
      {SHOW_ADVISOR_CAROUSEL ? <AdvisorCarousel /> : null}
      <MissionSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
