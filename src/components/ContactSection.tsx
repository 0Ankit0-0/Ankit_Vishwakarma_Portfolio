import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading text-foreground tracking-wider text-center">
            Summon
          </h2>
          <div className="mt-4 w-8 h-[1px] bg-gold-dim mx-auto" />
          <p className="mt-6 font-body text-muted-foreground italic text-base text-center leading-relaxed">
            Leave a sign, and I shall answer the call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-8 mt-12"
        >
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="p-3 border border-border rounded-sm transition-colors duration-300 group-hover:border-gold-dim">
                <Icon size={18} className="text-muted-foreground group-hover:text-gold transition-colors duration-300" />
              </div>
              <span className="text-[10px] font-heading tracking-[0.15em] text-muted-foreground group-hover:text-foreground transition-colors uppercase">
                {label}
              </span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-border/30"
        >
          <p className="text-[10px] font-heading tracking-[0.2em] text-muted-foreground uppercase text-center">
            Crafted in the Lands Between
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
