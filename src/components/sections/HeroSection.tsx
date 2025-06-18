"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="hero" className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="absolute inset-0 opacity-50">
        {/* Placeholder for a subtle background pattern or image if desired */}
      </div>
      <div className={`container mx-auto px-4 md:px-6 text-center relative transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Empowering Your Business with <span className="block md:inline">Intelligent Data Solutions</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl">
          LDS Data Solutions provides comprehensive BPO services, from voice processes to advanced data mining, tailored to elevate your operational efficiency.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="/services">Explore Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
