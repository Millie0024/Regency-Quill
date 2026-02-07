import { Button } from "@/components/ui/button";
import loveLetterPreview from "@/assets/love-letter-preview.jpg";
import societyPaperPreview from "@/assets/society-paper-preview.jpg";

const CreationPaths = () => {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground">
          Two Paths, One Beautiful Tradition
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Love Letters Card */}
          <div className="bg-card rounded-xl p-8 md:p-10 border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-500">
            <div className="w-full h-48 rounded-lg overflow-hidden mb-8">
              <img
                src={loveLetterPreview}
                alt="Handwritten Regency love letter preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <h3 className="font-display text-2xl mb-4 text-foreground">
              Regency Love Letters
            </h3>

            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Transform your modern thoughts into intimate, poetic letters — written as though meant to be folded, sealed, and cherished.
            </p>

            <p className="font-display text-sm italic text-gold/70 mb-6 leading-relaxed">
              "You are the bane of my existence. And the object of all my desires."
              <span className="font-elegant not-italic text-xs text-muted-foreground ml-1">— Anthony</span>
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Romantic, restrained language",
                "Handwritten or calligraphic styles",
                "Perfect for gifts and keepsakes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-rose mt-0.5 flex-shrink-0">✦</span>
                  <span className="font-body">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="rose" className="w-full font-elegant text-base tracking-wide">
              Begin a Letter
            </Button>
          </div>

          {/* Society Announcements Card */}
          <div className="bg-card rounded-xl p-8 md:p-10 border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-500">
            <div className="w-full h-48 rounded-lg overflow-hidden mb-8">
              <img
                src={societyPaperPreview}
                alt="Vintage Regency society newspaper preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <h3 className="font-display text-2xl mb-4 text-foreground">
              Society Announcements
            </h3>

            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Announce life's milestones through refined society papers in the style of Lady Whistledown — addressed to dearest gentle readers.
            </p>

            <p className="font-display text-sm italic text-gold/70 mb-6 leading-relaxed">
              "Dearest Gentle Reader, this author brings you the most delighthat of news..."
              <span className="font-elegant not-italic text-xs text-muted-foreground ml-1">— Lady Whistledown</span>
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Engagements and celebrations",
                "Elegant editorial tone",
                "Playful yet tasteful drama",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-sage mt-0.5 flex-shrink-0">✦</span>
                  <span className="font-body">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="sage" className="w-full font-elegant text-base tracking-wide">
              Create an Announcement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreationPaths;
