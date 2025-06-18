import type { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  dataAiHint: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  company: string;
  testimonial: string;
  avatar: string;
  dataAiHint: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  dataAiHint: string;
  technologies: string[];
  client?: string;
  liveLink?: string;
  category: string;
}
