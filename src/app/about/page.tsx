import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutUsSection from '@/components/sections/AboutUsSection';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
}
