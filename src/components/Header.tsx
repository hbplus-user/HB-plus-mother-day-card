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
      <div 
        className="h-8 w-24 md:w-32 bg-gradient-to-b from-[#fbeccb] via-[#d8ad75] to-[#8a5a32]" 
        style={{ 
          WebkitMaskImage: `url(${hbLogo})`,
          maskImage: `url(${hbLogo})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center"
        }}
        aria-label="HB+ logo"
      />
    </div>
    <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
      {"\u200B"}
    </span>
  </motion.header>
);
