import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  slideDistance?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right'; // NEW
}

/**
 * ScrollReveal Component
 * 
 * Animates content when it enters the viewport.
 * - Fades in from opacity 0 to 1
 * - Slides in from specified direction
 * - Triggers when element is in view
 * - Smooth ease-out transition
 * 
 * Usage:
 * <ScrollReveal delay={0.1} direction="left">
 *   <section>Content here</section>
 * </ScrollReveal>
 */
const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  slideDistance = 30,
  duration = 0.5,
  direction = 'up',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  // Map direction to initial motion values
  const getInitialMotion = () => {
    switch (direction) {
      case 'down':
        return { x: 0, y: -slideDistance };
      case 'left':
        return { x: slideDistance, y: 0 };
      case 'right':
        return { x: -slideDistance, y: 0 };
      case 'up':
      default:
        return { x: 0, y: slideDistance };
    }
  };

  const initialMotion = getInitialMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initialMotion }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialMotion }}
      transition={{
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
