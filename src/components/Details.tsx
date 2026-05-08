import { motion } from "framer-motion";
import { Clock, CalendarCheck } from "lucide-react";

const details = [
  {
    icon: Clock,
    title: "​",
    text: "This Mother’s Day, give her a reason to slow down and care for herself too.",
  },
];

export const Details = () => {
  return (
    <section className="relative pt-4 pb-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-primary/70 text-center mb-10 font-light"
        >
          ​Designed With Care
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-5">
          {details.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="glow-card glass-hover p-6 flex flex-col items-center text-center gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 border border-primary/30 text-primary">
                <d.icon className="w-5 h-5" strokeWidth={1.2} />
              </div>
              <div className="space-y-1.5">
                <p className="font-serif text-foreground text-sm font-thin tracking-wide min-h-[1.25rem]">{d.title}</p>
                <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs mx-auto">{d.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
