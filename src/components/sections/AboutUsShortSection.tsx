import Link from 'next/link';

export default function AboutUsShortSection() {
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
          <Link href="/about" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
