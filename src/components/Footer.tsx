import { Instagram, Youtube, Linkedin } from "lucide-react";
import hbLogo from "@/assets/hb-logo.png";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/hbplus.in/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@hbplus", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/hbplus/", label: "LinkedIn" },
];

export const Footer = () => (
  <footer className="relative py-12 px-6 border-t border-white/5">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <img src={hbLogo} alt="HB+ logo" className="h-8 w-auto object-contain" />

      <div className="flex items-center gap-4">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`HB+ on ${label}`}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <Icon className="w-4 h-4" strokeWidth={1.5} />
          </a>
        ))}
      </div>

      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 font-light">
        Crafted with care for her
      </p>
    </div>
  </footer>
);
