import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";

interface StatBarProps {
  label: string;
  sublabel: string;
  value: number;
  delay: number;
}

const StatBar = ({ label, sublabel, value, delay }: StatBarProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="space-y-2 group"
  >
    <div className="flex justify-between items-baseline">
      <div>
        <span className="font-heading text-sm tracking-[0.2em] text-gold uppercase group-hover:text-glow-gold transition-all duration-300">
          {label}
        </span>
        <span className="ml-3 text-sm text-muted-foreground font-body">
          {sublabel}
        </span>
      </div>
      <span className="font-heading text-sm text-gold-dim">{value}</span>
    </div>
    <div className="h-[3px] bg-secondary rounded-full overflow-hidden relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
        className="h-full rounded-full relative"
        style={{
          background: `linear-gradient(90deg, hsl(var(--gold-dim)), hsl(var(--gold)), hsl(var(--gold-glow)))`,
        }}
      >
        {/* Shimmer effect on bar */}
        <div
          className="absolute inset-0 animate-shimmer opacity-40"
          style={{
            backgroundSize: "200% 100%",
            backgroundImage: `linear-gradient(90deg, transparent, hsl(var(--gold-glow) / 0.6), transparent)`,
          }}
        />
      </motion.div>
    </div>
  </motion.div>
);

const stats = [
  { label: "Strength", sublabel: "Backend Development", value: 60 },
  { label: "Intelligence", sublabel: "AI / Machine Learning", value: 55 },
  { label: "Dexterity", sublabel: "Frontend Development", value: 65 },
  { label: "Vigor", sublabel: "DevOps & Infrastructure", value: 45 },
  { label: "Mind", sublabel: "System Architecture", value: 50 },
  { label: "Faith", sublabel: "Open Source & Community", value: 40 },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4 section-glow noise-overlay">
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-xs tracking-[0.4em] text-gold-dim uppercase mb-3">— Character Sheet —</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground tracking-wider text-glow-gold">
            Attributes
          </h2>
          <OrnamentDivider className="mt-4" />
        </motion.div>

        {/* Level badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-gold-dim/30 rounded-sm bg-card/50">
            <span className="text-gold font-heading text-xs tracking-[0.3em] uppercase">Level</span>
            <span className="text-2xl font-heading text-gold text-glow-gold">1</span>
            <span className="text-muted-foreground text-xs font-body italic">— Freshly Tarnished</span>
          </div>
        </motion.div>

        <div className="space-y-6 p-6 md:p-8 border border-gold-dim/20 rounded bg-card/30 backdrop-blur-sm">
          {stats.map((stat, i) => (
            <StatBar
              key={stat.label}
              label={stat.label}
              sublabel={stat.sublabel}
              value={stat.value}
              delay={i * 0.1}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center text-lg font-body text-muted-foreground italic leading-relaxed max-w-md mx-auto border-l-2 border-r-2 border-gold-dim/20 px-6"
        >
          A wanderer of code, forging systems in the fires of logic and deploying them across the Lands Between.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
