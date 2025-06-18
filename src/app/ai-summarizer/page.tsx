import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIServiceSummarizerSection from '@/components/sections/AIServiceSummarizerSection';

export default function AiSummarizerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <AIServiceSummarizerSection />
      </main>
      <Footer />
    </div>
  );
}
