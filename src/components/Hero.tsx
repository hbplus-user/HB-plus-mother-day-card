import { motion } from "framer-motion";
import { Particles } from "./Particles";
import { FloralOrnament } from "./FloralOrnament";
import { ArrowUpRight } from "lucide-react";
import heroWoman from "@/assets/hero-woman.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 pt-32 pb-24">
      {/* Ambient lights */}
      <div className="absolute top-1/3 -left-20 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-secondary/[0.06] blur-[160px] animate-pulse-glow" style={{ animationDelay: "2.5s" }} />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <Particles count={32} />

      {/* Parallax floral ornaments */}
      <motion.div
        className="absolute top-24 left-2 md:left-12 w-32 md:w-44 text-primary/20 hidden sm:block"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.6 }}
      >
        <FloralOrnament />
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-2 md:right-12 w-32 md:w-44 text-secondary/20 rotate-180 hidden sm:block"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.9 }}
      >
        <FloralOrnament />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-16 items-center">
        {/* Text + invitation */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-primary/70 font-light"
          >
            HB+ · Mother's Day Edition
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-8 tracking-tight"
          >
            <span className="block text-foreground/95">This Mother's Day,</span>
            <span className="block text-foreground/85">give her something</span>
            <span className="block italic text-rose-gold">that finally pours</span>
            <span className="block italic text-rose-gold">back into her.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.1 }}
            className="mt-10 max-w-lg text-base md:text-lg text-muted-foreground font-light leading-[1.8]"
          >
            A thoughtfully curated wellness experience designed to help her feel
            lighter, stronger, calmer, and cared for.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.4 }}
            className="mt-12 flex items-center gap-6"
          >
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxe inline-flex items-center gap-3 px-9 py-4 rounded-full font-serif text-lg tracking-wide"
            >
              <span>Gift Wellness</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <span className="hidden sm:inline-flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-muted-foreground/70 font-light">
              <span className="h-px w-8 bg-primary/40" />
              Opens on WhatsApp
            </span>
          </motion.div>
        </div>

        {/* Envelope + card reveal */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          <div className="relative [perspective:1800px] w-full max-w-md">
            {/* Glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 3, delay: 1.5 }}
              className="absolute -inset-12 bg-primary/20 blur-[100px] rounded-full"
            />

            {/* Portrait card */}
            <motion.div
              initial={{ opacity: 0, y: 80, rotateX: -18, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 2.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[28px] overflow-hidden [transform-style:preserve-3d]"
              style={{
                boxShadow:
                  "var(--shadow-elegant), 0 0 0 1px hsl(351 33% 70% / 0.18), inset 0 1px 0 hsl(351 33% 80% / 0.2)",
              }}
            >
              <div className="absolute inset-0 rounded-[28px] pointer-events-none z-10"
                   style={{ boxShadow: "inset 0 0 0 1px hsl(351 33% 65% / 0.25)" }} />
              <img
                src={heroWoman}
                alt="Serene portrait of a woman wrapped in cashmere"
                width={1024}
                height={1024}
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />

              {/* Header text */}
              <div className="absolute top-5 inset-x-5 flex items-center justify-between text-[10px] tracking-[0.4em] uppercase text-cream/80 font-light z-20">
                <span>HB+</span>
                <span>An Invitation</span>
              </div>

              {/* Footer text */}
              <div className="absolute bottom-6 inset-x-6 z-20">
                <div className="h-px w-10 bg-rose-gold/70 mb-4" />
                <p className="font-serif italic text-cream text-lg md:text-xl leading-snug">
                  For the woman who gave us everything.
                </p>
              </div>
            </motion.div>

            {/* Wax seal */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-6 md:-left-10 w-20 h-20 rounded-full flex items-center justify-center font-serif text-cream text-xl"
              style={{
                background: "var(--gradient-rose-gold)",
                boxShadow: "0 12px 40px -8px hsl(351 33% 30% / 0.7), inset 0 2px 0 hsl(351 33% 80% / 0.4)",
              }}
            >
              <span className="italic">H+</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
