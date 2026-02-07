import { useState } from "react";
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

const LoveLetterForm = () => {
  const [tone, setTone] = useState("");
  const [length, setLength] = useState("medium");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  return (
    <RegencyFormLayout
      title="Compose a Love Letter"
      subtitle="Pour your heart onto parchment. Write in your own words, and let the Quill transform them into prose worthy of the finest Regency correspondence."
      quote="You are the bane of my existence. And the object of all my desires."
      quoteAuthor="Anthony Bridgerton"
      accentColor="rose"
    >
      <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
        {/* Recipient Name */}
        <div className="space-y-2">
          <Label className="font-display text-base tracking-wide text-foreground">
            Recipient Name <span className="text-rose">*</span>
          </Label>
          <p className="font-body text-xs text-muted-foreground mb-1">
            To whom shall this letter be addressed?
          </p>
          <Input
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
            placeholder="I miss you every day and I can't wait to see you again. Every moment apart feels like an eternity..."
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
          <p className="font-body text-xs text-muted-foreground mb-1">
            What manner of affection should the letter convey?
          </p>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger className="bg-background/50 border-border/60 font-body text-sm focus:ring-rose/40 rounded-lg h-12">
              <SelectValue placeholder="Choose a tone…" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border font-body">
              <SelectItem value="gentle" className="font-body">
                Gentle
              </SelectItem>
              <SelectItem value="romantic" className="font-body">
                Romantic
              </SelectItem>
              <SelectItem value="passionate" className="font-body">
                Passionate
              </SelectItem>
              <SelectItem value="reserved" className="font-body">
                Reserved
              </SelectItem>
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
            onValueChange={setLength}
            className="flex gap-6"
          >
            {[
              { value: "short", label: "Short" },
              { value: "medium", label: "Medium" },
              { value: "long", label: "Long" },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <RadioGroupItem
                  value={option.value}
                  className="border-rose/50 text-rose"
                />
                <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </RadioGroup>
        </div>

        {/* Optional fields divider */}
        <div className="flex items-center gap-4 py-2">
          <div className="flex-1 h-px bg-border/60" />
          <span className="font-elegant text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Optional Details
          </span>
          <div className="flex-1 h-px bg-border/60" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Sender Name */}
          <div className="space-y-2">
            <Label className="font-display text-sm tracking-wide text-foreground">
              Sender Name
            </Label>
            <Input
              placeholder="Your name or alias"
              className="bg-background/50 border-border/60 font-body text-sm placeholder:text-muted-foreground/50 focus-visible:ring-rose/40 rounded-lg h-12"
            />
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label className="font-display text-sm tracking-wide text-foreground">
              Date
            </Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-background/50 border-border/60 font-body text-sm focus-visible:ring-rose/40 rounded-lg h-12"
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
          >
            Compose My Letter
          </Button>
          <p className="font-elegant text-xs text-center text-muted-foreground mt-4 italic">
            Your words shall be transformed with the grace and eloquence of the
            Regency era.
          </p>
        </div>
      </form>
    </RegencyFormLayout>
  );
};

export default LoveLetterForm;
