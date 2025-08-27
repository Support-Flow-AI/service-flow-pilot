import { Navigation } from "@/components/ui/navigation";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FooterSection } from "@/components/sections/FooterSection";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <HowItWorksSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default HowItWorks;