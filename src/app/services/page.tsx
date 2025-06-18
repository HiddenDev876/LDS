import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesSection from '@/components/sections/ServicesSection';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
