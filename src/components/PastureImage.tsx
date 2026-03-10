import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import pastureImg from "@/assets/pasture-landscape.jpg";

const PastureImage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.img
        src={pastureImg}
        alt="Serene pasture landscape"
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ y }}
        initial={{ filter: "blur(15px)" }}
        animate={inView ? { filter: "blur(0px)" } : {}}
        transition={{ duration: 1.5 }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-cream text-3xl md:text-5xl font-serif font-bold text-center drop-shadow-lg px-6"
        >
          Where Nature Meets Nurture
        </motion.p>
      </div>
    </section>
  );
};

export default PastureImage;
