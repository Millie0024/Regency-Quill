import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RegencyFormLayout from "@/components/RegencyFormLayout";
import { generateContent } from "../server/services/generateFrontend";
import type { LetterPayload } from "@/types/generation";
import LoveLetterPreview from "@/components/love-letter-preview/LoveLetterPreview";
import { toast } from "@/components/ui/use-toast";

const LoveLetterForm = () => {
  // ─────────────────────────────
  // Form State
  // ─────────────────────────────
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");

  const [tone, setTone] = useState<LetterPayload["tone"]>("romantic");
  const [length, setLength] = useState<LetterPayload["length"]>("medium");

  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [generatedTitle, setGeneratedTitle] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  /* -----------------------------
   Helpers
----------------------------- */

  const payload = {
    type: "letter" as const,
    recipient,
    sender,
    message,
    tone,
    length,
  };

  const parseLetter = (text: string) => {
    // Match the first quoted string
    const titleMatch = text.match(/"([^"]+)"/);

    const title = titleMatch?.[1] || "A Private Correspondence";

    // Remove the quoted title from the body
    const content = titleMatch
      ? text.replace(titleMatch[0], "").trim()
      : text.trim();

    return {
      title,
      content,
    };
  };

  /* -----------------------------
   Submit
----------------------------- */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recipient.trim() || !message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in both the recipient name and your message.",
        variant: "destructive",
      });
      return;
    }

    try {
      setShowPreview(true);
      setIsGenerating(true);
      setGeneratedContent("");
      setLoading(true);

      const res = await generateContent(payload);
      const { title, content } = parseLetter(res.text);
      console.log(res);

      // Simulated ink-drying delay ✒️
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setGeneratedTitle(title);
      setGeneratedContent(content);
    } catch (err) {
      console.error(err);
      toast({
        title: "The quill faltered",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
      setShowPreview(false);
    } finally {
      setIsGenerating(false);
      setLoading(false);
    }
  };

  /* -----------------------------
   Refine
----------------------------- */

  const handleRefine = async () => {
    try {
      setIsGenerating(true);
      setGeneratedContent("");

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const res = await generateContent(payload);
      const { title, content } = parseLetter(res.text);

      setGeneratedTitle(title);
      setGeneratedContent(content);
    } finally {
      setIsGenerating(false);
    }
  };

  /* -----------------------------
   Preview
----------------------------- */

  if (showPreview) {
    return (
      <RegencyFormLayout
        title="A letter from the heart"
        subtitle="Behold — your sentiments, transformed with the grace and eloquence of the Regency era."
        quote="You are the bane of my existence. And the object of all my desires."
        quoteAuthor="Anthony Bridgerton"
        accentColor="rose"
      >
        <LoveLetterPreview
          title={generatedTitle}
          content={generatedContent}
          recipientName={recipient}
          senderName={sender}
          date={date}
          isLoading={isGenerating}
          onRefine={handleRefine}
          onBack={() => setShowPreview(false)}
        />
      </RegencyFormLayout>
    );
  }
  return (
    <RegencyFormLayout
      title="Compose a Love Letter"
      subtitle="Pour your heart onto parchment. Write in your own words, and let the Quill transform them into prose worthy of the finest Regency correspondence."
      quote="You are the bane of my existence. And the object of all my desires."
      quoteAuthor="Anthony Bridgerton"
      accentColor="rose"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Recipient Name */}
        <div className="space-y-2">
          <Label className="font-display text-base tracking-wide text-foreground">
            Recipient Name <span className="text-rose">*</span>
          </Label>
          <p className="font-body text-xs text-muted-foreground mb-1">
            To whom shall this letter be addressed?
          </p>
          <Input
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="e.g., Eleanor"
            className="bg-background/50 border-border/60 font-body text-sm placeholder:text-muted-foreground/50 focus-visible:ring-rose/40 rounded-lg h-12"
            required
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label className="font-display text-base tracking-wide text-foreground">
            Your Message <span className="text-rose">*</span>
          </Label>
          <p className="font-body text-xs text-muted-foreground mb-1">
            Write freely in modern English — the Quill shall do the rest.
          </p>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="I miss you every day and I can't wait to see you again..."
            className="bg-background/50 border-border/60 font-body text-sm placeholder:text-muted-foreground/50 focus-visible:ring-rose/40 rounded-lg min-h-[140px] leading-relaxed"
            required
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 py-2">
          <div className="flex-1 h-px bg-border/60" />
          <span className="font-elegant text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Style & Tone
          </span>
          <div className="flex-1 h-px bg-border/60" />
        </div>

        {/* Tone */}
        <div className="space-y-2">
          <Label className="font-display text-base tracking-wide text-foreground">
            Tone
          </Label>
          <Select
            value={tone}
            onValueChange={(value) =>
              setTone(
                value as "gentle" | "romantic" | "passionate" | "reserved",
              )
            }
          >
            <SelectTrigger className="bg-background/50 border-border/60 font-body text-sm rounded-lg h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gentle">Gentle</SelectItem>
              <SelectItem value="romantic">Romantic</SelectItem>
              <SelectItem value="passionate">Passionate</SelectItem>
              <SelectItem value="reserved">Reserved</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Length */}
        <div className="space-y-3">
          <Label className="font-display text-base tracking-wide text-foreground">
            Length
          </Label>
          <RadioGroup
            value={length}
            onValueChange={(value) =>
              setLength(value as "short" | "medium" | "long")
            }
            className="flex gap-6"
          >
            {["short", "medium", "long"].map((value) => (
              <label
                key={value}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <RadioGroupItem value={value} />
                <span className="font-body text-sm capitalize">{value}</span>
              </label>
            ))}
          </RadioGroup>
        </div>

        {/* Optional Details */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="font-display text-sm tracking-wide text-foreground">
              Sender Name
            </Label>
            <Input
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              placeholder="Your name or alias"
              className="bg-background/50 border-border/60 font-body text-sm rounded-lg h-12"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-display text-sm tracking-wide text-foreground">
              Date
            </Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-background/50 border-border/60 font-body text-sm rounded-lg h-12"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="rose"
            size="lg"
            className="w-full font-elegant text-lg tracking-wide"
            disabled={loading}
          >
            {loading ? "Composing your letter…" : "Compose My Letter"}
          </Button>
        </div>
      </form>
    </RegencyFormLayout>
  );
};

export default LoveLetterForm;
function setGeneratedTitle(title: string) {
  throw new Error("Function not implemented.");
}
