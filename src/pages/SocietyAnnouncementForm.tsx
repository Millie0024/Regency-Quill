import { useState } from "react";
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

const scandalLabels = ["Mild", "Notable", "Shocking"] as const;

const SocietyAnnouncementForm = () => {
  const [announcementType, setAnnouncementType] = useState("");
  const [tone, setTone] = useState("");
  const [scandalLevel, setScandalLevel] = useState([1]);

  const scandalLabel = scandalLabels[scandalLevel[0]] ?? "Notable";

  return (
    <RegencyFormLayout
      title="Draft a Society Announcement"
      subtitle="Share your news with the ton. Write plainly, and Lady Whistledown's pen shall elevate it to the talk of the season."
      quote="The ones we love have the power to inflict the greatest scars, for what thing is more fragile than the human heart?"
      quoteAuthor="Lady Whistledown"
      accentColor="sage"
    >
      <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
        {/* Announcement Type */}
        <div className="space-y-2">
          <Label className="font-display text-base tracking-wide text-foreground">
            Announcement Type <span className="text-sage">*</span>
          </Label>
          <p className="font-body text-xs text-muted-foreground mb-1">
            What occasion does the ton celebrate?
          </p>
          <Select value={announcementType} onValueChange={setAnnouncementType}>
            <SelectTrigger className="bg-background/50 border-border/60 font-body text-sm focus:ring-sage/40 rounded-lg h-12">
              <SelectValue placeholder="Select the occasion…" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border font-body">
              <SelectItem value="engagement" className="font-body">
                Engagement
              </SelectItem>
              <SelectItem value="wedding" className="font-body">
                Wedding
              </SelectItem>
              <SelectItem value="celebration" className="font-body">
                Celebration
              </SelectItem>
              <SelectItem value="general" className="font-body">
                General Society News
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Names Involved */}
        <div className="space-y-2">
          <Label className="font-display text-base tracking-wide text-foreground">
            Names Involved <span className="text-sage">*</span>
          </Label>
          <p className="font-body text-xs text-muted-foreground mb-1">
            Who are the principal figures of this announcement?
          </p>
          <Input
            placeholder="e.g., Miss Sharma & Viscount Bridgerton"
            className="bg-background/50 border-border/60 font-body text-sm placeholder:text-muted-foreground/50 focus-visible:ring-sage/40 rounded-lg h-12"
            required
          />
        </div>

        {/* Event Description */}
        <div className="space-y-2">
          <Label className="font-display text-base tracking-wide text-foreground">
            Event Description <span className="text-sage">*</span>
          </Label>
          <p className="font-body text-xs text-muted-foreground mb-1">
            Describe the occasion in modern English — the Quill shall refine it.
          </p>
          <Textarea
            placeholder="We are excited to announce our engagement after five years together. We met at university and knew from the very first moment..."
            className="bg-background/50 border-border/60 font-body text-sm placeholder:text-muted-foreground/50 focus-visible:ring-sage/40 rounded-lg min-h-[140px] leading-relaxed"
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
          <p className="font-body text-xs text-muted-foreground mb-1">
            In what spirit shall the news be delivered?
          </p>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger className="bg-background/50 border-border/60 font-body text-sm focus:ring-sage/40 rounded-lg h-12">
              <SelectValue placeholder="Choose a tone…" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border font-body">
              <SelectItem value="playful" className="font-body">
                Playful
              </SelectItem>
              <SelectItem value="formal" className="font-body">
                Formal
              </SelectItem>
              <SelectItem value="dramatic" className="font-body">
                Dramatic
              </SelectItem>
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
          <p className="font-body text-xs text-muted-foreground">
            How much drama shall Lady Whistledown bestow?
          </p>
          <div className="px-1">
            <Slider
              value={scandalLevel}
              onValueChange={setScandalLevel}
              max={2}
              min={0}
              step={1}
              className="[&_[role=slider]]:border-sage [&_[role=slider]]:bg-card [&_.relative]:bg-sage/30 [&_[data-orientation=horizontal]>.absolute]:bg-sage"
            />
            <div className="flex justify-between mt-2">
              {scandalLabels.map((label) => (
                <span
                  key={label}
                  className="font-elegant text-xs text-muted-foreground"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="sage"
            size="lg"
            className="w-full font-elegant text-lg tracking-wide"
          >
            Compose My Announcement
          </Button>
          <p className="font-elegant text-xs text-center text-muted-foreground mt-4 italic">
            Dearest gentle reader, your news shall be the talk of the ton.
          </p>
        </div>
      </form>
    </RegencyFormLayout>
  );
};

export default SocietyAnnouncementForm;
