import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GrassFedDifference = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "500%", label: "More Omega-3s" },
    { value: "200%", label: "More CLA" },
    { value: "100%", label: "Pasture Time" },
  ];

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-sky-deep font-sans font-medium mb-4">
            Why It Matters
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
            The Grass-Fed
            <br />
            <span className="italic">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
            Our cows roam freely on lush, pesticide-free pastures year-round. This natural lifestyle produces milk that's richer in nutrients, creamier in taste, and better for the planet.
          </p>
          <div className="flex gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              >
                <p className="text-3xl md:text-4xl font-serif font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80"
              alt="Cows grazing on green pasture"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-sky-soft/50 -z-10" />
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-cream -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default GrassFedDifference;
