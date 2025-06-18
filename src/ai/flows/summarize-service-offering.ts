'use server';
/**
 * @fileOverview Summarizes LDS Data Hub's BPO service offerings based on a user's question.
 *
 * - summarizeServiceOffering - A function that summarizes service offerings based on a user question.
 * - SummarizeServiceOfferingInput - The input type for the summarizeServiceOffering function.
 * - SummarizeServiceOfferingOutput - The return type for the summarizeServiceOffering function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeServiceOfferingInputSchema = z.object({
  question: z
    .string()
    .describe('The question about BPO services from the potential client.'),
});
export type SummarizeServiceOfferingInput = z.infer<typeof SummarizeServiceOfferingInputSchema>;

const SummarizeServiceOfferingOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summary of the relevant service offerings from LDS Data Hub.'),
});
export type SummarizeServiceOfferingOutput = z.infer<typeof SummarizeServiceOfferingOutputSchema>;

export async function summarizeServiceOffering(input: SummarizeServiceOfferingInput): Promise<SummarizeServiceOfferingOutput> {
  return summarizeServiceOfferingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeServiceOfferingPrompt',
  input: {schema: SummarizeServiceOfferingInputSchema},
  output: {schema: SummarizeServiceOfferingOutputSchema},
  prompt: `You are an expert BPO service summarizer for LDS Data Hub.

  LDS Data Hub offers the following services:
  - Voice process
  - Non-voice process
  - Data mining
  - Data extraction
  - Audio translation

  Based on the user's question, summarize the relevant service offerings from LDS Data Hub.

  Question: {{{question}}}`,
});

const summarizeServiceOfferingFlow = ai.defineFlow(
  {
    name: 'summarizeServiceOfferingFlow',
    inputSchema: SummarizeServiceOfferingInputSchema,
    outputSchema: SummarizeServiceOfferingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
