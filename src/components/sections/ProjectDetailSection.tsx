"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Briefcase, Palette, Code, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Re-using mockProjects from ProjectsSection for simplicity.
// In a real app, this data would likely be fetched or passed differently.
const mockProjects: ProjectItem[] = [
  {
    id: "smart-bpo-suite",
    title: "SmartBPO Suite",
    shortDescription: "An AI-driven platform enhancing call center efficiency and customer satisfaction for BPO operations.",
    longDescription: "SmartBPO Suite leverages machine learning to analyze customer interactions in real-time, providing agents with instant feedback and suggestions. It features automated quality assurance, sentiment analysis, and predictive routing to optimize call handling and reduce operational costs. The suite integrates seamlessly with existing CRM systems, offering a comprehensive solution for modern BPOs looking to improve performance and agent productivity through actionable insights derived from advanced AI algorithms.",
    imageUrl: "https://placehold.co/800x500.png",
    dataAiHint: "futuristic interface",
    technologies: ["React", "Node.js", "Python", "Google Cloud AI", "PostgreSQL", "Docker", "Kubernetes"],
    client: "Major Telecom Provider",
    category: "BPO Solutions",
    liveLink: "#"
  },
  {
    id: "data-insight-engine",
    title: "DataInsight Engine",
    shortDescription: "A powerful data mining and visualization tool for e-commerce businesses to uncover sales patterns.",
    longDescription: "DataInsight Engine processes vast amounts of transactional data to identify trends, customer segments, and product affinities. It offers interactive dashboards and custom reporting features, enabling businesses to make data-driven decisions for marketing campaigns, inventory management, and pricing strategies. Its scalable architecture ensures performance even with growing datasets, providing a robust platform for e-commerce analytics.",
    imageUrl: "https://placehold.co/800x500.png",
    dataAiHint: "analytics graph",
    technologies: ["Next.js", "Flask", "Pandas", "D3.js", "MongoDB", "Redis", "AWS Lambda"],
    client: "Retail Analytics Corp.",
    category: "Data Analytics",
    liveLink: "#"
  },
  {
    id: "global-translate-hub",
    title: "GlobalTranslate Hub",
    shortDescription: "A centralized platform for managing and executing audio and text translation projects efficiently.",
    longDescription: "GlobalTranslate Hub streamlines the entire translation workflow, from project submission and vendor assignment to quality control and delivery. It supports multiple file formats and integrates with AI translation services for initial drafts, followed by human review for accuracy and nuance. Features include real-time progress tracking, secure file handling, and invoicing capabilities, making it an all-in-one solution for language service providers.",
    imageUrl: "https://placehold.co/800x500.png",
    dataAiHint: "world map connect",
    technologies: ["Ruby on Rails", "React", "AWS S3", "Stripe API", "Sidekiq", "GraphQL"],
    client: "LinguaVerse Ltd.",
    category: "Translation Services",
  },
  {
    id: "talent-finder-ai",
    title: "TalentFinder AI",
    shortDescription: "AI-powered recruitment assistance tool that matches candidates to job roles with high precision.",
    longDescription: "TalentFinder AI uses natural language processing and machine learning to analyze resumes and job descriptions, providing a ranked list of suitable candidates. It helps reduce time-to-hire and improves the quality of hires by focusing on skills, experience, and cultural fit. Includes automated screening, candidate communication templates, and interview scheduling features integrated with popular calendar services.",
    imageUrl: "https://placehold.co/800x500.png",
    dataAiHint: "network people",
    technologies: ["Python (Django)", "Vue.js", "NLP Libraries", "Elasticsearch", "Celery", "RabbitMQ"],
    client: "HR Tech Innovators",
    category: "Recruitment Tech",
    liveLink: "#"
  }
];

const categoryIcons: { [key: string]: React.ElementType } = {
  "BPO Solutions": Briefcase,
  "Data Analytics": Code,
  "Translation Services": Palette,
  "Recruitment Tech": Zap,
};


interface ProjectDetailSectionProps {
  projectId: string;
}

export default function ProjectDetailSection({ projectId }: ProjectDetailSectionProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const project = mockProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold text-destructive">Project not found.</h2>
          <Button asChild variant="link" className="mt-4 text-primary">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  const IconComponent = categoryIcons[project.category] || Code;

  return (
    <section id={`project-${project.id}`} className={`py-16 md:py-24 bg-background transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/10">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden shadow-2xl">
          <CardHeader className="p-0 relative">
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.dataAiHint}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <Badge variant="secondary" className="mb-2 bg-opacity-80 backdrop-blur-sm">
                  <IconComponent className="h-5 w-5 mr-2 text-accent" />
                  {project.category}
                </Badge>
                <CardTitle className="text-3xl md:text-4xl font-bold text-white shadow-lg">{project.title}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold text-primary border-b pb-2">Project Overview</h3>
              <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
              
              {project.liveLink && project.liveLink !== "#" && (
                 <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90">
                   <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                     Visit Live Project <ExternalLink className="ml-2 h-5 w-5" />
                   </Link>
                 </Button>
              )}
            </div>
            <aside className="md:col-span-1 space-y-6">
              <Card className="bg-secondary/50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Project Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.client && (
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground">Client</h4>
                      <p className="text-md text-foreground">{project.client}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground">Category</h4>
                    <p className="text-md text-foreground">{project.category}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="default" className="bg-primary/80 text-primary-foreground font-normal text-sm px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
