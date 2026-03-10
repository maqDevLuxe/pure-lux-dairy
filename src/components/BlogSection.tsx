import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Science Behind Grass-Fed Nutrition",
    excerpt: "Discover why grass-fed dairy contains up to 500% more omega-3 fatty acids than conventional alternatives.",
    date: "Mar 5, 2026",
    category: "Nutrition",
    img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80",
  },
  {
    title: "Morning Rituals: Building a Healthier Routine",
    excerpt: "How incorporating premium dairy into your morning can transform your energy levels and wellbeing.",
    date: "Feb 28, 2026",
    category: "Lifestyle",
    img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&q=80",
  },
  {
    title: "Sustainable Farming for Future Generations",
    excerpt: "Our commitment to regenerative agriculture practices that heal the earth while feeding communities.",
    date: "Feb 20, 2026",
    category: "Sustainability",
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" ref={ref} className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-sky-deep font-sans font-medium mb-4">
              Journal
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Healthy Living
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-sans font-medium text-sky-deep hover:underline">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-muted">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-sans font-medium uppercase tracking-wider text-sky-deep">{post.category}</span>
                <span className="text-xs text-muted-foreground font-sans">{post.date}</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-sky-deep transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
