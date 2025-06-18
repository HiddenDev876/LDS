import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
