import { AnnouncementPayload } from "../types/generation";

export function buildAnnouncementPrompt(data: AnnouncementPayload): string {
  return `
Write a refined Regency-era society announcement addressed to "Dearest Gentle Reader".

Announcement type: ${data.announcementType}
Names involved: ${data.names}
Tone: ${data.tone}
Scandal level: ${data.scandalLevel ?? "mild"}

Guidelines:
- Write in third person
- Use an editorial, newspaper-style voice
- Maintain elegance, wit, and playful drama
- Avoid naming real historical figures
- Keep the announcement tasteful and celebratory

Event description:
${data.message}
`;
}
