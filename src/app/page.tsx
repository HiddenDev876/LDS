import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import CircularSwiperSection from '@/components/sections/CircularSwiperSection';
import Footer from '@/components/layout/Footer';
import AboutUsShortSection from '@/components/sections/AboutUsShortSection';
import ServicesHighlightSection from '@/components/sections/ServicesHighlightSection';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutUsShortSection />
        <ServicesHighlightSection />
        <CircularSwiperSection />
      </main>
      <Footer />
    </div>
  );
}
