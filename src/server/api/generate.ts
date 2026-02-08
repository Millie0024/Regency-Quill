import { Request, Response } from "express";
import { generateText } from "../services/aiService";
import { buildLetterPrompt } from "../../prompts/letterPrompt";
import { buildAnnouncementPrompt } from "../../prompts/announcementPrompt";
import { GenerationPayload } from "../../types/generation";

export async function generateHandler(req: Request, res: Response) {
  try {
    const payload = req.body as GenerationPayload;

    let prompt: string;

    if (payload.type === "letter") {
      prompt = buildLetterPrompt(payload);
    } else {
      prompt = buildAnnouncementPrompt(payload);
    }

    const text = await generateText(prompt);

    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "The quill faltered momentarily. Please try again.",
    });
  }
}
