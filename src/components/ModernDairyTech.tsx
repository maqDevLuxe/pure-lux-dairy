import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, ThermometerSun, ScanLine } from "lucide-react";

const techs = [
  {
    icon: Cpu,
    title: "AI-Powered Quality Control",
    desc: "Machine learning algorithms monitor every batch for consistency, purity, and freshness in real-time.",
  },
  {
    icon: ThermometerSun,
    title: "Cold-Chain Precision",
    desc: "IoT sensors maintain the perfect 2-4°C temperature from farm to fridge, ensuring peak freshness.",
  },
  {
    icon: ScanLine,
    title: "Blockchain Traceability",
    desc: "Scan any product to trace its journey from the exact cow to your kitchen table.",
  },
];

const ModernDairyTech = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-sky-deep font-sans font-medium mb-4">
              Innovation
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Modern Dairy
              <br />
              <span className="italic">Technology</span>
            </h2>
          </motion.div>

          <div className="space-y-8 mt-8">
            {techs.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-soft flex items-center justify-center shrink-0">
                  <t.icon className="w-6 h-6 text-sky-deep" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
              alt="Modern dairy facility"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernDairyTech;
