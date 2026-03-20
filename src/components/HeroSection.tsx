import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { fadeUp, fadeIn, smoothTransition, slowTransition } from "@/lib/animations";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, 40]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt=""
          className="w-full h-[120%] object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-6 md:px-8"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={slowTransition()}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium text-foreground tracking-wider text-glow-gold"
        >
          Tarnished Dev
        </motion.h1>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={slowTransition(0.4)}
          className="mt-4 text-sm md:text-base font-heading text-gold tracking-[0.25em] uppercase"
        >
          Software Developer
        </motion.p>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={slowTransition(0.9)}
          className="mt-8 text-lg md:text-xl font-body italic text-muted-foreground max-w-md mx-auto leading-relaxed"
        >
          "Thou knowest nothing, yet knowest all."
        </motion.p>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={slowTransition(1.5)}
          className="mt-16"
        >
          <a
            href="#about"
            className="text-muted-foreground hover:text-gold transition-colors duration-300 font-heading text-xs tracking-[0.3em] uppercase"
          >
            ↓
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
