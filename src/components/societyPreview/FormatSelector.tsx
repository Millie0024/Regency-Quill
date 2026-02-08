import { cn } from "@/lib/utils";

export type PaperFormat = "broadsheet" | "gazette" | "scandal" | "column";

interface FormatOption {
  id: PaperFormat;
  label: string;
  description: string;
}

const FORMAT_OPTIONS: FormatOption[] = [
  {
    id: "broadsheet",
    label: "Classic Broadsheet",
    description: "Two-column newspaper",
  },
  {
    id: "gazette",
    label: "Gossip Gazette",
    description: "With lipstick marks",
  },
  {
    id: "scandal",
    label: "Scandal Sheet",
    description: "Bold & dramatic",
  },
  {
    id: "column",
    label: "Society Column",
    description: "Elegant editorial",
  },
];

interface FormatSelectorProps {
  selected: PaperFormat;
  onChange: (format: PaperFormat) => void;
}

const FormatSelector = ({ selected, onChange }: FormatSelectorProps) => {
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
              ? "bg-foreground text-card border-foreground shadow-md"
              : "bg-card text-foreground border-border hover:border-foreground/40"
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

export default FormatSelector;
