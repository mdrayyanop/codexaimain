import { HeroSection } from "@/components/sections/hero-section";
import { WhatWeBuildSection } from "@/components/sections/what-we-build-section";
import { ProductsSection } from "@/components/sections/products-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FounderSection } from "@/components/sections/founder-section";
import { VisionSection } from "@/components/sections/vision-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <WhatWeBuildSection />
      <ProductsSection />
      <PhilosophySection />
      <FounderSection />
      <VisionSection />
      <CTASection />
    </div>
  );
}
