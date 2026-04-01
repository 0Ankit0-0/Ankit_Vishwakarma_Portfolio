import { Github, Linkedin, Mail } from "lucide-react";
import OrnamentDivider from "./OrnamentDivider";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/0Ankit0-0" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/ankit-gupta" },
  { icon: Mail, label: "Email", href: "mailto:ankit@example.com" },
];

const FooterSection = () => (
  <footer className="relative py-16 px-4 border-t border-gold-dim/15 noise-overlay">
    <div className="max-w-4xl mx-auto relative z-10">
      <OrnamentDivider className="mb-10" />

      <div className="flex justify-center gap-8 mb-10">
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            <div className="p-3 border border-gold-dim/20 rounded-sm bg-card/30 group-hover:border-gold/50 group-hover:shadow-[0_0_15px_hsl(43_55%_53%/0.2)] transition-all duration-500">
              <Icon size={20} className="group-hover:drop-shadow-[0_0_6px_hsl(43_55%_53%/0.5)]" />
            </div>
            <span className="font-heading text-[10px] tracking-[0.25em] uppercase">{label}</span>
          </a>
        ))}
      </div>

      <div className="text-center space-y-3">
        <p className="font-heading text-xs tracking-[0.3em] text-gold-dim/60 uppercase">
          ◆ Forged in the Lands Between ◆
        </p>
        <p className="text-[11px] text-muted-foreground/50 font-body">
          © {new Date().getFullYear()} Ankit Gupta — All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
