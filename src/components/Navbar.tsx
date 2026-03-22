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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      className={`fixed top-0 left-0 right-0 z-40 py-4 px-6 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-gold-dim/15 shadow-[0_4px_30px_hsl(0_0%_0%/0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="font-heading text-sm tracking-[0.3em] text-gold uppercase hover:text-glow-gold transition-all duration-300"
      >
        ⚔ AV
      </a>
      <div className="flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`relative font-heading text-xs tracking-[0.2em] transition-all duration-300 uppercase ${
              active === link.href.slice(1)
                ? "text-gold"
                : "text-muted-foreground hover:text-gold"
            }`}
          >
            {link.label}
            {/* Active indicator dot */}
            {active === link.href.slice(1) && (
              <motion.div
                layoutId="nav-dot"
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                style={{ boxShadow: "0 0 6px hsl(43 55% 53% / 0.6)" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
