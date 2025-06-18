"use client";

import { Lightbulb, ShieldCheck, Users, Brain, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "We leverage cutting-edge technology and creative thinking to deliver forward-thinking solutions that solve complex challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    description: "Our commitment to excellence ensures that we deliver high-quality, reliable services that you can depend on for your critical operations.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "We prioritize your needs, working closely with you to understand your goals and tailor our services to achieve optimal results.",
  },
  {
    icon: Brain,
    title: "Expert Team",
    description: "Our skilled professionals bring deep industry knowledge and technical expertise to every project, ensuring successful outcomes.",
  },
];

export default function WhyChooseUsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="why-choose-us" className={`py-16 md:py-24 bg-secondary transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Why Partner with LDS Data Solutions?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Discover the advantages of choosing us for your BPO and data needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`bg-card shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1 flex flex-col text-center items-center animate-fade-in-up group`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="mb-4 flex justify-center items-center h-16 w-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mx-auto">
                  <feature.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="font-headline text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <p className="text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
