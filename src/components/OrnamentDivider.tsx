import { motion } from "framer-motion";

const OrnamentDivider = ({ className = "" }: { className?: string }) => (
  <div className={`ornament-divider ${className}`}>
    <span className="font-heading text-gold/40 text-xs tracking-widest">◆</span>
  </div>
);

export default OrnamentDivider;
