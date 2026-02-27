import { GenerationPayload, GenerationResponse } from "../../types/generation";

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

export async function generateContent(
  payload: GenerationPayload
): Promise<GenerationResponse> {
  const res = await fetch(`${API_URL}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Generation failed");
  }

  return res.json();
}
