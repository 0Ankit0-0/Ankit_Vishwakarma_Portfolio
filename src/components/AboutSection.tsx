import { motion } from "framer-motion";

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
    className="space-y-2"
  >
    <div className="flex justify-between items-baseline">
      <div>
        <span className="font-heading text-sm tracking-[0.2em] text-gold uppercase">
          {label}
        </span>
        <span className="ml-3 text-sm text-muted-foreground font-body">
          {sublabel}
        </span>
      </div>
      <span className="font-heading text-sm text-gold-dim">{value}</span>
    </div>
    <div className="h-[2px] bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-gold-dim to-gold"
      />
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
    <section id="about" className="py-24 md:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground tracking-wider">
            Attributes
          </h2>
          <div className="mt-3 w-16 h-[1px] bg-gold mx-auto opacity-50" />
        </motion.div>

        <div className="space-y-6">
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
          className="mt-16 text-center text-lg font-body text-muted-foreground italic leading-relaxed max-w-md mx-auto"
        >
          A wanderer of code, forging systems in the fires of logic and deploying them across the Lands Between.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
