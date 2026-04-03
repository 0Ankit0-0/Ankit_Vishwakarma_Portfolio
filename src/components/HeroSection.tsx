import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import EmberParticles from "@/components/EmberParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with enhanced layering */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        {/* Side vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        {/* Vignette */}
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Ambient gold radial glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,hsl(43_55%_53%/0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Floating embers */}
      <EmberParticles />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Decorative top ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8"
        >
          <div className="w-8 sm:w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-gold/50 font-heading text-xs sm:text-sm tracking-[0.4em] sm:tracking-[0.5em]">✦</span>
          <div className="w-8 sm:w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-gold/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-semibold text-foreground tracking-wider text-glow-gold-strong leading-tight">
            Ankit
            <br />
            <span className="text-gold/90">Vishwakarma</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 flex items-center justify-center gap-2 sm:gap-3"
        >
          <div className="w-6 sm:w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold/50" />
          <div className="w-6 sm:w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg font-heading text-gold/80 tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase"
        >
          AI Systems Developer · Full-Stack Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="mt-8 sm:mt-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-body italic text-muted-foreground max-w-lg mx-auto leading-relaxed px-2"
        >
          "Thou knowest nothing, yet knowest all."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-10 sm:mt-14 flex flex-col gap-4 sm:gap-6 md:gap-8 items-center"
        >
          <a
            href="/AnkitVishwakarma_Resume.docx"
            download
            className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-2.5 sm:py-3.5 border border-gold/40 bg-background/40 backdrop-blur-sm font-heading text-xs sm:text-sm tracking-[0.1em] sm:tracking-[0.2em] uppercase text-gold hover:border-gold/80 transition-all duration-500 rounded-sm overflow-hidden w-full sm:w-auto justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-lg">📜</span>
            <span className="relative">Acquire Résumé</span>
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
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
