import { motion } from "framer-motion";
import { Dumbbell, Flower2, Soup, Calendar, Gift, Flower } from "lucide-react";
import { FloralOrnament } from "./FloralOrnament";

const inclusions = [
  { icon: Dumbbell, label: "4 Strength Sessions (35 mins)" },
  { icon: Flower2, label: "2 Yoga Sessions" },
  { icon: Soup, label: "1 Nutrition Assessment" },
];

export const Packs = () => {
  return (
    <section className="relative pt-32 pb-12 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <div className="mx-auto mb-5 w-8 text-primary/60">
            <FloralOrnament />
          </div>
          <span className="font-serif text-xs md:text-sm tracking-[0.5em] text-foreground/90 uppercase">
            Wellness Pack
          </span>
          <p className="mt-5 text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-md mx-auto">
            Thoughtfully crafted sessions and expert guidance&nbsp;to help her move better, feel better, live better.
          </p>
        </motion.div>

        {/* Single Combined Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glow-card relative p-8 md:p-14 overflow-hidden"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {/* Floral ornaments in corners */}
          <div className="pointer-events-none absolute -top-8 -right-8 w-48 text-primary/30 rotate-12">
            <FloralOrnament />
          </div>
          <div className="pointer-events-none absolute -bottom-10 -left-10 w-52 text-secondary/25 -rotate-12">
            <FloralOrnament />
          </div>

          {/* Header */}
          <div className="relative text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center backdrop-blur">
              <Flower className="w-6 h-6 text-primary" strokeWidth={1.3} />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl mt-5 text-gradient">{"\u200B"}</h3>
            <p className="mt-1 text-[11px] md:text-xs tracking-[0.5em] uppercase text-primary/80 font-light">
              Wellness Experience
            </p>
            <div className="mt-6 mx-auto flex items-center justify-center gap-3 text-primary/50">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="text-xs">✦</span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>

          {/* Inclusions */}
          <ul className="relative mt-10 space-y-5 max-w-md mx-auto">
            {inclusions.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 px-5 py-3 rounded-xl border border-border/40 bg-background/30 backdrop-blur-sm"
              >
                <span className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" strokeWidth={1.4} />
                </span>
                <span className="text-sm md:text-base text-foreground/90 font-light tracking-wide">
                  {item.label}
                </span>
              </motion.li>
            ))}
          </ul>

          <p className="relative mt-8 text-center italic text-xs md:text-sm text-muted-foreground/80 font-light">
            Offer inclusions may vary slightly
            <br />
            based on membership type.
          </p>
        </motion.div>

        {/* Validity row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {[
            "Must be activated within 2 weeks of purchase",
            "Valid for 21 days from the date of redemption",
          ].map((line) => (
            <div
              key={line}
              className="glow-card px-5 py-4 flex items-center gap-3"
            >
              <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4 text-primary" strokeWidth={1.4} />
              </span>
              <p className="text-xs md:text-sm text-muted-foreground font-light leading-snug">
                {line}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <motion.a
            href="https://wa.me/917605964666"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-luxe inline-flex items-center gap-3 px-10 py-4 rounded-full font-serif text-lg tracking-[0.2em] uppercase"
          >
            <Gift className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-sm">Start Her Journey</span>
          </motion.a>
          <p className="mt-5 text-xs tracking-[0.3em] uppercase text-muted-foreground/70 font-light">
            Celebrate her. Support her. Strengthen her.
          </p>
        </div>
      </div>
    </section>
  );
};
