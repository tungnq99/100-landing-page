import { Hero } from "@/components/sections/Hero";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturesGrid />
            <HowItWorks />
            <Benefits />
            <ComparisonTable />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CallToAction />
        </>
    );
}
