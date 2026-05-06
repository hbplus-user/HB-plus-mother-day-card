import { motion } from "framer-motion";
import { Dumbbell, Flower2, Salad, HeartPulse } from "lucide-react";

const packs = [
  {
    name: "HB+ Wellness Experience",
    items: [
      { icon: Dumbbell, label: "4 Strength Sessions (35 mins)" },
      { icon: Flower2, label: "2 Yoga Sessions" },
      { icon: Salad, label: "1 Nutrition Assessment" },
    ],
  },
  {
    name: "HB+ India Experience",
    items: [
      { icon: Dumbbell, label: "4 Strength Sessions (35 mins)" },
      { icon: Flower2, label: "2 Yoga Sessions" },
      { icon: Salad, label: "1 Nutrition Assessment" },
    ],
  },
  {
    name: "Hoppers Experience",
    items: [
      { icon: Dumbbell, label: "4 Personal Strength Sessions (35 mins)" },
      { icon: HeartPulse, label: "1 Health Assessment" },
    ],
  },
];

const Lotus = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c0-3 2-5 5-6-2-1-4-1-5 0-1-1-3-1-5 0 3 1 5 3 5 6Z" />
    <path d="M12 15c0-3-2-6-5-7 0 4 2 7 5 7Z" />
    <path d="M12 15c0-3 2-6 5-7 0 4-2 7-5 7Z" />
    <path d="M12 15V8" />
    <path d="M12 8c-1.5-1.5-1.5-4 0-6 1.5 2 1.5 4.5 0 6Z" />
  </svg>
);

const Ornament = () => (
  <div className="flex items-center justify-center gap-2 my-1">
    <span className="h-px w-8 bg-primary/30" />
    <span className="w-1 h-1 rounded-full bg-rose-gold-solid/70" />
    <span className="h-px w-8 bg-primary/30" />
  </div>
);

export const Packs = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-10 md:mb-14"
        >
          <Ornament />
          <h2 className="text-xs md:text-sm tracking-[0.5em] text-cream uppercase font-light mt-4">
            Wellness Combo Pack
          </h2>
          <p className="mt-6 max-w-xl mx-auto font-serif italic text-muted-foreground text-base md:text-lg leading-relaxed">
            Thoughtfully crafted sessions and expert guidance
            <br className="hidden md:block" />
            to help her move better, feel better, live better.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          {/* Lotus header */}
          <div className="flex flex-col items-center text-center mb-2">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/10 border border-primary/30 text-primary mb-4">
              <Lotus />
            </div>
          </div>

          <div className="divide-y divide-border/40">
            {packs.map((pack, i) => (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
                className="py-7 first:pt-2"
              >
                <div className="text-center mb-5">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-light">HB+</p>
                  <h3 className="mt-1 text-[13px] md:text-sm tracking-[0.4em] uppercase text-cream font-light">
                    <span className="text-primary">{pack.name.replace("HB+ ", "")}</span>
                  </h3>
                  <Ornament />
                </div>

                <ul className="space-y-3 max-w-sm mx-auto">
                  {pack.items.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-3">
                      <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-primary/5 border border-primary/20 text-primary/80">
                        <Icon className="w-4 h-4" strokeWidth={1.2} />
                      </div>
                      <span className="text-sm text-muted-foreground font-light leading-snug">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center font-serif italic text-xs md:text-sm text-muted-foreground/80">
            Offer inclusions may vary slightly based on membership type.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
