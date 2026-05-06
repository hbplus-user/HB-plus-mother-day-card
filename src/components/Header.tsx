import { motion } from "framer-motion";

export const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md bg-background/30 border-b border-white/5"
  >
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary/70 flex items-center justify-center">
        <span className="font-serif text-sm text-primary-foreground">H</span>
      </div>
      <span className="font-serif text-lg tracking-wide">
        HB<span className="text-rose-gold">+</span>
      </span>
    </div>
    <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
      Mother's Day · 2026
    </span>
  </motion.header>
);
