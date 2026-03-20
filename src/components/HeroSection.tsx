import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium text-foreground tracking-wider text-glow-gold"
        >
          Tarnished Dev
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-sm md:text-base font-heading text-gold tracking-[0.25em] uppercase"
        >
          Software Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-8 text-lg md:text-xl font-body italic text-muted-foreground max-w-md mx-auto leading-relaxed"
        >
          "Thou knowest nothing, yet knowest all."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="text-muted-foreground hover:text-gold transition-colors duration-300 font-heading text-xs tracking-[0.3em] uppercase"
          >
            ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
