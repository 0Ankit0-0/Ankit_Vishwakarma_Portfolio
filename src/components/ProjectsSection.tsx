import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import OrnamentDivider from "./OrnamentDivider";

interface Project {
  id: number;
  name: string;
  rarity: string;
  type: string;
  description: string;
  lore: string;
  tech: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Project Quorum",
    rarity: "Legendary",
    type: "AI Threat Detection Tool",
    description: "Advanced log analysis & anomaly detection for cybersecurity. Parses EVTX/Syslog logs, runs ML models (Isolation Forest, SVM) locally — ideal for air-gapped, high-security networks.",
    lore: "Forged for the Smart India Hackathon — a sentinel that watches over networks no light can reach, detecting threats in silence.",
    tech: ["Python", "FastAPI", "DuckDB", "Scikit-learn", "React", "Tauri"],
    github: "https://github.com/0Ankit0-0/Project_Quorum",
  },
  {
    id: 2,
    name: "Jurix",
    rarity: "Legendary",
    type: "AI Courtroom Simulation",
    description: "AI-powered platform simulating real Indian court cases with Prosecutor, Defender, and Judge agents that parse evidence, construct arguments, and generate impartial judgments.",
    lore: "Where justice meets technology — three minds of silicon argue the law, presented before judges at Avishkar 2025.",
    tech: ["React", "Flask", "Node.js", "MongoDB", "Custom LLMs", "Tailwind"],
    github: "https://github.com/0Ankit0-0/Jurix",
  },
  {
    id: 3,
    name: "Access Map",
    rarity: "Epic",
    type: "Accessibility Navigation",
    description: "Crowdsourced platform for reporting and finding accessibility features in public spaces — ramps, elevators, barrier-free access — displayed on a live-updating map.",
    lore: "A map that sees what others overlook — charting paths for those who navigate a world not built for them.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Leaflet"],
    github: "https://github.com/0Ankit0-0/Access-Map0",
  },
  {
    id: 4,
    name: "Legal Agent",
    rarity: "Epic",
    type: "Multi-Agent Courtroom AI",
    description: "Backend-focused legal simulation with extensible AI agents (Prosecutor, Defense, Judge), pluggable LLM fallbacks, and modular evidence analysis pipelines.",
    lore: "A mind split into three — prosecution, defense, and judgment — each forged to see the law through different eyes.",
    tech: ["Python", "PyTorch", "LangChain", "Modular Agents"],
    github: "https://github.com/0Ankit0-0/LEGAL-AGENT",
  },
  {
    id: 5,
    name: "Newzzy",
    rarity: "Rare",
    type: "News Aggregator",
    description: "Full-stack news app with user accounts, preference-based feeds, real-time content from multiple sources, and trending topic browsing.",
    lore: "From the chaos of the world's whispers, this artifact distills only what matters.",
    tech: ["Node.js", "Express", "MongoDB", "React", "JWT"],
    github: "https://github.com/0Ankit0-0/Newzzy",
  },
  {
    id: 6,
    name: "PPTQ",
    rarity: "Rare",
    type: "QA Training Platform",
    description: "Interactive learning tool for software testing & QA — hands-on lessons, real-world demos, and quizzes from fundamentals to advanced scenarios.",
    lore: "A proving ground where the untested are tempered — mastering quality through trial and knowledge.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Jest"],
    github: "https://github.com/0Ankit0-0/PPTQ",
  },
  {
    id: 7,
    name: "Legal Eagle AI",
    rarity: "Rare",
    type: "Legal Q&A & Summarization",
    description: "AI-powered legal Q&A and document summarization using retrieval-augmented generation over a legal corpus. Quick, accurate insights from complex documents.",
    lore: "An oracle of written law — feed it scrolls of legalese, and it returns clarity.",
    tech: ["Python", "LangChain", "OpenAI", "Vector DB"],
    github: "https://github.com/0Ankit0-0/legal-assistance",
  },
  {
    id: 8,
    name: "Word Counter",
    rarity: "Common",
    type: "Text Analysis Utility",
    description: "Lightweight React utility for instant word counts from pasted text or uploaded files. Fast, zero dependencies, simple UI.",
    lore: "A humble tool — but even the smallest blade has its purpose.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/0Ankit0-0/Word-Counter",
  },
];

const rarityColor: Record<string, string> = {
  Legendary: "text-gold",
  Epic: "text-foreground",
  Rare: "text-muted-foreground",
  Common: "text-muted-foreground/70",
};

const rarityBorder: Record<string, string> = {
  Legendary: "border-gold/40 hover:border-gold/70",
  Epic: "border-gold-dim/30 hover:border-gold-dim/60",
  Rare: "border-gold-dim/20 hover:border-gold-dim/40",
  Common: "border-gold-dim/10 hover:border-gold-dim/25",
};

