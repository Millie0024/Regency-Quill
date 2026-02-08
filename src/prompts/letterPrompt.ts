import { LetterPayload } from "../types/generation";

export function buildLetterPrompt(data: LetterPayload): string {
  return `
Write a Regency-era love letter.

Recipient: ${data.recipient}
Sender: ${data.sender ?? "The Author"}
Tone: ${data.tone}
Length: ${data.length}

Guidelines:
- Begin with a gentle salutation addressing the recipient
- Use refined, romantic language appropriate to the Regency period
- Express affection with emotional restraint and sincerity
- Avoid modern phrasing or references
- End with a graceful closing and the sender’s name

Modern message:
${data.message}
`;
}
