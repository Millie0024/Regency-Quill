import { AnnouncementPayload } from "../types/generation";

export function buildAnnouncementPrompt(data: AnnouncementPayload): string {
  return `
You are writing as a Regency-era society columnist in the unmistakable voice of Lady Whistledown from Bridgerton.

The tone must be sharp, observant, elegant, and delightfully scandalous — never vulgar, but always intriguing.

━━━━━━━━━━━━━━━━━━
CONTEXT
━━━━━━━━━━━━━━━━━━
Announcement type: ${data.announcementType}
Names involved: ${data.names}
Tone: ${data.tone}
Scandal level: ${data.scandalLevel ?? "mild"}

Event description (plain text from the family involved):
${data.message}

━━━━━━━━━━━━━━━━━━
VOICE & STYLE REQUIREMENTS
━━━━━━━━━━━━━━━━━━
- Begin the body EXACTLY with: "Dearest Gentle Readers,"
- Write entirely from the perspective of "this author"
- Refer frequently to "the ton"
- Use phrases such as:
  - "It has come to the notice of this author..."
  - "The ton has been quite abuzz..."
  - "One cannot help but observe..."
  - "This author would be remiss not to report..."
- Maintain an air of knowing wit and playful superiority
- Subtly reflect the scandal level (raised brows for mild, whispers for notable, gasps for shocking)
- For weddings, use refined language such as "nuptials"
- Avoid modern references, slang, or technology
- Do NOT mention real historical figures
- Keep the prose suitable for Regency high society

━━━━━━━━━━━━━━━━━━
OUTPUT FORMAT (STRICT)
━━━━━━━━━━━━━━━━━━
Return the announcement in the following format ONLY:

TITLE: (do not return the word "Title")
<One dramatic, elegant, newspaper-style headline in quotation marks>

BODY: (do not return the word "Body")
<2–4 short paragraphs written in Lady Whistledown's voice following all requirements above>

Do not include anything outside this structure.
`;
}