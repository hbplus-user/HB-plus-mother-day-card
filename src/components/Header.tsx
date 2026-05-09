import { motion } from "framer-motion";
import hbLogo from "@/assets/hb-plus-logo.png";

export const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md bg-background/30 border-b border-white/5"
  >
    <div className="flex items-center gap-2">
      <img 
        src={hbLogo} 
        alt="HB+ logo" 
        className="h-8 w-auto object-contain transition-all duration-300" 
        style={{ 
          filter: "brightness(0) saturate(100%) invert(89%) sepia(11%) saturate(368%) hue-rotate(355deg) brightness(92%) contrast(86%) drop-shadow(0 0 10px rgba(212, 209, 193, 0.2))" 
        }}
      />
    </div>
    <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
      {"\u200B"}
    </span>
  </motion.header>
);
