import { cn } from "@/lib/utils";

export type LetterFormat = "parchment" | "sunlit" | "kissed" | "weathered";

interface FormatOption {
  id: LetterFormat;
  label: string;
  description: string;
}

const FORMAT_OPTIONS: FormatOption[] = [
  {
    id: "parchment",
    label: "Ornate Parchment",
    description: "Flourished corners",
  },
  {
    id: "sunlit",
    label: "Sunlit Letter",
    description: "Warm & elegant",
  },
  {
    id: "kissed",
    label: "Kissed Note",
    description: "Lipstick & florals",
  },
  {
    id: "weathered",
    label: "Weathered Love",
    description: "Aged & heartfelt",
  },
];

interface LetterFormatSelectorProps {
  selected: LetterFormat;
  onChange: (format: LetterFormat) => void;
}

const LetterFormatSelector = ({ selected, onChange }: LetterFormatSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {FORMAT_OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onChange(option.id)}
          className={cn(
            "px-4 py-2.5 rounded-full border text-sm font-elegant tracking-wide transition-all duration-300",
            selected === option.id
              ? "bg-rose/90 text-white border-rose shadow-md"
              : "bg-card text-foreground border-border hover:border-rose/40"
          )}
        >
          <span className="block font-display text-xs font-semibold">
            {option.label}
          </span>
          <span className="block text-[10px] opacity-70 mt-0.5">
            {option.description}
          </span>
        </button>
      ))}
    </div>
  );
};

export default LetterFormatSelector;