const rarityGlow: Record<string, string> = {
  Legendary: "hover:shadow-[0_0_25px_hsl(43_55%_53%/0.3),0_0_50px_hsl(43_55%_53%/0.1)]",
  Epic: "hover:shadow-[0_0_20px_hsl(43_55%_53%/0.2)]",
  Rare: "hover:shadow-[0_0_15px_hsl(43_55%_53%/0.15)]",
  Common: "hover:shadow-[0_0_10px_hsl(43_55%_53%/0.1)]",
};

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02, y: -4 }}
    whileTap={{ scale: 0.99 }}
    onClick={onClick}
    className={`w-full text-left border bg-card/60 backdrop-blur-sm p-6 rounded transition-all duration-500 group relative overflow-hidden ${rarityBorder[project.rarity]} ${rarityGlow[project.rarity]}`}
  >
    {/* Subtle top accent line */}
    <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${project.rarity === "Legendary" ? "via-gold/50" : project.rarity === "Epic" ? "via-gold-dim/40" : "via-gold-dim/20"} to-transparent`} />

    <div className="flex justify-between items-start mb-2">
      <h3 className="font-heading text-lg text-foreground group-hover:text-gold transition-colors duration-300 tracking-wide">
        {project.name}
      </h3>
      <span className={`font-heading text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 border rounded-sm ${
        project.rarity === "Legendary" ? "text-gold border-gold/30 bg-gold/5" :
        project.rarity === "Epic" ? "text-foreground border-foreground/20 bg-foreground/5" :
        "text-muted-foreground border-muted-foreground/20"
      }`}>
        {project.rarity}
      </span>
    </div>
    <p className="text-sm text-muted-foreground font-body mb-4">{project.type}</p>
    <p className="text-sm text-foreground/70 font-body leading-relaxed">{project.description}</p>
    <div className="flex flex-wrap gap-2 mt-4">
      {project.tech.map((t) => (
        <span key={t} className="text-[11px] font-heading tracking-wider text-gold-dim border border-gold-dim/20 px-2 py-0.5 rounded-sm bg-gold-dim/5">
          {t}
        </span>
      ))}
    </div>

    {/* Hover corner ornament */}
    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-40 transition-opacity duration-500 text-gold text-[10px] font-heading tracking-widest">
      ⟡ INSPECT
    </div>
  </motion.button>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.95, opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
      className="bg-card border border-gold-dim/40 p-8 rounded max-w-lg w-full relative glow-gold-strong overflow-hidden"
    >
      {/* Top ornamental line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-gold transition-colors">
        <X size={18} />
      </button>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-[1px] bg-gradient-to-r from-gold/50 to-transparent" />
        <p className="font-heading text-xs tracking-[0.3em] text-gold-dim uppercase">
          Inspect Item
        </p>
      </div>

      <h3 className="font-heading text-2xl text-foreground tracking-wider mb-1 text-glow-gold">
        {project.name}
      </h3>

      <div className="flex items-center gap-3 mb-6">
        <span className={`font-heading text-xs tracking-wider ${rarityColor[project.rarity]}`}>
          {project.rarity}
        </span>
        <span className="text-gold-dim/30">◆</span>
        <span className="text-muted-foreground text-xs font-body">{project.type}</span>
      </div>

      <p className="font-body text-foreground/80 leading-relaxed mb-4 text-[17px]">
        {project.description}
      </p>

      <p className="font-body italic text-muted-foreground text-sm leading-relaxed mb-6 border-l-2 border-gold-dim/30 pl-4">
        {project.lore}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-heading tracking-wider text-gold border border-gold-dim/30 px-2.5 py-1 rounded-sm bg-gold/5">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-gold-dim/15">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-heading tracking-wider text-muted-foreground hover:text-gold transition-colors group">
            <Github size={16} className="group-hover:drop-shadow-[0_0_6px_hsl(43_55%_53%/0.5)]" /> Source
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-heading tracking-wider text-muted-foreground hover:text-gold transition-colors group">
            <ExternalLink size={16} className="group-hover:drop-shadow-[0_0_6px_hsl(43_55%_53%/0.5)]" /> Live
          </a>
        )}
      </div>

      {/* Bottom ornament */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-dim/30 to-transparent" />
    </motion.div>
  </motion.div>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 px-4 section-glow noise-overlay">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-xs tracking-[0.4em] text-gold-dim uppercase mb-3">— Armaments —</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground tracking-wider text-glow-gold">
            Inventory
          </h2>
          <OrnamentDivider className="mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
