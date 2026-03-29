import Hero from "@/components/Hero";
import VelocityScroll from "@/components/VelocityScroll";
import WorkGrid from "@/components/WorkGrid";
import HorizontalScroll from "@/components/HorizontalScroll";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactLenis } from "@/lib/lenis";
import { ProfessionalConnect } from "@/components/ProfessionalConnect";

export default function Home() {
  return (
    <ReactLenis>
      <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-blue-500/30 selection:text-white">
        <Navbar />
        <Hero />
        <VelocityScroll />
        <WorkGrid />
        <HorizontalScroll />
        <Skills />
        <Experience />
        <ProfessionalConnect />
        <Footer />
      </main>
    </ReactLenis>
  );
}
