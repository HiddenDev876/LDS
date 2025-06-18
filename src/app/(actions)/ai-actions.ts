"use server";

import { summarizeServiceOffering, type SummarizeServiceOfferingInput } from "@/ai/flows/summarize-service-offering";
import { z } from "zod";

const SummarizerStateSchema = z.object({
  summary: z.string().optional(),
  error: z.string().optional(),
});

export type SummarizerState = z.infer<typeof SummarizerStateSchema>;

export async function getServiceSummary(
  prevState: SummarizerState,
  formData: FormData
): Promise<SummarizerState> {
  const question = formData.get("question") as string;

  if (!question || typeof question !== 'string' || question.trim() === "") {
    return { error: "Please enter a question about our BPO services." };
  }

  const input: SummarizeServiceOfferingInput = { question };

  try {
    const result = await summarizeServiceOffering(input);
    if (result.summary) {
      return { summary: result.summary };
    } else {
      return { error: "Could not generate a summary. Please try again." };
    }
  } catch (e) {
    console.error("AI Summarizer Error:", e);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
