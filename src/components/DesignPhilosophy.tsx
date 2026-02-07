import { Type, Layers, Layout, AlignJustify } from "lucide-react";

const principles = [
  {
    icon: Type,
    title: "Thoughtful Typography",
    description: "Every font is chosen to evoke the beauty of handwritten correspondence and historical print.",
  },
  {
    icon: Layers,
    title: "Parchment Textures",
    description: "Surfaces and backgrounds that feel warm, aged, and deeply personal.",
  },
  {
    icon: Layout,
    title: "Vintage Layouts",
    description: "Compositions inspired by Regency-era letters, society papers, and editorial design.",
  },
  {
    icon: AlignJustify,
    title: "Editorial Spacing",
    description: "Generous whitespace that lets every word breathe and every detail be noticed.",
  },
];

const DesignPhilosophy = () => {
  return (
    <section className="px-6 py-16 md:py-24 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-4 text-foreground">
          Our Design Philosophy
        </h2>
        <p className="font-body text-muted-foreground mb-14 max-w-lg mx-auto">
          Every detail is crafted with intention, from the curl of a serif to the warmth of the paper.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="bg-background rounded-xl p-8 border border-border/60 text-left hover:shadow-sm transition-shadow duration-500"
            >
              <principle.icon className="w-6 h-6 text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg mb-2 text-foreground">
                {principle.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
