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
            className="btn-luxe inline-flex items-center gap-3 mt-12 px-12 py-5 rounded-full font-serif text-xl tracking-wide"
          >
            <span className="text-sm whitespace-pre-line">Gift The Experience{"\n"}(You’re One Step Away From Her Wellness Journey)</span>
            <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
          </motion.a>

          <p className="mt-8 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60 font-light">
            You’re One Step Away From Her Wellness Journey
          </p>
        </motion.div>
      </div>
    </section>
  );
};
