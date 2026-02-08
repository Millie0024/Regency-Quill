import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RegencyFormLayout from "@/components/RegencyFormLayout";
import { generateContent } from "../server/services/generateFrontend";
import type { AnnouncementPayload } from "@/types/generation";

/* ─────────────────────────────
   Types & Constants
───────────────────────────── */

type AnnouncementType = AnnouncementPayload["announcementType"];
type AnnouncementTone = AnnouncementPayload["tone"];
type ScandalLevel = NonNullable<AnnouncementPayload["scandalLevel"]>;

const scandalLabels: Record<ScandalLevel, string> = {
  mild: "Mild",
  notable: "Notable",
  shocking: "Shocking",
};

const scandalMap: Record<number, ScandalLevel> = {
  0: "mild",
  1: "notable",
  2: "shocking",
};

/* ─────────────────────────────
   Component
───────────────────────────── */

const SocietyAnnouncementForm = () => {
  const navigate = useNavigate();

  // ─────────────────────────────
  // Form State
  // ─────────────────────────────
  const [announcementType, setAnnouncementType] =
    useState<AnnouncementType>("engagement");

  const [names, setNames] = useState("");
  const [message, setMessage] = useState("");

  const [tone, setTone] = useState<AnnouncementTone>("formal");

  // slider uses number[], we map it → backend enum
  const [scandalIndex, setScandalIndex] = useState<number[]>([1]);

  const [loading, setLoading] = useState(false);

  const scandalLevel = scandalMap[scandalIndex[0]];
  const scandalLabel = scandalLabels[scandalLevel];

  // ─────────────────────────────
  // Submit Handler
  // ─────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!names.trim() || !message.trim()) {
      alert("Pray, complete the required fields.");
      return;
    }

    try {
      setLoading(true);

      const payload: AnnouncementPayload = {
        type: "announcement",
        announcementType,
        names,
        message,
        tone,
        scandalLevel,
      };

      const res = await generateContent(payload);

      navigate("/preview-page", {
        state: {
          type: "announcement",
          content: res.text,
        },
      });
    } catch (error) {
      console.error(error);
      alert("The quill faltered. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegencyFormLayout
      title="Draft a Society Announcement"
      subtitle="Share your news with the ton. Write plainly, and the Quill shall elevate it to the talk of the season."
      quote="The ones we love have the power to inflict the greatest scars, for what thing is more fragile than the human heart?"
      quoteAuthor="A Society Observer"
      accentColor="sage"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Announcement Type */}
        <div className="space-y-2">
          <Label className="font-display text-base tracking-wide text-foreground">
            Announcement Type <span className="text-sage">*</span>
          </Label>
          <Select
            value={announcementType}
            onValueChange={(value) =>
              setAnnouncementType(value as AnnouncementType)
            }
          >
            <SelectTrigger className="bg-background/50 border-border/60 font-body text-sm rounded-lg h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engagement">Engagement</SelectItem>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="celebration">Celebration</SelectItem>
              <SelectItem value="general">General Society News</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Names */}
        <div className="space-y-2">
          <Label className="font-display text-base tracking-wide text-foreground">
            Names Involved <span className="text-sage">*</span>
          </Label>
          <Input
            value={names}
            onChange={(e) => setNames(e.target.value)}
            placeholder="e.g., Miss Sharma & Viscount Bridgerton"
            className="bg-background/50 border-border/60 font-body text-sm rounded-lg h-12"
            required
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label className="font-display text-base tracking-wide text-foreground">
            Event Description <span className="text-sage">*</span>
          </Label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="We are delighted to announce our engagement..."
            className="bg-background/50 border-border/60 font-body text-sm rounded-lg min-h-[140px]"
            required
          />
        </div>

        {/* Tone */}
        <div className="space-y-2">
          <Label className="font-display text-base tracking-wide text-foreground">
            Tone
          </Label>
          <Select
            value={tone}
            onValueChange={(value) => setTone(value as AnnouncementTone)}
          >
            <SelectTrigger className="bg-background/50 border-border/60 font-body text-sm rounded-lg h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="playful">Playful</SelectItem>
              <SelectItem value="formal">Formal</SelectItem>
              <SelectItem value="dramatic">Dramatic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Scandal Level */}
        <div className="space-y-4">
          <div className="flex items-baseline justify-between">
            <Label className="font-display text-base tracking-wide text-foreground">
              Scandal Level
            </Label>
            <span className="font-elegant text-sm italic text-gold/80">
              {scandalLabel}
            </span>
          </div>

          <Slider
            value={scandalIndex}
            onValueChange={setScandalIndex}
            min={0}
            max={2}
            step={1}
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="sage"
            size="lg"
            className="w-full font-elegant text-lg tracking-wide"
            disabled={loading}
          >
            {loading ? "Composing…" : "Compose My Announcement"}
          </Button>
        </div>
      </form>
    </RegencyFormLayout>
  );
};

export default SocietyAnnouncementForm;
