import { motion } from "framer-motion";
import { Particles } from "./Particles";
import { FloralOrnament } from "./FloralOrnament";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 pb-24">
      {/* Ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[140px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <Particles count={28} />

      {/* Parallax floral ornaments */}
      <motion.div
        className="absolute top-10 left-4 md:left-16 w-40 md:w-56 text-primary/30"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.4 }}
      >
        <FloralOrnament />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-4 md:right-16 w-40 md:w-56 text-secondary/30 rotate-180"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.6 }}
      >
        <FloralOrnament />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Card reveal animation */}
        <div className="relative mb-12 [perspective:1500px]">
          {/* Box base */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[320px] md:w-[440px] h-[200px] md:h-[260px] rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/5"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {/* Box ribbon */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-6 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute left-1/2 inset-y-0 -translate-x-1/2 w-6 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

            {/* Card pops out */}
            <motion.div
              initial={{ y: 40, opacity: 0, rotateX: -25 }}
              animate={{ y: -120, opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-6 top-6 bottom-6 rounded-xl glass flex flex-col items-center justify-center px-6 [transform-style:preserve-3d]"
              style={{
                background: "linear-gradient(145deg, hsl(0 0% 12% / 0.95), hsl(351 20% 14% / 0.95))",
                boxShadow: "var(--shadow-elegant), inset 0 1px 0 hsl(351 33% 70% / 0.15)",
              }}
            >
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] tracking-[0.3em] text-primary/70 uppercase font-light">
                <span>HB+</span>
                <span>Mother's Day</span>
              </div>
              <p className="font-serif text-2xl md:text-4xl leading-tight text-cream-foreground">
                <span className="block text-foreground/90">This Mother's Day,</span>
                <span className="block italic text-rose-gold">Gift Her</span>
                <span className="block text-foreground/90">the Best You Can.</span>
              </p>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>
          </motion.div>

          {/* Glow under card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-primary/30 blur-3xl"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="text-base md:text-lg text-muted-foreground font-light tracking-wide mt-24 md:mt-32"
        >
          A wellness experience made just for her.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="mt-8 flex items-center gap-3 text-xs tracking-[0.4em] text-primary/70 uppercase font-light"
        >
          <span className="h-px w-8 bg-primary/40" />
          <span>Scroll to explore</span>
          <span className="h-px w-8 bg-primary/40" />
        </motion.div>
      </div>
    </section>
  );
};
