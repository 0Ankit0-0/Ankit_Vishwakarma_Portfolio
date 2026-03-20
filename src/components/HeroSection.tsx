import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-foreground tracking-wider text-glow-gold">
            Tarnished Dev
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-4 text-lg md:text-xl font-heading text-gold tracking-[0.3em] uppercase"
        >
          Software Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-8 text-xl md:text-2xl font-body italic text-muted-foreground max-w-lg mx-auto"
        >
          "Thou knowest nothing, yet knowest all."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="text-gold-dim hover:text-gold transition-colors font-heading text-sm tracking-[0.4em] uppercase animate-flicker"
          >
            ▼ Descend ▼
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
