import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Leaf, CheckCircle } from "lucide-react";

const certs = [
  { icon: Shield, title: "USDA Organic", desc: "Certified organic farming practices" },
  { icon: Award, title: "Grade A Premium", desc: "Highest quality dairy standards" },
  { icon: Leaf, title: "100% Grass-Fed", desc: "Pasture-raised year round" },
  { icon: CheckCircle, title: "Non-GMO Verified", desc: "Project verified certification" },
];

const FarmCertifications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="farm" ref={ref} className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-sky-deep font-sans font-medium mb-4">
            Trust & Transparency
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Farm Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-sky-soft flex items-center justify-center mx-auto mb-5">
                <cert.icon className="w-7 h-7 text-sky-deep" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground font-sans">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmCertifications;
