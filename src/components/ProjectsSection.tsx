import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import {
  fadeUp, fadeIn, staggerContainer, smoothTransition,
  modalOverlay, modalContent,
} from "@/lib/animations";

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
    name: "Crimson Flask API",
    rarity: "Legendary",
    type: "Backend Service",
    description: "A high-performance REST API built to sustain even the most punishing request loads.",
    lore: "Forged in the crucible of production traffic, this flask restores vitality to any system that drinks from it.",
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    name: "Moonveil Dashboard",
    rarity: "Epic",
    type: "Frontend Application",
    description: "Real-time analytics dashboard with fluid animations and dark-mode interface.",
    lore: "A blade of moonlight data, cutting through the fog of uncertainty with each visualization.",
    tech: ["React", "TypeScript", "D3.js", "Tailwind"],
    github: "#",
  },
  {
    id: 3,
    name: "Ranni's Neural Net",
    rarity: "Legendary",
    type: "AI / ML Pipeline",
    description: "An ML pipeline for natural language processing with transformer architecture.",
    lore: "Guided by an unseen hand, this network weaves meaning from the chaos of human language.",
    tech: ["Python", "PyTorch", "HuggingFace", "FastAPI"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    name: "Erdtree CLI",
    rarity: "Rare",
    type: "Developer Tool",
    description: "A command-line tool for scaffolding and managing microservice architectures.",
    lore: "From the roots of the Erdtree, new branches of code spring forth with a single command.",
    tech: ["Rust", "CLI", "TOML", "GitHub Actions"],
    github: "#",
  },
];

const rarityColor: Record<string, string> = {
  Legendary: "text-gold",
  Epic: "text-foreground",
  Rare: "text-muted-foreground",
};

const cardHover = {
  rest: { y: 0, boxShadow: "0 0 0 hsl(43 50% 50% / 0)" },
  hover: {
    y: -3,
    boxShadow: "0 0 20px hsl(43 50% 50% / 0.08)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <motion.button
    variants={fadeUp}
    whileHover="hover"
    initial="rest"
    animate="rest"
    onClick={onClick}
    className="w-full text-left border border-border bg-card p-6 rounded-sm group"
  >
    <motion.div variants={cardHover} className="contents" />
    <div className="flex justify-between items-start mb-1">
      <h3 className="font-heading text-base text-foreground group-hover:text-gold transition-colors duration-300 tracking-wide">
        {project.name}
      </h3>
      <span className={`font-heading text-[10px] tracking-[0.15em] uppercase ${rarityColor[project.rarity]}`}>
        {project.rarity}
      </span>
    </div>
    <p className="text-sm text-muted-foreground font-body mb-4">{project.type}</p>
    <p className="text-sm text-foreground/60 font-body leading-relaxed">{project.description}</p>
    <div className="flex flex-wrap gap-2 mt-4">
      {project.tech.map((t) => (
        <span key={t} className="text-[10px] font-heading tracking-[0.1em] text-muted-foreground border border-border px-2 py-0.5 rounded-sm uppercase">
          {t}
        </span>
      ))}
    </div>
  </motion.button>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    variants={modalOverlay}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ duration: 0.2 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-background/85 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      variants={modalContent}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={(e) => e.stopPropagation()}
      className="bg-card border border-border p-8 rounded-sm max-w-lg w-full relative"
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors">
        <X size={16} />
      </button>

      <p className="font-heading text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-4">
        Inspect Item
      </p>

      <h3 className="font-heading text-xl text-foreground tracking-wider mb-1">
        {project.name}
      </h3>

      <div className="flex items-center gap-3 mb-6">
        <span className={`font-heading text-[10px] tracking-[0.15em] uppercase ${rarityColor[project.rarity]}`}>
          {project.rarity}
        </span>
        <span className="text-border">·</span>
        <span className="text-muted-foreground text-sm font-body">{project.type}</span>
      </div>

      <p className="font-body text-foreground/80 leading-relaxed mb-4">
        {project.description}
      </p>

      <p className="font-body italic text-muted-foreground text-sm leading-relaxed mb-6 border-l border-border pl-4">
        {project.lore}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span key={t} className="text-[10px] font-heading tracking-[0.1em] text-gold-dim border border-border px-2 py-1 rounded-sm uppercase">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-6">
        {project.github && (
          <a href={project.github} className="flex items-center gap-2 text-sm font-heading tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            <Github size={14} /> Source
          </a>
        )}
        {project.live && (
          <a href={project.live} className="flex items-center gap-2 text-sm font-heading tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            <ExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={smoothTransition()}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-heading text-foreground tracking-wider">
            Inventory
          </h2>
          <div className="mt-4 w-8 h-[1px] bg-gold-dim" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-2 gap-4"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
