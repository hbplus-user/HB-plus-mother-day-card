import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import storyImg from "@/assets/story-mother.jpg";

export const Story = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.1, 1.15]);

  return (
    <section ref={ref} className="relative h-[100vh] md:h-[110vh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <img
          src={storyImg}
          alt="A mother and daughter sharing tea at sunset"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex items-center px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-primary/80 font-light">
            A Quiet Thought
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mt-8 leading-[1.1] text-cream">
            She spent years
            <br />
            taking care of
            <br />
            <span className="italic text-rose-gold">everyone else.</span>
          </h2>
          <p className="font-serif text-2xl md:text-3xl mt-10 text-foreground/80 italic leading-snug">
            Maybe this year,
            <br />
            we take care of her.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
