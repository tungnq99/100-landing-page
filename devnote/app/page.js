import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import BuildFaster from '@/components/BuildFaster';
import Integrations from '@/components/Integrations';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <Hero />
            <Stats />
            <Features />
            <BuildFaster />
            <Integrations />
            <Pricing />
            <Footer />
        </main>
    );
}
