"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquareHeart, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";

export default function GeneralContactSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  return (
    <section id="general-contact" className={`py-16 md:py-24 bg-background transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`} style={{animationDelay: '300ms'}}>
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-2xl sm:text-3xl text-primary">Other Inquiries & Collaborations</CardTitle>
            <CardDescription className="mt-2 text-md text-foreground/80">
              For general questions, feedback, or if you'd like to explore collaboration opportunities, please reach out to us.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div className="flex flex-col items-center space-y-3">
              <Mail className="h-10 w-10 text-accent" />
              <p className="text-lg font-medium text-foreground">General Inquiries & Feedback</p>
              <a href="mailto:info@ldsdatasolutions.in" className="text-accent hover:text-accent/80 transition-colors text-lg">
                info@ldsdatasolutions.in
              </a>
              <p className="text-sm text-muted-foreground">We aim to respond to all inquiries within 24-48 hours.</p>
            </div>

            <div className="border-t border-border my-6"></div>

            <div className="flex flex-col items-center space-y-3">
              <Briefcase className="h-10 w-10 text-accent" />
              <p className="text-lg font-medium text-foreground">Partnerships & New Projects</p>
              <p className="text-md text-foreground/80 max-w-md mx-auto">
                We are always open to exploring new projects and forming strategic partnerships. If you have an innovative idea or a project you'd like to discuss, we'd love to hear from you.
              </p>
               <p className="text-sm text-muted-foreground">Let's build something great together!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
