"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mic, MessageSquareText, DatabaseZap, FileOutput, Languages, Briefcase } from "lucide-react";
import type { ServiceItem } from "@/types";
import { useEffect, useState } from "react";

const services: ServiceItem[] = [
  {
    icon: Mic,
    title: "Voice Process",
    description: "High-quality inbound and outbound call center services to enhance customer engagement and support with clarity and professionalism.",
    dataAiHint: "microphone audio"
  },
  {
    icon: MessageSquareText,
    title: "Non-Voice Process",
    description: "Efficient back-office support including email, chat, and data entry to streamline your operations and maintain accuracy.",
    dataAiHint: "chat communication"
  },
  {
    icon: DatabaseZap,
    title: "Data Mining",
    description: "Extracting valuable insights and patterns from large datasets to inform strategic business decisions and drive innovation.",
    dataAiHint: "database analytics"
  },
  {
    icon: FileOutput,
    title: "Data Extraction",
    description: "Accurate and automated extraction of data from various sources, ensuring data integrity and accessibility for your critical tasks.",
    dataAiHint: "document processing"
  },
  {
    icon: Languages,
    title: "Audio Translation",
    description: "Professional translation and transcription services for audio content across multiple languages, ensuring cultural relevance.",
    dataAiHint: "language translate"
  },
  {
    icon: Briefcase,
    title: "Recruitment Assistance",
    description: "We help organizations find and hire qualified candidates, building strong and effective teams through a streamlined process.",
    dataAiHint: "recruitment hiring"
  },
];

export default function ServicesSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="services" className={`py-16 md:py-24 bg-gradient-to-b from-secondary via-background to-secondary transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Our Core Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            We offer a comprehensive suite of BPO services designed to meet your business needs and drive sustainable success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`bg-card shadow-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 flex flex-col animate-fade-in-up group overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="mb-4 flex justify-center items-center h-16 w-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mx-auto">
                   <service.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="font-headline text-2xl font-semibold text-primary text-center group-hover:text-accent transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <CardDescription className="text-base text-foreground/70 leading-relaxed text-center min-h-[100px]">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
