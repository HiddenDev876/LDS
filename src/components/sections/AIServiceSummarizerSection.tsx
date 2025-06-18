"use client";

import { useActionState, useFormStatus } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getServiceSummary, type SummarizerState } from "@/app/(actions)/ai-actions";
import { AlertCircle, CheckCircle2, Bot, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState, useRef } from "react";

const initialState: SummarizerState = {
  summary: undefined,
  error: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Summarizing...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" /> Get Summary
        </>
      )}
    </Button>
  );
}

export default function AIServiceSummarizerSection() {
  const [state, formAction] = useActionState(getServiceSummary, initialState);
  const [mounted, setMounted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (state.summary || state.error) {
      // Optionally reset form or handle UI changes after submission
    }
  }, [state.summary, state.error]);


  return (
    <section id="ai-summarizer" className={`py-16 md:py-24 bg-background transition-opacity duration-1000 ease-out ${mounted ? "opacity-100 animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            AI-Powered Service Summarizer
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Have a question about our BPO services? Ask our AI assistant for a quick summary.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              Ask about our services
            </CardTitle>
            <CardDescription>
              Type your question below (e.g., "What data mining services do you offer?").
            </CardDescription>
          </CardHeader>
          <form action={formAction} ref={formRef}>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="question" className="sr-only">Your Question</label>
                <Textarea
                  id="question"
                  name="question"
                  placeholder="Tell me about your voice process solutions..."
                  rows={3}
                  className="focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-end gap-2">
               <SubmitButton />
            </CardFooter>
          </form>
          
          {(state.summary || state.error) && (
            <div className="p-6 pt-0">
              {state.summary && (
                <Alert variant="default" className="bg-green-50 border-green-300 text-green-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <AlertTitle className="font-semibold">AI Summary</AlertTitle>
                  <AlertDescription className="mt-1 whitespace-pre-wrap">{state.summary}</AlertDescription>
                </Alert>
              )}
              {state.error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-5 w-5" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{state.error}</AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
