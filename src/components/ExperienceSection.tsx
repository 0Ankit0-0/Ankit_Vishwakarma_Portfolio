import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import OrnamentDivider from "./OrnamentDivider";

interface Quest {
  title: string;
  organization: string;
  period: string;
  status: "completed" | "active";
  achievements: string[];
  epilogue?: string;
}

const quests: Quest[] = [
  {
    title: "Product Developer & Analytics",
    organization: "NSTechX (Fintech Startup)",
    period: "Nov 2025 – Feb 2026",
    status: "completed",
    achievements: [
      "Built a UPI reconciliation engine prototype with automated transaction matching — demoed to a Kerala-based bank.",
      "Designed end-to-end reconciliation workflow covering discrepancy detection and exception routing.",
      "Deployed backend services on AWS (EC2, S3, RDS) with zero reported production incidents.",
      "Sole developer for the company's public website and internal analytics dashboards.",
      "Iterated on product features across multiple feedback cycles with the cross-functional team.",
    ],
    epilogue: "Startup operations paused during strategic product realignment.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-4 noise-overlay">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-xs tracking-[0.4em] text-gold-dim uppercase mb-3">— Chronicles —</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground tracking-wider text-glow-gold">
            Quest Log
          </h2>
          <OrnamentDivider className="mt-4" />
        </motion.div>

        <div className="relative">
          {/* Timeline line with glow */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px]">
            <div className="h-full bg-gradient-to-b from-gold/50 via-gold-dim/30 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-gold/10 via-gold/5 to-transparent blur-sm" />
          </div>

          {quests.map((quest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative pl-12 md:pl-20 mb-12 last:mb-0"
            >
              {/* Timeline node with pulse */}
              <div className="absolute left-2.5 md:left-6.5 top-1">
                <div className="w-3 h-3 rounded-full border border-gold bg-background relative">
                  <div className="absolute inset-0 rounded-full animate-pulse-glow" />
                </div>
              </div>

              <div className="border border-gold-dim/30 bg-card/60 backdrop-blur-sm p-6 md:p-8 rounded transition-all duration-300 glow-gold-hover group hover:border-gold-dim/50">
                {/* Status banner */}
                <div className="flex items-center gap-2 mb-4 px-3 py-1.5 bg-gold/5 border border-gold-dim/20 rounded-sm w-fit">
                  <CheckCircle2 size={12} className="text-gold" />
                  <span className="font-heading text-xs tracking-[0.2em] uppercase text-gold">
                    Quest Complete
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-heading text-lg md:text-xl text-foreground tracking-wide group-hover:text-glow-gold transition-all duration-300">
                      {quest.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase size={12} className="text-gold-dim" />
                      <p className="text-sm text-muted-foreground font-body">
                        {quest.organization}
                      </p>
                    </div>
                  </div>
                  <span className="font-heading text-xs tracking-[0.15em] text-gold-dim whitespace-nowrap border border-gold-dim/20 px-3 py-1 rounded-sm">
                    {quest.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-4">
                  {quest.achievements.map((achievement, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + j * 0.1 }}
                      className="flex gap-3 text-sm font-body text-foreground/80 leading-relaxed"
                    >
                      <span className="text-gold mt-0.5 shrink-0 text-xs">⬥</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>

                {quest.epilogue && (
                  <div className="mt-5 pt-4 border-t border-gold-dim/15">
                    <p className="text-sm font-body italic text-muted-foreground border-l-2 border-gold-dim/30 pl-4">
                      {quest.epilogue}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
