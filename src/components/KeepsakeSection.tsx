import keepsakeImage from "@/assets/keepsake-flatlay.jpg";

const KeepsakeSection = () => {
  return (
    <section className="px-6 py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 rounded-2xl blur-xl" />
            <img
              src={keepsakeImage}
              alt="A curated keepsake flat lay with a parchment letter tied with a dusty rose ribbon, teacup, dried flowers, and antique glasses"
              className="relative w-full rounded-xl shadow-lg border border-border/40"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-6 text-foreground leading-tight">
              Designed as a Keepsake
            </h2>

            <p className="font-elegant text-xl text-foreground/90 leading-relaxed mb-6 italic">
              These are not messages meant to disappear in a chat window.
            </p>

            <p className="font-elegant text-xl text-foreground/90 leading-relaxed mb-8 italic">
              They are meant to be printed, folded, framed, and remembered.
            </p>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Each creation is delivered as a beautifully styled PDF, designed to feel like a personal artifact — something worth holding in your hands.
            </p>

            <p className="font-display text-sm italic text-gold/70 leading-relaxed">
              "Just because something is not perfect, does not make it any less worthy of love."
              <span className="font-elegant not-italic text-xs text-muted-foreground ml-1">— Daphne Bridgerton</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepsakeSection;
