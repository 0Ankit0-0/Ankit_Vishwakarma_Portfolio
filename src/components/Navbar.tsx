import { motion } from "framer-motion";

const navLinks = [
  { label: "Attributes", href: "#about" },
  { label: "Inventory", href: "#projects" },
  { label: "Summon", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-8 py-4 flex justify-between items-center bg-background/70 backdrop-blur-sm border-b border-border/50"
    >
      <a href="#" className="font-heading text-sm tracking-[0.2em] text-gold">
        TD
      </a>
      <div className="flex gap-6 md:gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-heading text-[11px] md:text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
