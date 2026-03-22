import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

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
    description: "A portable, offline AI log analysis tool for air-gapped and critical infrastructure networks with TensorFlow Lite anomaly detection.",
    lore: "Forged for the Smart India Hackathon — a sentinel that watches over networks no light can reach, detecting threats in silence.",
    tech: ["Python", "FastAPI", "DuckDB", "TensorFlow Lite", "React", "Tauri"],
    github: "https://github.com/0Ankit0-0/Project_Quorum",
  },
  {
    id: 2,
    name: "Jurix",
    rarity: "Legendary",
    type: "AI Legal Simulation",
    description: "A multi-agent AI legal simulation platform using PyTorch and Ollama LLMs with Prosecutor, Defense, and Judge agents.",
    lore: "Where justice meets technology — three minds of silicon argue the law, presented before judges at Avishkar 2025.",
    tech: ["Python", "Flask", "MongoDB", "PyTorch", "Ollama", "React"],
    github: "https://github.com/0Ankit0-0/Jurix",
  },
  {
    id: 3,
    name: "AccessMap",
    rarity: "Epic",
    type: "Accessibility Navigation",
    description: "A geolocation-based web app for wheelchair-accessible route planning using Leaflet and OpenStreetMap.",
    lore: "A map that sees what others overlook — charting paths for those who navigate a world not built for them.",
    tech: ["React", "Node.js", "Leaflet", "OpenStreetMap", "IBM Cloud"],
    github: "https://github.com/0Ankit0-0/Access-Map0",
  },
  {
    id: 4,
    name: "Newzzy",
    rarity: "Rare",
    type: "News Aggregator",
    description: "A modern news aggregation platform delivering curated content with a clean, responsive interface.",
    lore: "From the chaos of the world's whispers, this artifact distills only what matters.",
    tech: ["React", "API Integration", "TailwindCSS"],
    github: "https://github.com/0Ankit0-0/Newzzy",
  },
];

const rarityColor: Record<string, string> = {
  Legendary: "text-gold",
  Epic: "text-foreground",
  Rare: "text-muted-foreground",
};

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
    className="w-full text-left border border-gold-dim/30 bg-card p-6 rounded transition-all duration-300 glow-gold-hover group"
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-heading text-lg text-foreground group-hover:text-gold transition-colors tracking-wide">
        {project.name}
      </h3>
      <span className={`font-heading text-xs tracking-wider ${rarityColor[project.rarity]}`}>
        {project.rarity}
      </span>
    </div>
    <p className="text-sm text-muted-foreground font-body mb-4">{project.type}</p>
    <p className="text-sm text-foreground/70 font-body leading-relaxed">{project.description}</p>
    <div className="flex flex-wrap gap-2 mt-4">
      {project.tech.map((t) => (
        <span key={t} className="text-xs font-heading tracking-wider text-gold-dim border border-gold-dim/20 px-2 py-0.5 rounded-sm">
          {t}
        </span>
      ))}
    </div>
  </motion.button>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-card border border-gold-dim/40 p-8 rounded max-w-lg w-full relative glow-gold"
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-gold transition-colors">
        <X size={18} />
      </button>

      <p className="font-heading text-xs tracking-[0.3em] text-gold-dim uppercase mb-1">
        — Inspect Item —
      </p>

      <h3 className="font-heading text-2xl text-foreground tracking-wider mb-1">
        {project.name}
      </h3>

      <div className="flex items-center gap-3 mb-6">
        <span className={`font-heading text-xs tracking-wider ${rarityColor[project.rarity]}`}>
          {project.rarity}
        </span>
        <span className="text-muted-foreground text-xs">•</span>
        <span className="text-muted-foreground text-xs font-body">{project.type}</span>
      </div>

      <p className="font-body text-foreground/80 leading-relaxed mb-4">
        {project.description}
      </p>

      <p className="font-body italic text-muted-foreground text-sm leading-relaxed mb-6 border-l border-gold-dim/30 pl-4">
        {project.lore}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-heading tracking-wider text-gold border border-gold-dim/30 px-2 py-1 rounded-sm">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-heading tracking-wider text-muted-foreground hover:text-gold transition-colors">
            <Github size={16} /> Source
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-heading tracking-wider text-muted-foreground hover:text-gold transition-colors">
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground tracking-wider">
            Inventory
          </h2>
          <div className="mt-3 w-16 h-[1px] bg-gold mx-auto opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
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
