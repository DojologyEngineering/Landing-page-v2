import HeroSection from "@/components/HeroSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import TechnologiesSection from "@/components/serviceSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import StatsSection from "@/components/StatsSection";
import PortfolioSection from "@/components/portfolioSection";
import StudioModelSection from "@/components/StudioModelSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <StatsSection/>
      <PrinciplesSection />
      <TeamSection />
      <TechnologiesSection />
      <StudioModelSection />
      <PortfolioSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
