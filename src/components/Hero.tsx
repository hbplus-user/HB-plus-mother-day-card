import { motion } from "framer-motion";
import { Particles } from "./Particles";
import { FloralOrnament } from "./FloralOrnament";
import hbLogo from "@/assets/hb-logo.png";

export const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-6 pt-48 md:pt-56 pb-4">
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
        {/* Card reveal animation — extra top margin equals lift distance so card never overlaps header */}
        <div className="relative mb-12 mt-[140px] md:mt-[200px] [perspective:2200px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.86, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[320px] md:w-[440px] h-[200px] md:h-[260px] rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/5 [transform-style:preserve-3d]"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-6 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <motion.div
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "top center" }}
              className="absolute left-1/2 inset-y-0 -translate-x-1/2 w-6 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
            />

            {/* Lid opening */}
            <motion.div
              initial={{ rotateX: 0, opacity: 1 }}
              animate={{ rotateX: -135, opacity: 0.85 }}
              transition={{ duration: 2, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
                background: "linear-gradient(180deg, #1a1a1a 0%, #111 60%, #0a0a0a 100%)",
                boxShadow: "0 12px 30px -10px hsl(0 0% 0% / 0.9), inset 0 1px 0 hsl(351 33% 70% / 0.15)",
              }}
              className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl border-b border-primary/20"
            >
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </motion.div>

            {/* Card pops out — premium metal card */}
            <motion.div
              initial={{ y: 0, opacity: 0, rotateX: -10, scale: 0.92 }}
              animate={{ y: -180, opacity: 1, rotateX: 0, scale: 1 }}
              transition={{ duration: 3, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-6 top-6 bottom-6 rounded-xl overflow-hidden [transform-style:preserve-3d] z-30 border border-white/10"
              style={{
                background:
                  "linear-gradient(135deg, #2a2a2a 0%, #141414 38%, #0a0a0a 70%, #1c1c1c 100%)",
                boxShadow:
                  "0 30px 60px -25px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.6)",
              }}
            >
              {/* brushed metal grain */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(115deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 3px)",
                }}
              />
              {/* radial sheen */}
              <div
                className="pointer-events-none absolute -inset-1/4"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 0%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(ellipse at 100% 100%, rgba(180,140,90,0.18), transparent 50%)",
                }}
              />

              {/* light sweep */}
              <motion.div
                initial={{ x: "-130%" }}
                animate={{ x: "130%" }}
                transition={{ duration: 2.4, delay: 4.2, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute inset-y-0 w-2/3 -skew-x-12"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0.04) 70%, transparent 100%)",
                  filter: "blur(2px)",
                }}
              />

              {/* top row: brand + status */}
              <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-10">
                <img
                  src={hbLogo}
                  alt="HB+"
                  className="h-5 md:h-6 w-auto object-contain opacity-90"
                  style={{ filter: "brightness(0) invert(1) drop-shadow(0 1px 0 rgba(0,0,0,0.5))" }}
                />
              </div>

              {/* center embossed text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <p className="font-serif leading-tight">
                  <motion.span
                    className="block text-[11px] md:text-xs tracking-[0.45em] uppercase font-light mb-2"
                    style={{ color: "rgba(243,224,191,0.55)" }}
                    initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 3.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    This Mother's Day
                  </motion.span>
                  <motion.span
                    className="block italic text-3xl md:text-5xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #fbeccb 0%, #d8ad75 45%, #8a5a32 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 1px 0 rgba(0,0,0,0.4)",
                    }}
                    initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.4, delay: 3.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Gift Her
                  </motion.span>
                  <motion.span
                    className="block md:text-xl font-light tracking-wide mt-1 text-2xl"
                    style={{ color: "rgba(243,224,191,0.85)" }}
                    initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.4, delay: 4.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Wellness
                  </motion.span>
                </p>
              </div>

            </motion.div>
          </motion.div>

          {/* Glow burst on open */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.9, 0.5], scale: [0.6, 1.2, 1] }}
            transition={{ duration: 2.4, delay: 1.8, ease: [0.22, 1, 0.36, 1], times: [0, 0.5, 1] }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-primary/40 blur-3xl pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2.4, delay: 3 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-primary/30 blur-3xl"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 4.4 }}
          className="text-base md:text-lg text-muted-foreground font-light tracking-wide mt-24 md:mt-32"
        >
          Because caring for herself<br />shouldn’t come last anymore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 4.8 }}
          className="mt-8 flex items-center gap-3 text-xs tracking-[0.4em] text-primary/70 uppercase font-light"
        >
          <span className="h-px w-8 bg-primary/40" />
          <span>A Gift Designed With Care</span>
          <span className="h-px w-8 bg-primary/40" />
        </motion.div>
      </div>
    </section>
  );
};
