import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactFormSection from '@/components/sections/ContactFormSection';
import GeneralContactSection from '@/components/sections/GeneralContactSection'; // New component for general contact info

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 md:py-24 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            We're here to help and answer any questions you might have.
          </p>
        </div>
        <ContactFormSection />
        <GeneralContactSection />
      </main>
      <Footer />
    </div>
  );
}
