"use client";

import { BarChart3, Smile, Users, Briefcase, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: Briefcase,
    value: "150+",
    label: "Projects Completed",
  },
  {
    icon: Smile,
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    icon: Users,
    value: "75+",
    label: "Happy Clients",
  },
  {
    icon: Zap,
    value: "500K+",
    label: "Tasks Automated",
  },
];

export default function StatisticsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="statistics" className={`py-16 md:py-24 bg-primary/5 text-primary transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Our Impact by the Numbers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/80">
            We deliver tangible results that speak volumes about our dedication and expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`bg-background p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center items-center mb-4">
                <stat.icon className="h-12 w-12 text-accent" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-md text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
