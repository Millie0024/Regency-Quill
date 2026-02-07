import { Pen, Sliders, Eye, Download } from "lucide-react";
import OrnamentDivider from "./OrnamentDivider";

const steps = [
  {
    icon: Pen,
    title: "Write your message",
    description: "Compose in your own modern words — freely and naturally.",
  },
  {
    icon: Sliders,
    title: "Choose the format & tone",
    description: "Select a love letter or society announcement, and set the mood.",
  },
  {
    icon: Eye,
    title: "Preview the transformation",
    description: "Watch your words take on the grace and elegance of the Regency era.",
  },
  {
    icon: Download,
    title: "Download your keepsake",
    description: "Receive a beautifully styled PDF, ready to print, fold, or frame.",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-6 py-16 md:py-24 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-foreground">
          How It Works
        </h2>
        <p className="text-center font-body text-muted-foreground mb-16 max-w-lg mx-auto">
          Four gentle steps from modern thought to timeless keepsake.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-background border border-border mb-5">
                <step.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <p className="font-elegant text-sm tracking-widest text-gold/70 uppercase mb-2">
                Step {index + 1}
              </p>
              <h3 className="font-display text-lg mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <OrnamentDivider className="mt-8" />
      </div>
    </section>
  );
};

export default HowItWorks;
