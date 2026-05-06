import { motion } from "framer-motion";
import { Gift, Heart } from "lucide-react";

export const CTA = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/15 blur-[120px] rounded-full animate-pulse-glow pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center flex flex-col items-center">
        <motion.a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="btn-luxe inline-flex items-center justify-center gap-3 px-12 md:px-16 py-5 rounded-full font-serif text-2xl tracking-[0.3em] uppercase w-full max-w-md"
        >
          <Gift className="w-5 h-5" strokeWidth={1.5} />
          <span>Gift Wellness</span>
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 font-serif italic text-muted-foreground text-base"
        >
          Celebrate her. Support her. Strengthen her.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6"
        >
          <Heart className="w-4 h-4 text-rose-gold-solid fill-rose-gold-solid/40" strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
};
