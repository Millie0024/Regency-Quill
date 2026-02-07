import { ReactNode } from "react";
import { Link } from "react-router-dom";
import OrnamentDivider from "./OrnamentDivider";

interface RegencyFormLayoutProps {
  title: string;
  subtitle: string;
  quote: string;
  quoteAuthor: string;
  children: ReactNode;
  accentColor: "rose" | "sage";
}

const RegencyFormLayout = ({
  title,
  subtitle,
  quote,
  quoteAuthor,
  children,
  accentColor,
}: RegencyFormLayoutProps) => {
  return (
    <main className="min-h-screen bg-background paper-texture">
      {/* Header / Back */}
      <div className="relative z-10 px-6 pt-8">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-elegant text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span className="text-gold">←</span>
            <span>Return to The Regency Quill</span>
          </Link>
        </div>
      </div>

      {/* Form Header */}
      <div className="relative z-10 px-6 pt-10 pb-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-elegant text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Regency Quill
          </p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 italic leading-tight">
            {title}
          </h1>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed mb-6">
            {subtitle}
          </p>
          <p className="font-display text-sm italic text-gold/80 max-w-md mx-auto leading-relaxed">
            "{quote}"
            <span className="font-elegant not-italic text-xs text-muted-foreground ml-1">
              — {quoteAuthor}
            </span>
          </p>
          <OrnamentDivider className="py-6" />
        </div>
      </div>

      {/* Form Body */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <div
            className={`bg-card rounded-2xl border shadow-sm p-8 md:p-12 ${
              accentColor === "rose"
                ? "border-rose/30"
                : "border-sage/30"
            }`}
          >
            {children}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-6 pb-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-elegant text-sm text-muted-foreground tracking-wide">
            Made for words that deserve to last.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default RegencyFormLayout;
