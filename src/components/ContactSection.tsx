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
    <section id="contact" className="py-24 md:py-32 px-4">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground tracking-wider">
            Summon
          </h2>
          <div className="mt-3 w-16 h-[1px] bg-gold mx-auto opacity-50" />
          <p className="mt-6 font-body text-muted-foreground italic text-lg">
            Leave a sign, and I shall answer the call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
              <div className="p-3 border border-gold-dim/30 rounded transition-all duration-300 group-hover:border-gold group-hover:glow-gold">
                <Icon size={20} className="text-muted-foreground group-hover:text-gold transition-colors duration-300" />
              </div>
              <span className="text-xs font-heading tracking-[0.2em] text-muted-foreground group-hover:text-gold transition-colors">
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
          className="mt-24 pt-8 border-t border-gold-dim/10"
        >
          <p className="text-xs font-heading tracking-[0.3em] text-muted-foreground uppercase">
            Crafted in the Lands Between
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
