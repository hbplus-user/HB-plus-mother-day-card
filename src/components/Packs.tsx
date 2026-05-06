import { motion } from "framer-motion";
import { FloralOrnament } from "./FloralOrnament";

const packs = [
  {
    name: "HB+ Wellness Pack",
    tagline: "Curated for everyday balance",
    items: [
      "4 Strength Sessions (35 mins)",
      "2 Yoga Sessions",
      "1 Nutrition Assessment",
    ],
  },
  {
    name: "HB+ India Pack",
    tagline: "Rooted in mindful movement",
    items: [
      "4 Strength Sessions (35 mins)",
      "2 Yoga Sessions",
      "1 Nutrition Assessment",
    ],
    featured: true,
  },
  {
    name: "Hoppers Pack",
    tagline: "Personal, focused & elevated",
    items: [
      "4 Personal Strength Sessions (35 mins)",
      "1 Health Assessment",
    ],
  },
];

export const Packs = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.4em] text-primary uppercase font-light">
            Curated Wellness
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 text-gradient">
            Choose Her Experience
          </h2>
          <div className="mt-6 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative glass glass-hover rounded-2xl p-8 md:p-10 flex flex-col ${
                pack.featured ? "md:-translate-y-4" : ""
              }`}
            >
              {pack.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary/80 text-[10px] tracking-[0.3em] uppercase text-primary-foreground">
                  Signature
                </div>
              )}

              <div className="absolute top-6 right-6 w-12 h-12 text-primary/40 opacity-50 group-hover:opacity-90 transition-opacity duration-700">
                <FloralOrnament />
              </div>

              <p className="text-[10px] tracking-[0.4em] uppercase text-primary/70 font-light">
                {pack.tagline}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl mt-3 text-foreground">
                {pack.name}
              </h3>

              <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              <ul className="space-y-4 flex-1">
                {pack.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-light leading-relaxed">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-border/50">
                <p className="text-[11px] tracking-[0.3em] uppercase text-primary/60 text-center font-light">
                  A Gift of Wellbeing
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
