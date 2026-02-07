const RegencyFooter = () => {
  return (
    <footer className="px-6 py-12 bg-card/70 border-t border-border/40">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-lg text-foreground mb-3">
          The Regency Quill
        </p>
        <p className="font-elegant text-base text-muted-foreground italic mb-4">
          Made for words that deserve to last.
        </p>
        <p className="font-display text-xs italic text-gold/50 max-w-md mx-auto leading-relaxed">
          "Why must our only options be to squawk and settle or to never leave the nest? What if I want to fly?"
          <span className="font-elegant not-italic ml-1">— Eloise Bridgerton</span>
        </p>
      </div>
    </footer>
  );
};

export default RegencyFooter;
