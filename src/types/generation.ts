export type GenerationType = "letter" | "announcement";

export interface BasePayload {
  type: GenerationType;
}

export interface LetterPayload extends BasePayload {
  type: "letter";
  recipient: string;
  sender?: string;
  message: string;
  tone: "gentle" | "romantic" | "passionate" | "reserved";
  length: "short" | "medium" | "long";
}

export interface AnnouncementPayload extends BasePayload {
  type: "announcement";
  announcementType: "engagement" | "wedding" | "celebration" | "general";
  names: string;
  message: string;
  tone: "playful" | "formal" | "dramatic";
  scandalLevel?: "mild" | "notable" | "shocking";
}

export type GenerationPayload = LetterPayload | AnnouncementPayload;

export interface GenerationResponse {
  text: string;
}
