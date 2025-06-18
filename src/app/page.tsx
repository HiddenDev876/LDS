import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import CircularSwiperSection from '@/components/sections/CircularSwiperSection';
import Footer from '@/components/layout/Footer';
import AboutUsShortSection from '@/components/sections/AboutUsShortSection';
import ServicesHighlightSection from '@/components/sections/ServicesHighlightSection';


// New component for a brief About Us snippet on the homepage
function AboutUsShortSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
          Your Partner in Data Excellence
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80 leading-relaxed">
          LDS Data Solutions is dedicated to empowering businesses like yours through innovative BPO and data services. We combine expertise with cutting-edge technology to deliver solutions that drive growth and efficiency.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80 leading-relaxed">
          From optimizing customer interactions with our voice and non-voice processes to uncovering valuable insights through data mining and extraction, we are committed to your success.
        </p>
        <div className="mt-8">
          <a href="/about" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}

// New component for a brief Services highlight on the homepage
function ServicesHighlightSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
       <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
          Comprehensive BPO Services
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80 leading-relaxed">
          We offer a wide range of services including Voice & Non-Voice Processes, Data Mining & Extraction, Audio Translation, and Recruitment Assistance. Our goal is to provide tailored solutions that meet your unique business needs.
        </p>
        <div className="mt-8">
          <a href="/services" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10">
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}


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
