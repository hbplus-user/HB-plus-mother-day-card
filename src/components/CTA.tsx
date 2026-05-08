import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FloralOrnament } from "./FloralOrnament";

export const CTA = () => {
  return (
    <section className="relative pt-8 pb-32 px-6 overflow-hidden">
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
          <h2 className="font-serif leading-snug">
            <span className="block text-foreground/90 font-extralight text-2xl md:text-3xl max-w-xl mx-auto">
              Because the women who care for everyone else deserve care first.
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground font-light tracking-wide italic">
            More than a gift. A Lifestyle.
          </p>

          <motion.a
            href="https://pages.razorpay.com/pl_SmsT4cx1TF0I0k/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-luxe inline-flex flex-col items-center gap-1 mt-12 px-10 py-5 rounded-full font-serif tracking-wide"
          >
            <span className="inline-flex items-center gap-3 text-base md:text-lg tracking-[0.2em] uppercase">
              Gift The Experience
              <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase opacity-70 font-sans">
              One step closer to her wellness
            </span>
          </motion.a>

          <p className="mt-6 text-muted-foreground/70 font-light italic text-sm">
            A small gift that can make her feel seen, again.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
