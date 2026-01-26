import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cafe-cream">
      <Hero />
      <FeaturedProducts />
      <Story />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
