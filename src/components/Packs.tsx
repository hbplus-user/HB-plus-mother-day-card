import { motion } from "framer-motion";
import cardStrength from "@/assets/card-strength.jpg";
import cardYoga from "@/assets/card-yoga.jpg";
import cardNutrition from "@/assets/card-nutrition.jpg";
import cardAssessment from "@/assets/card-assessment.jpg";

const cards = [
  {
    no: "01",
    title: "Strength Sessions",
    body: "Not about intensity. About helping her feel strong in her body again.",
    image: cardStrength,
  },
  {
    no: "02",
    title: "Yoga & Recovery",
    body: "Gentle movement and mindful recovery for slower, softer moments.",
    image: cardYoga,
  },
  {
    no: "03",
    title: "Nutrition Guidance",
    body: "Simple, sustainable guidance that supports everyday wellbeing.",
    image: cardNutrition,
  },
  {
    no: "04",
    title: "Health Assessment",
    body: "A personalised starting point towards feeling better, moving better, and living lighter.",
    image: cardAssessment,
  },
];

export const Packs = () => {
  return (
    <section className="relative py-32 md:py-44 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/[0.06] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="text-[11px] tracking-[0.5em] text-primary/80 uppercase font-light">
            Curated With Care
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mt-6 leading-[1.05] text-gradient">
            What Her Wellness
            <br />
            <span className="italic">Gift Includes</span>
          </h2>
          <div className="mt-10 mx-auto w-px h-16 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: (i % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`group glass glass-hover rounded-3xl overflow-hidden flex flex-col ${
                i % 2 === 1 ? "md:translate-y-12" : ""
              }`}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={896}
                  height={672}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <span className="absolute top-5 left-6 text-[10px] tracking-[0.4em] uppercase text-cream/70 font-light">
                  {c.no} · HB+
                </span>
              </div>

              <div className="px-8 md:px-10 py-10 md:py-12">
                <h3 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                  {c.title}
                </h3>
                <div className="my-6 w-10 h-px bg-rose-gold/60" />
                <p className="text-muted-foreground font-light leading-[1.9] text-[15px] md:text-base max-w-md">
                  {c.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="mt-24 text-center text-[11px] tracking-[0.35em] uppercase text-muted-foreground/60 font-light"
        >
          Offer inclusions may vary slightly based on membership type
        </motion.p>
      </div>
    </section>
  );
};
