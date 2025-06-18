"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image"; // Keep for potential future background image

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="hero" className="relative py-24 md:py-40 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
      {/* Optional: Subtle animated background shapes or particles */}
      <div className="absolute inset-0 opacity-5">
        {/* Example: <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent rounded-full filter blur-3xl animate-pulse"></div> */}
      </div>
      <div className={`container mx-auto px-4 md:px-6 text-center relative transition-all duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
        <h1 className="font-headline text-5xl font-extrabold tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
          Empowering Your Business with <span className="block md:inline bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary/70">Intelligent Data Solutions</span>
        </h1>
        <p className="mt-8 max-w-3xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl leading-relaxed">
          LDS Data Solutions provides comprehensive BPO services, from voice processes to advanced data mining, tailored to elevate your operational efficiency and drive growth.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-10 py-7 text-lg">
            <Link href="/services">Explore Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 hover:text-accent shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-10 py-7 text-lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
