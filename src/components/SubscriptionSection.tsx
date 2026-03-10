import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essentials",
    price: "$29",
    period: "/month",
    desc: "Perfect for small households",
    features: ["2L Fresh Milk Weekly", "Seasonal Cheese Selection", "Free Delivery", "Pause Anytime"],
    featured: false,
  },
  {
    name: "Family",
    price: "$49",
    period: "/month",
    desc: "Most popular for families",
    features: ["5L Fresh Milk Weekly", "Cheese & Butter Bundle", "Priority Delivery", "Recipe Cards", "10% Member Discount"],
    featured: true,
  },
  {
    name: "Gourmet",
    price: "$79",
    period: "/month",
    desc: "The complete dairy experience",
    features: ["Unlimited Fresh Milk", "Full Product Range", "Same-Day Delivery", "Exclusive Tastings", "Personal Concierge"],
    featured: false,
  },
];

const SubscriptionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="subscribe" ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-sky-deep font-sans font-medium mb-4">
            Subscribe & Save
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Direct to Home
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`rounded-3xl p-8 ${
                plan.featured
                  ? "bg-slate-dark text-cream ring-2 ring-sky-brand/30 shadow-glow"
                  : "bg-card shadow-sm border border-border"
              }`}
            >
              {plan.featured && (
                <span className="inline-block px-3 py-1 text-xs font-sans font-medium uppercase tracking-wider bg-sky-brand/20 text-sky-brand rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-serif text-2xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm font-sans mb-6 ${plan.featured ? "text-cream/60" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-serif font-bold">{plan.price}</span>
                <span className={`text-sm font-sans ${plan.featured ? "text-cream/50" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-sans">
                    <Check className={`w-4 h-4 shrink-0 ${plan.featured ? "text-sky-brand" : "text-sky-deep"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`magnetic-btn w-full py-3 rounded-full font-sans font-medium text-sm transition-colors ${
                  plan.featured
                    ? "bg-cream text-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Start Subscription
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
