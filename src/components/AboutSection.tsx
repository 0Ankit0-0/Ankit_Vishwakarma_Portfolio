import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer, barFill, smoothTransition, barTransition } from "@/lib/animations";

interface StatBarProps {
  label: string;
  sublabel: string;
  value: number;
}

const StatBar = ({ label, sublabel, value }: StatBarProps) => (
  <motion.div variants={fadeUp} className="py-3">
    <div className="flex justify-between items-baseline mb-2">
      <div className="flex items-baseline gap-3">
        <span className="font-heading text-xs tracking-[0.15em] text-foreground uppercase">
          {label}
        </span>
        <span className="text-sm text-muted-foreground font-body">
          {sublabel}
        </span>
      </div>
      <span className="font-heading text-xs text-muted-foreground tabular-nums">{value}</span>
    </div>
    <div className="h-[1px] bg-secondary overflow-hidden">
      <motion.div
        variants={barFill(value)}
        transition={barTransition(0.15)}
        className="h-full bg-gold-dim"
      />
    </div>
  </motion.div>
);

const stats = [
  { label: "Strength", sublabel: "Backend Development", value: 85 },
  { label: "Intelligence", sublabel: "AI / Machine Learning", value: 78 },
  { label: "Dexterity", sublabel: "Frontend Development", value: 90 },
  { label: "Vigor", sublabel: "DevOps & Infrastructure", value: 72 },
  { label: "Mind", sublabel: "System Architecture", value: 80 },
  { label: "Faith", sublabel: "Open Source & Community", value: 68 },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={smoothTransition()}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-heading text-foreground tracking-wider">
            Attributes
          </h2>
          <div className="mt-4 w-8 h-[1px] bg-gold-dim" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="divide-y divide-border/30"
        >
          {stats.map((stat) => (
            <StatBar
              key={stat.label}
              label={stat.label}
              sublabel={stat.sublabel}
              value={stat.value}
            />
          ))}
        </motion.div>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={smoothTransition(0.2)}
          className="mt-16 text-base font-body text-muted-foreground italic leading-relaxed"
        >
          A wanderer of code, forging systems in the fires of logic and deploying them across the Lands Between.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
