import Hero from '@/components/Hero';
import BikeShowcase from '@/components/BikeShowcase';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Specs from '@/components/Specs';

export default function Home() {
  return (
    <main style={{ background: '#0a0a0a' }}>
      <Hero />
      <BikeShowcase />
      <Features />
      <Gallery />
      <Specs />
    </main>
  );
}
