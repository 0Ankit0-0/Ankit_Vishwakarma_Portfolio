import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { fadeIn, fadeUp, smoothTransition } from "@/lib/animations";

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
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={smoothTransition()}
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
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={smoothTransition(0.15)}
          className="flex justify-center gap-8 mt-12"
        >
          {links.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group flex flex-col items-center gap-2"
            >
              <div className="p-3 border border-border rounded-sm transition-all duration-300 group-hover:border-gold-dim group-hover:shadow-[0_0_12px_hsl(43_50%_50%/0.08)]">
                <Icon size={18} className="text-muted-foreground group-hover:text-gold transition-colors duration-300" />
              </div>
              <span className="text-[10px] font-heading tracking-[0.15em] text-muted-foreground group-hover:text-foreground transition-colors uppercase">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={smoothTransition(0.3)}
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
