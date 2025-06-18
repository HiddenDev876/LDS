import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import CircularSwiperSection from '@/components/sections/CircularSwiperSection';
import Footer from '@/components/layout/Footer';
import AboutUsShortSection from '@/components/sections/AboutUsShortSection';
import ServicesHighlightSection from '@/components/sections/ServicesHighlightSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import OurTeamSection from '@/components/sections/OurTeamSection';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutUsShortSection />
        <ServicesHighlightSection />
        <WhyChooseUsSection />
        <StatisticsSection />
        <OurTeamSection />
        <CircularSwiperSection />
      </main>
      <Footer />
    </div>
  );
}
