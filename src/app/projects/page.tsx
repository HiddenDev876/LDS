import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectsSection from '@/components/sections/ProjectsSection';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
