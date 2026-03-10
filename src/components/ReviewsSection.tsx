import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Mother of Three",
    text: "PureDairy has completely changed how my family thinks about milk. The taste difference is remarkable, and I feel great knowing it's genuinely grass-fed.",
    stars: 5,
    avatar: "SM",
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Clinical Nutritionist",
    text: "I recommend PureDairy to all my clients. The nutritional profile of their grass-fed products is significantly superior to conventional dairy.",
    stars: 5,
    avatar: "ER",
  },
  {
    name: "Priya Kapoor",
    role: "Health-Conscious Mom",
    text: "The subscription is so convenient. Fresh, delicious dairy arrives at my door every week. My kids love the cheese, and I love the peace of mind.",
    stars: 5,
    avatar: "PK",
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-sky-deep font-sans font-medium mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Trusted by Families
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground font-sans leading-relaxed mb-6 italic">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-soft flex items-center justify-center text-sm font-sans font-semibold text-sky-deep">
                  {r.avatar}
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground font-sans">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
