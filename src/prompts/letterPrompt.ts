import { LetterPayload } from "../types/generation";

export function buildLetterPrompt(data: LetterPayload): string {
  return `
You are composing an intimate private letter in the Regency era, written with ink and sealed by hand.

The letter is meant only for its recipient and must reflect the manners, restraint, and romantic elegance of high society.

━━━━━━━━━━━━━━━━━━
CONTEXT
━━━━━━━━━━━━━━━━━━
Recipient: ${data.recipient}
Sender: ${data.sender ?? "The Author"}
Tone: ${data.tone}
Length: ${data.length}

Original message (written in modern language):
${data.message}

━━━━━━━━━━━━━━━━━━
WRITING GUIDELINES
━━━━━━━━━━━━━━━━━━
- Write in first person
- Do not start with dearest, just write the body of the letter
- Use refined, old English–inspired Regency prose
- Express affection with restraint, longing, and sincerity
- Avoid modern phrasing, slang, or references
- Let emotion be conveyed through implication rather than excess
- Address the recipient with warmth and respect
- Maintain a gentle, romantic cadence throughout

━━━━━━━━━━━━━━━━━━
OUTPUT FORMAT (STRICT)
━━━━━━━━━━━━━━━━━━
Return the letter in the following format ONLY:

TITLE:
<An elegant, poetic title suitable for a private letter always keep it in " ">

BODY:
<The full letter text, no salutation and no ending with a graceful closing and the sender’s name. You can make it personal by addressing the person being
written to directly using their name in the body>

Do not include anything outside this structure.
`;
}
