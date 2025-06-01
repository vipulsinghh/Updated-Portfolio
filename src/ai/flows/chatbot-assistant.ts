'use server';

/**
 * @fileOverview AI chatbot assistant for answering questions about Vipul Kumar Singh.
 *
 * - chatbotAssistant - A function that handles the chatbot assistant process.
 * - ChatbotAssistantInput - The input type for the chatbotAssistant function.
 * - ChatbotAssistantOutput - The return type for the chatbotAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotAssistantInputSchema = z.object({
  question: z.string().describe('The question asked by the user.'),
});
export type ChatbotAssistantInput = z.infer<typeof ChatbotAssistantInputSchema>;

const ChatbotAssistantOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});
export type ChatbotAssistantOutput = z.infer<typeof ChatbotAssistantOutputSchema>;

export async function chatbotAssistant(input: ChatbotAssistantInput): Promise<ChatbotAssistantOutput> {
  return chatbotAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotAssistantPrompt',
  input: {schema: ChatbotAssistantInputSchema},
  output: {schema: ChatbotAssistantOutputSchema},
  prompt: `You are a chatbot assistant designed to answer questions about Vipul Kumar Singh. Use the following information to answer the user's question. If the information is not available, respond politely that you do not have the answer to the question.

Vipul Kumar Singh is a freelance software developer specializing in custom software, AI automation, and web app development.

Skills: Typescript, Javascript, NextJS, Firebase, Genkit, Python, Node.js

Experience: 5 years of professional experience building web applications and AI solutions.

Services: Custom Software Development, AI Automation, Web App Development

Now answer the following question:

{{question}}`,
});

const chatbotAssistantFlow = ai.defineFlow(
  {
    name: 'chatbotAssistantFlow',
    inputSchema: ChatbotAssistantInputSchema,
    outputSchema: ChatbotAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
