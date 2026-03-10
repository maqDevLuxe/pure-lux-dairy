import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, TreePine, Recycle } from "lucide-react";

const practices = [
  {
    icon: Heart,
    title: "Animal Welfare First",
    desc: "Our cows live stress-free lives with access to open pastures, fresh water, and comfortable shelters. We exceed all humane treatment standards.",
  },
  {
    icon: TreePine,
    title: "Carbon Neutral by 2027",
    desc: "Through rotational grazing, solar-powered facilities, and carbon offset programs, we're committed to a net-zero carbon footprint.",
  },
  {
    icon: Recycle,
    title: "Zero-Waste Processing",
    desc: "Every byproduct is repurposed. Whey becomes protein supplements, and organic waste returns to nourish our pastures.",
  },
];

const EthicalFarming = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-sky-deep font-sans font-medium mb-4">
            Our Promise
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Ethical Farming
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {practices.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group"
            >
              <div className="w-16 h-16 rounded-2xl bg-sky-soft flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-500">
                <p.icon className="w-8 h-8 text-sky-deep" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthicalFarming;
