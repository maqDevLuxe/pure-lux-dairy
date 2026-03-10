import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import milkImg from "@/assets/product-milk.jpg";
import cheeseImg from "@/assets/product-cheese.jpg";
import butterImg from "@/assets/product-butter.jpg";

const products = [
  {
    name: "Whole Milk",
    desc: "Creamy, full-bodied grass-fed milk with a naturally sweet flavor.",
    price: "From $6.99",
    img: milkImg,
  },
  {
    name: "Artisan Cheese",
    desc: "Aged to perfection using traditional European methods.",
    price: "From $12.99",
    img: cheeseImg,
  },
  {
    name: "Golden Butter",
    desc: "Rich, golden butter churned from the finest cream.",
    price: "From $8.99",
    img: butterImg,
  },
];

const ProductRange = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" ref={ref} className="section-padding bg-slate-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-sky-brand font-sans font-medium mb-4">
            Our Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream">
            Product Range
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group glass-card rounded-3xl overflow-hidden hover:shadow-glow transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-cream mb-2">{p.name}</h3>
                <p className="text-sm text-cream/60 font-sans mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sky-brand font-sans font-semibold">{p.price}</span>
                  <button className="magnetic-btn px-5 py-2 rounded-full border border-cream/20 text-cream text-sm font-sans font-medium hover:bg-cream/10 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
