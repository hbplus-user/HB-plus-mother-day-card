import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FloralOrnament } from "./FloralOrnament";

export const CTA = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px] animate-pulse-glow" />
      </div>

      <div className="absolute top-10 left-10 w-32 text-primary/15 hidden md:block">
        <FloralOrnament />
      </div>
      <div className="absolute bottom-10 right-10 w-32 text-secondary/15 rotate-180 hidden md:block">
        <FloralOrnament />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary/70 font-light">
            Begin the Gift
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mt-5 leading-tight">
            <span className="text-foreground/90">Because she gave you </span>
            <span className="italic text-rose-gold">everything</span>
            <span className="text-foreground/90">.</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
            Speak with our wellness concierge to curate the perfect gift, personally and with care.
          </p>

          <motion.a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-luxe inline-flex items-center gap-3 mt-12 px-12 py-5 rounded-full font-serif text-xl tracking-wide"
          >
            <span>Gift Wellness</span>
            <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
          </motion.a>

          <p className="mt-8 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60 font-light">
            Continues on WhatsApp · Personal Concierge
          </p>
        </motion.div>
      </div>
    </section>
  );
};
