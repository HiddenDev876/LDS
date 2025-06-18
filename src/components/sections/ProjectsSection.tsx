"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase, Palette, Code } from "lucide-react";
import type { ProjectItem } from "@/types";

const mockProjects: ProjectItem[] = [
  {
    id: "smart-bpo-suite",
    title: "SmartBPO Suite",
    shortDescription: "An AI-driven platform enhancing call center efficiency and customer satisfaction for BPO operations.",
    longDescription: "SmartBPO Suite leverages machine learning to analyze customer interactions in real-time, providing agents with instant feedback and suggestions. It features automated quality assurance, sentiment analysis, and predictive routing to optimize call handling and reduce operational costs. The suite integrates seamlessly with existing CRM systems.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "futuristic dashboard",
    technologies: ["React", "Node.js", "Python", "Google Cloud AI", "PostgreSQL"],
    client: "Major Telecom Provider",
    category: "BPO Solutions",
  },
  {
    id: "data-insight-engine",
    title: "DataInsight Engine",
    shortDescription: "A powerful data mining and visualization tool for e-commerce businesses to uncover sales patterns.",
    longDescription: "DataInsight Engine processes vast amounts of transactional data to identify trends, customer segments, and product affinities. It offers interactive dashboards and custom reporting features, enabling businesses to make data-driven decisions for marketing campaigns, inventory management, and pricing strategies.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "data visualization",
    technologies: ["Next.js", "Flask", "Pandas", "D3.js", "MongoDB"],
    client: "Retail Analytics Corp.",
    category: "Data Analytics",
  },
  {
    id: "global-translate-hub",
    title: "GlobalTranslate Hub",
    shortDescription: "A centralized platform for managing and executing audio and text translation projects efficiently.",
    longDescription: "GlobalTranslate Hub streamlines the entire translation workflow, from project submission and vendor assignment to quality control and delivery. It supports multiple file formats and integrates with AI translation services for initial drafts, followed by human review for accuracy and nuance.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "language communication",
    technologies: ["Ruby on Rails", "React", "AWS S3", "Stripe API"],
    client: "LinguaVerse Ltd.",
    category: "Translation Services",
  },
  {
    id: "talent-finder-ai",
    title: "TalentFinder AI",
    shortDescription: "AI-powered recruitment assistance tool that matches candidates to job roles with high precision.",
    longDescription: "TalentFinder AI uses natural language processing and machine learning to analyze resumes and job descriptions, providing a ranked list of suitable candidates. It helps reduce time-to-hire and improves the quality of hires by focusing on skills, experience, and cultural fit. Includes automated screening and interview scheduling features.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "recruitment technology",
    technologies: ["Python (Django)", "Vue.js", "NLP Libraries", "Elasticsearch"],
    client: "HR Tech Innovators",
    category: "Recruitment Tech",
  }
];


const categoryIcons: { [key: string]: React.ElementType } = {
  "BPO Solutions": Briefcase,
  "Data Analytics": Code,
  "Translation Services": Palette, // Using Palette as a stand-in, could be Languages icon
  "Recruitment Tech": Briefcase, // Re-using, could be Users icon
};


export default function ProjectsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="projects" className={`py-16 md:py-24 bg-gradient-to-b from-background to-secondary transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Our Flagship Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Discover some of the innovative solutions and successful projects delivered by LDS Data Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {mockProjects.map((project, index) => {
            const IconComponent = categoryIcons[project.category] || Code;
            return (
              <Card 
                key={project.id} 
                className={`bg-card shadow-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1 flex flex-col animate-fade-in-up overflow-hidden group`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.dataAiHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                   <Badge variant="default" className="absolute top-4 right-4 bg-primary/80 text-primary-foreground backdrop-blur-sm">
                     <IconComponent className="h-4 w-4 mr-1.5" />
                     {project.category}
                   </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary/90 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base text-foreground/70 pt-1 h-20 overflow-hidden">
                    {project.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-2">
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-foreground mb-1.5">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map(tech => (
                        <Badge key={tech} variant="secondary" className="font-normal">{tech}</Badge>
                      ))}
                      {project.technologies.length > 4 && <Badge variant="secondary">...</Badge>}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3">
                    <Link href={`/projects/${project.id}`}>
                      View Project Details <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
