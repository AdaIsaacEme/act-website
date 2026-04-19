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
}

/**
 * ScrollReveal Component
 * 
 * Animates content when it enters the viewport.
 * - Fades in from opacity 0 to 1
 * - Slides up from bottom (default 20px)
 * - Triggers when element is in view
 * - Smooth ease-out transition
 * 
 * Usage:
 * <ScrollReveal delay={0.1}>
 *   <section>Content here</section>
 * </ScrollReveal>
 */
const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  slideDistance = 20,
  duration = 0.6,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: slideDistance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: slideDistance }}
      transition={{
        duration,
        ease: 'easeOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
