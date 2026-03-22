import { motion } from "framer-motion";

const navLinks = [
  { label: "Attributes", href: "#about" },
  { label: "Quests", href: "#experience" },
  { label: "Inventory", href: "#projects" },
  { label: "Summon", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="fixed top-0 left-0 right-0 z-40 py-4 px-6 flex justify-between items-center bg-background/50 backdrop-blur-md border-b border-gold-dim/10"
    >
      <a href="#" className="font-heading text-sm tracking-[0.3em] text-gold uppercase">
        ⚔ TD
      </a>
      <div className="flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-heading text-xs tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors uppercase"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
