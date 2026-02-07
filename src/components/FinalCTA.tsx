import { Button } from "@/components/ui/button";
import OrnamentDivider from "./OrnamentDivider";

const FinalCTA = () => {
  return (
    <section className="px-6 py-20 md:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <OrnamentDivider />

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 italic leading-tight">
          Begin writing something worth keeping.
        </h2>

        <p className="font-display text-base md:text-lg italic text-muted-foreground mb-2 leading-relaxed">
          "We chose to love each other, every single day. It is a choice, dearest. One that is never too late to make."
        </p>
        <p className="font-elegant text-sm text-gold/70 mb-4">— Violet Bridgerton</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button variant="rose" size="lg" className="font-elegant text-lg tracking-wide">
            Write a Love Letter
          </Button>
          <Button variant="sage" size="lg" className="font-elegant text-lg tracking-wide">
            Create a Society Announcement
          </Button>
        </div>

        <OrnamentDivider />
      </div>
    </section>
  );
};

export default FinalCTA;
