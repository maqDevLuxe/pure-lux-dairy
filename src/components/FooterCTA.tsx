import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const FooterCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const links = {
    Products: ["Whole Milk", "Artisan Cheese", "Golden Butter", "Cream"],
    Company: ["Our Story", "Farms", "Sustainability", "Careers"],
    Support: ["FAQ", "Delivery", "Returns", "Contact"],
  };

  return (
    <>
      {/* CTA */}
      <section ref={ref} className="section-padding bg-slate-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              Experience the
              <br />
              <span className="italic">Pure Difference</span>
            </h2>
            <p className="text-lg text-cream/60 font-sans mb-10 max-w-2xl mx-auto">
              Join thousands of families who've made the switch to premium grass-fed dairy. Your first delivery is on us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#subscribe"
                className="magnetic-btn inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cream text-foreground font-sans font-medium"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#products"
                className="magnetic-btn px-8 py-4 rounded-full border border-cream/20 text-cream font-sans font-medium hover:bg-cream/10 transition-colors"
              >
                Browse Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 md:px-12 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <a href="#" className="font-serif text-2xl font-bold text-primary-foreground">
                Pure<span className="text-sky-brand">Dairy</span>
              </a>
              <p className="text-sm text-primary-foreground/50 font-sans mt-4 leading-relaxed">
                Premium grass-fed dairy, ethically sourced and delivered fresh to your home.
              </p>
            </div>
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-primary-foreground/70 mb-4">
                  {title}
                </h4>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm font-sans text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/30 font-sans">
              © 2026 PureDairy. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <a key={link} href="#" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 font-sans transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
