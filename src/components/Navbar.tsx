import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Attributes", href: "#about" },
  { label: "Quests", href: "#experience" },
  { label: "Inventory", href: "#projects" },
  { label: "Summon", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive(top.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="fixed top-0 left-0 right-0 z-40 py-4 px-6 flex justify-between items-center bg-background/50 backdrop-blur-md border-b border-gold-dim/10"
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="font-heading text-sm tracking-[0.3em] text-gold uppercase"
      >
        ⚔ AV
      </a>
      <div className="flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`font-heading text-xs tracking-[0.2em] transition-colors uppercase ${
              active === link.href.slice(1)
                ? "text-gold"
                : "text-muted-foreground hover:text-gold"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
