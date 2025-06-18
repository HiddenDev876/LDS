"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  projectDetails: z.string().min(10, { message: "Project details must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectDetails: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    setSubmissionStatus(null);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Project inquiry submitted:", values);
    // Simulate success/error
    const success = Math.random() > 0.2; // 80% chance of success
    if (success) {
      setSubmissionStatus({ type: 'success', message: "Thank you for your project inquiry! We'll get back to you shortly." });
      form.reset();
    } else {
      setSubmissionStatus({ type: 'error', message: "Sorry, there was an issue submitting your inquiry. Please try again." });
    }
    setIsSubmitting(false);
  }

  return (
    <section id="contact-project" className={`py-16 md:py-24 bg-gradient-to-b from-background to-secondary transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto shadow-2xl">
          <CardHeader>
            <CardTitle>Discuss Your Project</CardTitle>
            <CardDescription>Interested in starting a project with us or collaborating? Fill out the form below, and our team will reach out to you promptly.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="focus:ring-primary focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} className="focus:ring-primary focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 123-4567" {...field} className="focus:ring-primary focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project, requirements, and goals..." rows={5} {...field} className="focus:ring-primary focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 {submissionStatus && (
                  <Alert variant={submissionStatus.type === 'error' ? 'destructive' : 'default'} className={submissionStatus.type === 'success' ? 'bg-green-50 border-green-300 text-green-700' : ''}>
                    {submissionStatus.type === 'success' ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <AlertCircle className="h-5 w-5" />}
                    <AlertTitle>{submissionStatus.type === 'success' ? 'Message Sent!' : 'Error'}</AlertTitle>
                    <AlertDescription>{submissionStatus.message}</AlertDescription>
                  </Alert>
                )}
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-lg transform hover:scale-102 transition-transform duration-300"
                  aria-label="Send your project inquiry"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Project Inquiry
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
