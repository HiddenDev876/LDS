"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MessageSquareText, DatabaseZap, FileOutput, Languages, Briefcase, Icon } from "lucide-react";
import type { ServiceItem } from "@/types";
import { useEffect, useState } from "react";

const services: ServiceItem[] = [
  {
    icon: Mic,
    title: "Voice Process",
    description: "High-quality inbound and outbound call center services to enhance customer engagement and support.",
    dataAiHint: "microphone audio"
  },
  {
    icon: MessageSquareText,
    title: "Non-Voice Process",
    description: "Efficient back-office support including email, chat, and data entry to streamline your operations.",
    dataAiHint: "chat communication"
  },
  {
    icon: DatabaseZap,
    title: "Data Mining",
    description: "Extracting valuable insights and patterns from large datasets to inform strategic business decisions.",
    dataAiHint: "database analytics"
  },
  {
    icon: FileOutput,
    title: "Data Extraction",
    description: "Accurate and automated extraction of data from various sources, ensuring data integrity and accessibility.",
    dataAiHint: "document processing"
  },
  {
    icon: Languages,
    title: "Audio Translation",
    description: "Professional translation and transcription services for audio content across multiple languages.",
    dataAiHint: "language translate"
  },
  {
    icon: Briefcase,
    title: "Recruitment Assistance",
    description: "We help organizations find and hire qualified candidates to build strong and effective teams.",
    dataAiHint: "recruitment hiring"
  },
];

export default function ServicesSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="services" className={`py-16 md:py-24 bg-secondary transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            We offer a comprehensive suite of BPO services designed to meet your business needs and drive success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`bg-card shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1 flex flex-col animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl font-semibold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
