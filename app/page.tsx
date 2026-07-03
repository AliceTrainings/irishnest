import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { CollectionPreview } from "@/components/home/collection-preview";
import { DifferenceSection } from "@/components/home/difference-section";
import { FeaturedExplorer } from "@/components/home/featured-explorer";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { InteriorStorytelling } from "@/components/home/interior-storytelling";
import { JournalPreview } from "@/components/home/journal-preview";
import { Manifesto } from "@/components/home/manifesto";
import { SiteFeasibilityShell } from "@/components/home/site-feasibility-shell";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <CollectionPreview />
        <FeaturedExplorer />
        <DifferenceSection />
        <HowItWorks />
        <SiteFeasibilityShell />
        <InteriorStorytelling />
        <JournalPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
