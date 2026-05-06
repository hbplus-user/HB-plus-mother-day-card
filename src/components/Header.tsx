import { motion } from "framer-motion";

export const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="absolute top-0 inset-x-0 z-50 px-6 md:px-12 py-8 flex items-start justify-between"
  >
    <div className="flex flex-col">
      <span className="font-serif text-2xl tracking-wide text-cream">
        HB<span className="text-rose-gold">+</span>
      </span>
      <span className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground/70 font-light mt-1">
        Hustle BL+
      </span>
    </div>
    <span className="font-serif italic text-sm text-cream/80">
      Stronger. Healthier. Happier.
    </span>
  </motion.header>
);
