import HeroSection from "@/components/HeroSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import TechnologiesSection from "@/components/serviceSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import StatsSection from "@/components/StatsSection";
import PortfolioSection from "@/components/portfolioSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <StatsSection/>
      <PrinciplesSection />
      <TechnologiesSection />
      <PortfolioSection />
      <TeamSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
