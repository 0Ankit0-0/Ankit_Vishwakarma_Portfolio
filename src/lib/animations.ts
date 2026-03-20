import type { Variants, Transition } from "framer-motion";

// Shared transition config
const ease = [0.25, 0.1, 0.25, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const barFill = (value: number): Variants => ({
  hidden: { width: 0 },
  visible: { width: `${value}%` },
});

export const smoothTransition = (delay = 0): Transition => ({
  duration: 0.45,
  delay,
  ease,
});

export const slowTransition = (delay = 0): Transition => ({
  duration: 0.8,
  delay,
  ease,
});

export const barTransition = (delay = 0): Transition => ({
  duration: 0.9,
  delay,
  ease: "easeOut",
});

export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.97, y: 8 },
};
