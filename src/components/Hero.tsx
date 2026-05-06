import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroWoman from "@/assets/hero-woman.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 pt-28 pb-12">
      {/* Soft ambient warmth */}
      <div className="absolute -top-40 -left-20 w-[700px] h-[700px] rounded-full bg-cream/[0.08] blur-[140px]" />
      <div className="absolute -bottom-40 -right-20 w-[700px] h-[700px] rounded-full bg-secondary/20 blur-[160px]" />

      {/* Subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Copy */}
        <div className="lg:col-span-6 flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-cream/80 font-light"
          >
            HB+ · Mother's Day Edition
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-8 tracking-tight text-cream"
          >
            <span className="block">This Mother's Day,</span>
            <span className="block">give her something</span>
            <span className="block italic opacity-90">that finally pours</span>
            <span className="block italic opacity-90">back into her.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.1 }}
            className="mt-10 max-w-lg text-base md:text-lg text-cream/80 font-light leading-[1.8]"
          >
            A thoughtfully curated wellness experience designed to help her feel
            lighter, stronger, calmer, and cared for.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.4 }}
            className="mt-12 flex items-center gap-6 flex-wrap"
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
            <span className="hidden sm:inline-flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-cream/70 font-light">
              <span className="h-px w-8 bg-cream/40" />
              Opens on WhatsApp
            </span>
          </motion.div>
        </div>

        {/* Hero portrait — Calmio style, full-bleed against warm tan */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative flex items-end justify-center lg:justify-end"
        >
          <img
            src={heroWoman}
            alt="A calm wellness portrait — a woman holding a rolled mat"
            width={1024}
            height={1024}
            className="relative w-full max-w-[560px] h-auto select-none pointer-events-none"
            style={{
              maskImage:
                "radial-gradient(ellipse at center, #000 60%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, #000 60%, transparent 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
