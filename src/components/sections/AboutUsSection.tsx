"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
              Our mission is to empower businesses by leveraging cutting-edge technology and a highly skilled workforce. We believe in building strong partnerships with our clients, understanding their unique needs, and delivering tailored services that exceed expectations. At LDS Data Hub, we are committed to quality, security, and continuous improvement.
            </p>
             <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              With a focus on data-driven strategies and customer-centric approaches, we help you navigate the complexities of the modern business landscape. Trust LDS Data Hub to be your reliable partner in achieving operational excellence and strategic goals.
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl group">
            <Image
              src="https://placehold.co/600x400.png"
              alt="LDS Data Solutions Team"
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-105 transition-transform duration-500 ease-out"
              data-ai-hint="team collaboration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold text-xl">Our Commitment</h3>
              <p className="text-sm">Delivering Excellence, Driving Growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
