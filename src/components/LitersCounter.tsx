import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const counters = [
  { target: 2500000, label: "Liters Processed Monthly", suffix: "+" },
  { target: 150, label: "Partner Farms", suffix: "+" },
  { target: 98, label: "Customer Satisfaction", suffix: "%" },
  { target: 12, label: "Countries Served", suffix: "" },
];

function useCounter(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, target, duration]);
  return count;
}

function formatNumber(n: number) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(0) + "K";
  return n.toString();
}

const CounterCard = ({ target, label, suffix, inView, delay }: any) => {
  const count = useCounter(target, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <p className="text-4xl md:text-6xl font-serif font-bold text-foreground">
        {formatNumber(count)}{suffix}
      </p>
      <p className="text-sm text-muted-foreground font-sans mt-2 uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

const LitersCounter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        {counters.map((c, i) => (
          <CounterCard key={c.label} {...c} inView={inView} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
};

export default LitersCounter;
