import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

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

const statusLabel: Record<string, string> = {
  completed: "Quest Complete",
  active: "In Progress",
};

const statusColor: Record<string, string> = {
  completed: "text-gold",
  active: "text-foreground",
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground tracking-wider">
            Quest Log
          </h2>
          <div className="mt-3 w-16 h-[1px] bg-gold mx-auto opacity-50" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/40 via-gold-dim/20 to-transparent" />

          {quests.map((quest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-12 md:pl-20 mb-12 last:mb-0"
            >
              {/* Timeline node */}
              <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full border border-gold bg-background glow-gold" />

              <div className="border border-gold-dim/30 bg-card p-6 md:p-8 rounded glow-gold-hover transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={14} className="text-gold-dim" />
                      <span className={`font-heading text-xs tracking-[0.2em] uppercase ${statusColor[quest.status]}`}>
                        {statusLabel[quest.status]}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg md:text-xl text-foreground tracking-wide">
                      {quest.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body mt-0.5">
                      {quest.organization}
                    </p>
                  </div>
                  <span className="font-heading text-xs tracking-[0.15em] text-gold-dim whitespace-nowrap">
                    {quest.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-4">
                  {quest.achievements.map((achievement, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + j * 0.1 }}
                      className="flex gap-3 text-sm font-body text-foreground/80 leading-relaxed"
                    >
                      <span className="text-gold-dim mt-0.5 shrink-0">▸</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>

                {quest.epilogue && (
                  <p className="text-sm font-body italic text-muted-foreground border-l border-gold-dim/30 pl-4 mt-4">
                    {quest.epilogue}
                  </p>
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
