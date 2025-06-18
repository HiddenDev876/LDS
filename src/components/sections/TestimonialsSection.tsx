"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"; // Removed CardTitle as it's not used here directly.
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import type { TestimonialItem } from "@/types";
// import Image from "next/image"; // Not used
import { useEffect, useState } from "react";

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Alex Johnson",
    company: "Innovatech Ltd.",
    testimonial: "LDS Data Solutions' voice process solutions have revolutionized our customer service. Their team is professional, responsive, and truly understands our needs. We've seen a significant improvement in customer satisfaction.",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "professional man"
  },
  {
    id: 2,
    name: "Samantha Lee",
    company: "MarketBoost Inc.",
    testimonial: "The data extraction services from LDS Data Solutions are incredibly accurate and efficient. They've saved us countless hours and provided crucial data for our marketing strategies. Highly recommend their expertise!",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "business woman"
  },
  {
    id: 3,
    name: "David Chen",
    company: "Global Solutions Co.",
    testimonial: "We partnered with LDS Data Solutions for their non-voice BPO services, and the results have been outstanding. Their attention to detail and commitment to quality are exceptional. A reliable partner for any business.",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "smiling person"
  },
   {
    id: 4,
    name: "Maria Rodriguez",
    company: "TechFront Solutions",
    testimonial: "The audio translation services were top-notch. Fast turnaround and impeccable quality. LDS Data Solutions is our go-to for any multilingual projects.",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "professional woman"
  },
  {
    id: 5,
    name: "Kenji Tanaka",
    company: "DataDriven Corp.",
    testimonial: "Their data mining capabilities have uncovered insights we never knew existed. It's given us a real competitive edge. The team at LDS Data Solutions is brilliant!",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "tech professional"
  }
];

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="testimonials" className={`py-16 md:py-24 bg-gradient-to-b from-secondary via-background to-secondary transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Hear from businesses that have partnered with LDS Data Solutions for their success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`bg-card shadow-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 flex flex-col animate-fade-in-up h-full group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4 pt-6">
                <Quote className="h-12 w-12 text-accent/30 mb-3 group-hover:text-accent/50 transition-colors" />
                <CardContent className="p-0 text-base text-foreground/80 italic flex-grow min-h-[120px]">
                  "{testimonial.testimonial}"
                </CardContent>
              </CardHeader>
              <CardFooter className="mt-auto pt-5 pb-6 border-t border-border/70">
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 border-2 border-primary/20 group-hover:border-accent/40 transition-colors">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                    <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg text-primary group-hover:text-accent transition-colors">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">{testimonial.company}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
