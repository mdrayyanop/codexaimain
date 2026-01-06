import { FounderSection } from "@/components/sections/founder-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { WhatWeBuildSection } from "@/components/sections/what-we-build-section";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24">
            <WhatWeBuildSection />
            <PhilosophySection />
            <FounderSection />
        </div>
    );
}
