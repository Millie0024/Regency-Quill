import HeroSection from "@/components/HeroSection";
import ProductIntro from "@/components/ProductIntro";
import CreationPaths from "@/components/CreationPaths";
import HowItWorks from "@/components/HowItWorks";
import BridgertonQuotes from "@/components/BridgertonQuotes";
import KeepsakeSection from "@/components/KeepsakeSection";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import FinalCTA from "@/components/FinalCTA";
import RegencyFooter from "@/components/RegencyFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProductIntro />
      <CreationPaths />
      <BridgertonQuotes />
      <HowItWorks />
      <KeepsakeSection />
      <DesignPhilosophy />
      <FinalCTA />
      <RegencyFooter />
    </main>
  );
};

export default Index;
