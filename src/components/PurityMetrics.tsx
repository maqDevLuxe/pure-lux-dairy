import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Zap, Heart, Sun } from "lucide-react";

const metrics = [
  { icon: Droplets, label: "Protein", value: "3.6g", unit: "per 100ml", bar: 72 },
  { icon: Zap, label: "Calcium", value: "125mg", unit: "per 100ml", bar: 85 },
  { icon: Heart, label: "Omega-3", value: "75mg", unit: "per 100ml", bar: 65 },
  { icon: Sun, label: "Vitamin D", value: "1.2μg", unit: "per 100ml", bar: 55 },
];

const PurityMetrics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nutrition" ref={ref} className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-sky-deep font-sans font-medium mb-4">
            Science of Purity
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Nutrition Metrics
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="bg-card rounded-2xl p-6 shadow-sm"
            >
              <m.icon className="w-8 h-8 text-sky-deep mb-4" />
              <p className="text-3xl font-serif font-bold text-foreground mb-1">{m.value}</p>
              <p className="text-sm text-muted-foreground font-sans mb-4">{m.unit}</p>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${m.bar}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.12 }}
                  className="h-full rounded-full bg-gradient-to-r from-sky-deep to-sky-brand"
                />
              </div>
              <p className="text-xs text-muted-foreground font-sans mt-2">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurityMetrics;
