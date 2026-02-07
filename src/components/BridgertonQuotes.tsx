import { useState, useEffect } from "react";
import OrnamentDivider from "./OrnamentDivider";

const quotes = [
  {
    text: "To meet a beautiful woman is one thing, but to meet your best friend in the most beautiful of women is something entirely apart.",
    author: "Simon Basset",
  },
  {
    text: "Why must our only options be to squawk and settle or to never leave the nest? What if I want to fly?",
    author: "Eloise Bridgerton",
  },
  {
    text: "The ones we love have the power to inflict the greatest scars, for what thing is more fragile than the human heart?",
    author: "Lady Whistledown",
  },
  {
    text: "We chose to love each other, every single day. It is a choice, dearest. One that is never too late to make.",
    author: "Violet Bridgerton",
  },
  {
    text: "Just because something is not perfect, does not make it any less worthy of love.",
    author: "Daphne Bridgerton",
  },
  {
    text: "You are the bane of my existence. And the object of all my desires.",
    author: "Anthony Bridgerton",
  },
];

const BridgertonQuotes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-16 md:py-24 paper-texture">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-elegant text-sm tracking-[0.3em] uppercase text-gold/70 mb-10">
          Words from the Ton
        </p>

        <div className="relative min-h-[160px] flex items-center justify-center">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl italic text-foreground leading-relaxed mb-6 px-4">
                "{quote.text}"
              </blockquote>
              <cite className="font-elegant text-base md:text-lg text-muted-foreground not-italic tracking-wide">
                — {quote.author}
              </cite>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "bg-gold w-6"
                  : "bg-gold/30 hover:bg-gold/50"
              }`}
              aria-label={`View quote ${index + 1}`}
            />
          ))}
        </div>

        <OrnamentDivider className="mt-4" />
      </div>
    </section>
  );
};

export default BridgertonQuotes;
