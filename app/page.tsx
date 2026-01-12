import HeroSection from "@/components/HeroSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PrinciplesSection />
      <TechnologiesSection />
      <TeamSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
