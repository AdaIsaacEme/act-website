import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StaggeredGridProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  containerDelay?: number;
  duration?: number;
}

/**
 * StaggeredGrid Component
 * 
 * Animates grid items with a staggered delay, creating a "pop-in" effect.
 * - Each item appears with a delay relative to previous items
 * - Fades in and scales up slightly
 * - Default 0.1s delay between items
 * 
 * Usage:
 * <StaggeredGrid staggerDelay={0.1}>
 *   {items.map((item) => <Card key={item.id}>{item}</Card>)}
 * </StaggeredGrid>
 */
const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  className = '',
  staggerDelay = 0.06,
  containerDelay = 0,
  duration = 0.4,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: containerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px 0px' }}
    >
      {Array.isArray(children) &&
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))}
    </motion.div>
  );
};

export default StaggeredGrid;
