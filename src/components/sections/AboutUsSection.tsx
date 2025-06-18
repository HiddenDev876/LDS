
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutUsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="about" className={`py-16 md:py-24 bg-background transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              About LDS Data Solutions
            </h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              LDS Data Solutions is a premier Business Process Outsourcing (BPO) provider, dedicated to delivering innovative and reliable solutions that drive business growth. We specialize in a wide array of services designed to optimize your operations and enhance customer experiences.
            </p>
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              Our mission is to empower businesses by leveraging cutting-edge technology and a highly skilled workforce. We believe in building strong partnerships with our clients, understanding their unique needs, and delivering tailored services that exceed expectations. At LDS Data Solutions, we are committed to quality, security, and continuous improvement.
            </p>
            <h3 className="mt-8 text-2xl font-semibold text-primary">
              How We Add Value to Your Company
            </h3>
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              Partnering with LDS Data Solutions means more than just outsourcing tasks; it's about unlocking strategic value. We help your company streamline operations, reduce costs, enhance customer satisfaction, and gain critical data insights. Our solutions are designed to free up your internal resources, allowing you to focus on core business growth and innovation. We help organizations find and hire good candidates, ensuring you have the right talent to succeed.
            </p>
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
             With a focus on data-driven strategies and customer-centric approaches, we help you navigate the complexities of the modern business landscape. Trust LDS Data Solutions to be your reliable partner in achieving operational excellence and strategic goals. We enthusiastically welcome collaborations and new project proposals to foster innovation and mutual growth. If you have an idea or a project, let's build something great together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Collaborate With Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
                 <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 md:h-[450px] rounded-xl overflow-hidden shadow-2xl group">
            <Image
              src="https://placehold.co/600x450.png" 
              alt="LDS Data Solutions Team Collaboration"
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-105 transition-transform duration-500 ease-out"
              data-ai-hint="team meeting office"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white p-4 bg-black/30 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-xl">Our Commitment</h3>
              <p className="text-sm">Delivering Excellence, Driving Growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
