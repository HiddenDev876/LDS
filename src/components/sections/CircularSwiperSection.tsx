"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import type { TestimonialItem } from "@/types"; // Assuming TestimonialItem is defined in types

// Data can be fetched or imported. For this example, it's hardcoded.
// In a real app, this might come from TestimonialsSection or a shared data source.
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
    testimonial: "We partnered with LDS for their non-voice BPO services, and the results have been outstanding. Their attention to detail and commitment to quality are exceptional. A reliable partner for any business.",
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

export default function CircularSwiperSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <section id="testimonial-swiper" className={`py-16 md:py-24 bg-background transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Trusted by Businesses Like Yours
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            See what our clients are saying about their experience with LDS Data Solutions.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <CardHeader className="pb-4">
                      <Quote className="h-10 w-10 text-primary/30 mb-2" />
                      <CardContent className="p-0 text-sm text-foreground/80 italic flex-grow min-h-[100px]">
                        "{testimonial.testimonial}"
                      </CardContent>
                    </CardHeader>
                    <CardFooter className="mt-auto pt-4 border-t border-border">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                          <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-md text-primary">{testimonial.name}</p>
                          <p className="text-xs text-foreground/70">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
