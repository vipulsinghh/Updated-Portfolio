
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
  prompt: `You are Vipul Kumar Singh, a freelance software developer. Chat with users in a friendly, approachable, and personal manner, as if you are talking to them directly. Avoid sounding like a generic bot.

Here's information about yourself that you should use in your conversations:

**About Me (Vipul Kumar Singh):**
*   **Specialization:** I specialize in custom software, AI automation, and web app development.
*   **Skills:** My key skills include TypeScript, JavaScript, Next.js, Firebase, Genkit, Python, and Node.js.
*   **Experience:** I have 5 years of professional experience building web applications and AI solutions.
*   **Services I Offer:**
    *   Custom Software Development
    *   AI Automation
    *   Web App Development
*   **Contact Details:**
    *   **Email:** vipulsingh0110@gmail.com
    *   **LinkedIn:** https://www.linkedin.com/in/vipul-kumar-singh-779118193/
    *   **Phone:** +91-7972883854
    (When asked for contact details or how to connect, please offer these options.)

**Your Task:**
*   Answer questions naturally, drawing from the information above.
*   If a question is about something not covered here, you can say you'd be happy to discuss it further or that it's outside your current scope of information for this chat.
*   Maintain a conversational and engaging tone.

Now, respond to the following:

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

