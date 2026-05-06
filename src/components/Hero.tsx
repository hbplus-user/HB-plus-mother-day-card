import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FloralOrnament } from "./FloralOrnament";
import { Particles } from "./Particles";
import flowersBg from "@/assets/flowers-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 pb-24">
      {/* Floral framing background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${flowersBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/40 to-background"
           style={{ background: "radial-gradient(ellipse at center, transparent 0%, hsl(0 0% 6% / 0.5) 50%, hsl(0 0% 6%) 90%)" }} />

      {/* Ambient glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] rounded-full bg-primary/15 blur-[120px] animate-pulse-glow" />

      <Particles count={20} />

      {/* Side floral ornaments */}
      <motion.div
        className="absolute top-1/3 left-4 md:left-16 w-20 md:w-28 text-primary/30 hidden sm:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <FloralOrnament />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-4 md:right-16 w-20 md:w-28 text-secondary/30 rotate-180 hidden sm:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 1.8 }}
      >
        <FloralOrnament />
      </motion.div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Side captions */}
        <div className="hidden lg:grid grid-cols-3 gap-12 w-full items-center">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 1.4 }}
            className="text-right text-sm text-muted-foreground font-light leading-relaxed font-serif"
          >
            For the woman
            <br />
            who does it all,
            <br />
            <span className="italic text-rose-gold">this one's for you.</span>
          </motion.p>

          {/* Centered invitation card */}
          <InvitationCard />

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 1.6 }}
            className="text-left text-sm text-muted-foreground font-light leading-relaxed font-serif"
          >
            Open the gift
            <br />
            <span className="italic text-rose-gold">of strength,</span>
            <br />
            <span className="italic text-rose-gold">care and wellness.</span>
          </motion.p>
        </div>

        {/* Mobile: just the card */}
        <div className="lg:hidden w-full flex justify-center">
          <InvitationCard />
        </div>
      </div>
    </section>
  );
};

const InvitationCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.92, rotateX: -12 }}
    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
    transition={{ duration: 2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="relative w-full max-w-sm aspect-[3/4.4] rounded-[28px] flex flex-col items-center justify-between px-8 py-10 text-center [transform-style:preserve-3d]"
    style={{
      background:
        "linear-gradient(180deg, hsl(35 35% 95%) 0%, hsl(35 30% 90%) 100%)",
      boxShadow:
        "0 40px 80px -20px hsl(0 0% 0% / 0.7), 0 0 0 1px hsl(351 33% 70% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.5)",
    }}
  >
    {/* Top heart */}
    <div className="flex flex-col items-center">
      <Heart className="w-5 h-5 text-rose-gold-solid fill-rose-gold-solid/40" strokeWidth={1.5} />
      <p className="mt-6 font-serif text-sm tracking-wide text-foreground/60 italic">
        This Mother's Day,
      </p>
    </div>

    {/* Headline */}
    <div className="font-serif text-foreground/90 leading-[0.95]">
      <p className="text-5xl md:text-[3.5rem] tracking-tight">Gift Her</p>
      <p
        className="text-4xl md:text-5xl italic mt-2"
        style={{
          background: "linear-gradient(135deg, hsl(351 40% 60%), hsl(351 33% 50%))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 500,
        }}
      >
        the Best
      </p>
      <p className="text-5xl md:text-[3.5rem] tracking-tight mt-1">You Can.</p>
    </div>

    {/* Divider + subline */}
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center gap-2 w-full justify-center">
        <span className="h-px w-16 bg-foreground/20" />
        <span className="w-1 h-1 rounded-full bg-rose-gold-solid" />
        <span className="h-px w-16 bg-foreground/20" />
      </div>
      <p className="mt-4 font-serif italic text-foreground/70 text-base">
        A wellness experience
        <br />
        made just for her.
      </p>
      <p className="mt-6 font-serif text-sm tracking-[0.3em] text-foreground/50">
        HB+
      </p>
    </div>

    {/* Subtle paper texture */}
    <div
      className="pointer-events-none absolute inset-0 rounded-[28px] opacity-[0.08] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
      }}
    />
  </motion.div>
);
