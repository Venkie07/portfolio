import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, boxShadow: '0 20px 25px -5px rgba(168, 85, 247, 0.1), 0 10px 10px -5px rgba(168, 85, 247, 0.04)' } : {}}
      className={`glass rounded-2xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
