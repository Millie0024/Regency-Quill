import { GenerationPayload, GenerationResponse } from "../../types/generation";

const API_URL = "http://localhost:5000/api/generate";

export async function generateContent(
  payload: GenerationPayload
): Promise<GenerationResponse> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Generation failed");
  }

  return res.json();
}
