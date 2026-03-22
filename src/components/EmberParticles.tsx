import { motion } from "framer-motion";
import { useMemo } from "react";

interface Ember {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

const EmberParticles = () => {
  const embers = useMemo<Ember[]>(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 10,
      drift: (Math.random() - 0.5) * 60,
      opacity: Math.random() * 0.5 + 0.15,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          className="absolute rounded-full"
          style={{
            left: `${ember.x}%`,
            bottom: "-5%",
            width: ember.size,
            height: ember.size,
            background: `radial-gradient(circle, hsl(var(--gold-glow)) 0%, hsl(var(--gold) / 0.6) 50%, transparent 100%)`,
            boxShadow: `0 0 ${ember.size * 2}px hsl(var(--gold) / 0.4)`,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            x: [0, ember.drift],
            opacity: [0, ember.opacity, ember.opacity, 0],
            scale: [0.5, 1, 0.8, 0.3],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default EmberParticles;
