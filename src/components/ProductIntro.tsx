import OrnamentDivider from "./OrnamentDivider";

const ProductIntro = () => {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <OrnamentDivider />
        <p className="font-elegant text-xl md:text-2xl leading-relaxed text-foreground/90">
          <span className="font-display font-semibold">The Regency Quill</span> transforms modern words into elegant correspondence inspired by the grace and restraint of the Regency era.
        </p>
        <p className="mt-8 font-body text-base text-muted-foreground leading-relaxed">
          This is not a chatbot. This is a curated writing and keepsake experience — where every word is chosen with care, and every letter is designed to be treasured.
        </p>
        <OrnamentDivider />
      </div>
    </section>
  );
};

export default ProductIntro;
