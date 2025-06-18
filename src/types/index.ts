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
