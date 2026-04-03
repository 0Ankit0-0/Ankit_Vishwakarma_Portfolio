import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import OrnamentDivider from "./OrnamentDivider";

const links = [
  { icon: Mail, label: "Email", href: "mailto:ankit.d.vishwakarma@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/0Ankit0-0" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ankit-vishwakarma-9540502aa/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-3 sm:px-4">
      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-xs tracking-[0.4em] text-gold-dim uppercase mb-3">— Multiplayer —</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground tracking-wider text-glow-gold">
            Summon
          </h2>
          <OrnamentDivider className="mt-4" />
          <p className="mt-8 font-body text-muted-foreground italic text-lg leading-relaxed">
            Leave a sign, and I shall answer the call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-10 sm:mt-14 flex-wrap"
        >
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="relative p-4 border border-gold-dim/30 rounded transition-all duration-500 group-hover:border-gold group-hover:glow-gold-strong bg-card/30">
                <Icon size={22} className="text-muted-foreground group-hover:text-gold transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_hsl(43_55%_53%/0.5)]" />
              </div>
              <span className="text-xs font-heading tracking-[0.2em] text-muted-foreground group-hover:text-gold transition-colors duration-300">
                {label}
              </span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-28"
        >
          <OrnamentDivider className="mb-6" />
          <p className="text-xs font-heading tracking-[0.3em] text-muted-foreground/60 uppercase">
            Crafted in the Lands Between
          </p>
          <p className="text-[10px] font-heading tracking-[0.2em] text-muted-foreground/30 uppercase mt-2">
            © {new Date().getFullYear()} Ankit Vishwakarma
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
