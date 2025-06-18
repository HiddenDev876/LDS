import Link from 'next/link';

export default function ServicesHighlightSection() {
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
          <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
