import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  transitionDuration?: number;
  delay?: number;
}

/**
 * AnimatedWrapper Component
 * 
 * Wraps images or cards with a smooth zoom effect on hover.
 * - Scales to hoverScale (default 1.1) on hover
 * - Container uses overflow-hidden to prevent content overflow
 * - Smooth ease-out transition (0.5s default)
 * 
 * Usage:
 * <AnimatedWrapper hoverScale={1.1} transitionDuration={0.6}>
 *   <img src="..." alt="..." />
 * </AnimatedWrapper>
 */
const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  className = '',
  hoverScale = 1.06,
  transitionDuration = 0.6,
  delay = 0,
}) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ scale: 1 }}
      whileHover={{ scale: hoverScale }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
