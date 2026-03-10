import { motion } from "framer-motion";
import heroImg from "@/assets/hero-milk-splash.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-dark">
      <motion.img
        src={heroImg}
        alt="Premium milk splash"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.15, filter: "blur(20px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[hsl(215_25%_15%/0.3)]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] text-cream mb-6 font-sans font-medium"
        >
          Farm to Table Excellence
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream leading-[1.05] mb-8"
        >
          Pure. Natural.
          <br />
          <span className="italic font-medium">Extraordinary.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 font-sans font-light leading-relaxed"
        >
          Premium grass-fed dairy crafted with centuries of tradition and modern precision, delivered fresh to your doorstep.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#products"
            className="magnetic-btn px-8 py-4 rounded-full bg-cream text-foreground font-sans font-medium text-base"
          >
            Explore Products
          </a>
          <a
            href="#farm"
            className="magnetic-btn px-8 py-4 rounded-full border border-cream/30 text-cream font-sans font-medium text-base hover:bg-cream/10 transition-colors"
          >
            Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
