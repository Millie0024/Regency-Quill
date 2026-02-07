import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-regency.jpg";
import loveLetterPreview from "@/assets/love-letter-preview.jpg";
import societyPaperPreview from "@/assets/society-paper-preview.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden paper-texture">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-15"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Product name */}
        <p className="font-elegant text-lg tracking-[0.3em] uppercase text-muted-foreground mb-8 animate-fade-in">
          The Regency Quill
        </p>

        {/* Main headline */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground mb-6 animate-fade-in-up italic">
          Words, written as though they belonged to another century.
        </h1>

        {/* Subheading */}
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Create Regency-inspired love letters and society announcements — beautifully written, exquisitely styled, and meant to be kept.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Button variant="rose" size="lg" className="font-elegant text-lg tracking-wide">
            Write a Love Letter
          </Button>
          <Button variant="sage" size="lg" className="font-elegant text-lg tracking-wide">
            Create a Society Announcement
          </Button>
        </div>

        {/* Preview cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gold/20 rounded-lg blur-sm group-hover:bg-gold/30 transition-colors duration-500" />
            <img
              src={loveLetterPreview}
              alt="A handwritten Regency love letter on parchment paper with floral accents"
              className="relative w-56 md:w-64 rounded-lg shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-500"
              loading="lazy"
            />
            <p className="mt-3 text-sm font-elegant text-muted-foreground italic">Love Letter</p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gold/20 rounded-lg blur-sm group-hover:bg-gold/30 transition-colors duration-500" />
            <img
              src={societyPaperPreview}
              alt="A vintage Regency society newspaper with elegant typography"
              className="relative w-56 md:w-64 rounded-lg shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-500"
              loading="lazy"
            />
            <p className="mt-3 text-sm font-elegant text-muted-foreground italic">Society Announcement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
