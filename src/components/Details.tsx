import { motion } from "framer-motion";
import { CalendarDays, CalendarCheck } from "lucide-react";

const details = [
  {
    icon: CalendarDays,
    text: "Must be activated within\n2 weeks of purchase",
  },
  {
    icon: CalendarCheck,
    text: "Valid for 21 days from\nthe date of redemption",
  },
];

export const Details = () => {
  return (
    <section className="relative pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass rounded-2xl px-8 py-6 md:py-7 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/50"
        >
          {details.map((d) => (
            <div key={d.text} className="flex items-center gap-5 px-2 py-4 md:py-2 md:px-8 justify-center md:justify-start">
              <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 border border-primary/30 text-primary">
                <d.icon className="w-5 h-5" strokeWidth={1.2} />
              </div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed whitespace-pre-line">
                {d.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
