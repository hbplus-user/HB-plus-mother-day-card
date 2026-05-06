import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FloralOrnament } from "./FloralOrnament";
import { Particles } from "./Particles";

export const CTA = () => {
  return (
    <section className="relative py-40 md:py-52 px-6 overflow-hidden">
      {/* Floating gradients */}
      <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/[0.07] blur-[140px] animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <Particles count={20} />

      <div className="absolute top-16 left-8 w-32 md:w-40 text-primary/15 hidden md:block animate-float">
        <FloralOrnament />
      </div>
      <div className="absolute bottom-16 right-8 w-32 md:w-40 text-secondary/15 rotate-180 hidden md:block animate-float" style={{ animationDelay: "2s" }}>
        <FloralOrnament />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[11px] tracking-[0.5em] uppercase text-primary/80 font-light">
            The Final Note
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mt-8 leading-[1.05]">
            <span className="block text-foreground/90">Not flowers that fade.</span>
            <span className="block text-foreground/80 mt-2">Not gifts she'll forget.</span>
            <span className="block italic text-rose-gold mt-6">Give her something</span>
            <span className="block italic text-rose-gold">she'll feel.</span>
          </h2>
          <p className="mt-12 text-muted-foreground font-light max-w-lg mx-auto leading-[1.9]">
            Because her wellbeing deserves to be celebrated too.
          </p>

          <motion.a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-luxe inline-flex items-center gap-3 mt-14 px-12 py-5 rounded-full font-serif text-xl tracking-wide"
          >
            <span>Gift Wellness</span>
            <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
          </motion.a>

          <p className="mt-10 text-[11px] tracking-[0.4em] uppercase text-muted-foreground/60 font-light">
            Continues on WhatsApp · Personal Concierge
          </p>
        </motion.div>
      </div>
    </section>
  );
};
