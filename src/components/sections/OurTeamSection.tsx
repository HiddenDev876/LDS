"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { TeamMemberItem } from "@/types";
import { useEffect, useState } from "react";
import { Linkedin, UsersRound } from "lucide-react"; // Added Linkedin icon

const teamMembers: TeamMemberItem[] = [
  {
    id: "leader-1",
    name: "Dr. Emily Carter",
    title: "Founder & CEO",
    bio: "With over 15 years of experience in data science and BPO management, Dr. Carter leads LDS Data Solutions with a vision for innovation and client success. Her expertise drives our strategic direction and commitment to quality.",
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: "woman ceo",
    socialLink: "https://linkedin.com/in/emilycarter" 
  },
  {
    id: "member-1",
    name: "Michael Chen",
    title: "Head of Operations",
    bio: "Michael ensures seamless execution of all our projects, focusing on efficiency and operational excellence. He has a strong background in process optimization.",
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: "man operations",
    socialLink: "https://linkedin.com/in/michaelchen"
  },
  {
    id: "member-2",
    name: "Aisha Khan",
    title: "Lead Data Analyst",
    bio: "Aisha leads our data analytics team, transforming complex datasets into actionable insights that empower our clients to make informed decisions.",
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: "woman analyst",
    socialLink: "https://linkedin.com/in/aishakhan"
  },
];

export default function OurTeamSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="our-team" className={`py-16 md:py-24 bg-background transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
           <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
             <UsersRound className="h-10 w-10 text-primary" />
           </div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Meet Our Leadership & Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            The dedicated professionals driving innovation and success at LDS Data Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id} 
              className={`bg-card shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1 flex flex-col text-center items-center animate-fade-in-up overflow-hidden group`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="items-center pb-4">
                <Avatar className="h-32 w-32 mb-4 border-4 border-primary/20 group-hover:border-accent/40 transition-all duration-300 ease-out transform group-hover:scale-105">
                  <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.dataAiHint} />
                  <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">{member.name}</CardTitle>
                <CardDescription className="text-base text-accent group-hover:text-primary/80 transition-colors duration-300">{member.title}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">{member.bio}</p>
                {member.socialLink && (
                  <a 
                    href={member.socialLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm text-primary hover:text-accent transition-colors"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin className="h-4 w-4 mr-1.5" /> Connect on LinkedIn
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
