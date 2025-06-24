import HeroSection from '@/components/HeroSection';
import AccessMap from '@/components/AccessMap';
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
      <main className="min-h-screen bg-gray-50 text-gray-800">
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <AccessMap />
        <ContactSection />
      </main>
  );
}
