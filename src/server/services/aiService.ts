import Groq from "groq-sdk";
import dotenv from "dotenv";
import { SYSTEM_PROMPT } from "../../prompts/systemPrompt";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateText(prompt: string): Promise<string> {
  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    temperature: 0.9,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: prompt },
    ],
  });

  const text = response.choices[0]?.message?.content;

  if (!text) {
    throw new Error("No text returned from Groq");
  }

  return text;
}
