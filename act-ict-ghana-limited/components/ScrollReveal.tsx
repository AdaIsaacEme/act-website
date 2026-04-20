import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  direction?: Direction;
}

const dirMap: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 50 },
  down:  { x: 0,   y: -50 },
  left:  { x: 56,  y: 0 },
  right: { x: -56, y: 0 },
  none:  { x: 0,   y: 0 },
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  style,
  delay = 0,
  duration = 0.75,
  direction = 'up',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });
  const { x, y } = dirMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      layout={false}
      style={{ willChange: 'transform, opacity', ...style }}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
