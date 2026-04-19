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
  staggerDelay = 0.1,
  containerDelay = 0,
  duration = 0.5,
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
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
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
