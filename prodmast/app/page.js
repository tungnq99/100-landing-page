import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Integrations from '@/components/Integrations';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col font-sans w-full overflow-x-hidden">
            <Hero />
            <Services />
            <Pricing />
            <Integrations />
            <Footer />
        </main>
    );
}
