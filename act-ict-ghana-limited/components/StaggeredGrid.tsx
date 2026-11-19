import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'up' | 'alternating' | 'left' | 'right';

interface StaggeredGridProps {
  children: ReactNode | ReactNode[];
  className?: string;
  staggerDelay?: number;
  containerDelay?: number;
  fromDirection?: Direction;
}

/**
 * Reveals its children one after another when the grid scrolls into view.
 *
 * Each child animates itself (rather than waiting for a one-off signal from the parent),
 * so children that appear later — e.g. after a filter tab is clicked — still fade in
 * instead of staying invisible.
 */
const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  className = '',
  staggerDelay = 0.09,
  containerDelay = 0,
  fromDirection = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });

  const offset = (index: number) => {
    switch (fromDirection) {
      case 'left':
        return { x: 36, y: 0 };
      case 'right':
        return { x: -36, y: 0 };
      case 'alternating':
        return { x: index % 2 === 0 ? -28 : 28, y: 16 };
      default:
        return { x: 0, y: 36 };
    }
  };

  // toArray keeps each child's own key, so filtering swaps the right items.
  const items = React.Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <motion.div
          key={(React.isValidElement(child) && child.key) || i}
          initial={{ opacity: 0, scale: 0.97, ...offset(i) }}
          animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : undefined}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: containerDelay + i * staggerDelay }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default StaggeredGrid;
