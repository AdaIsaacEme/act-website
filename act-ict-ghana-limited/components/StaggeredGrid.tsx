import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Direction = 'up' | 'alternating' | 'left' | 'right';

interface StaggeredGridProps {
  children: ReactNode | ReactNode[];
  className?: string;
  staggerDelay?: number;
  containerDelay?: number;
  fromDirection?: Direction;
}

const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  className = '',
  staggerDelay = 0.08,
  containerDelay = 0,
  fromDirection = 'up',
}) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: containerDelay,
      },
    },
  };

  const getVariant = (index: number) => {
    let x = 0, y = 0;
    switch (fromDirection) {
      case 'up': y = 36; break;
      case 'left': x = 36; break;
      case 'right': x = -36; break;
      case 'alternating':
        x = index % 2 === 0 ? -28 : 28;
        y = 16;
        break;
    }
    return {
      hidden: { opacity: 0, x, y, scale: 0.97 },
      visible: {
        opacity: 1, x: 0, y: 0, scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };
  };

  const childArray = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -30px 0px' }}
    >
      {childArray.map((child, i) => (
        <motion.div key={i} variants={getVariant(i)} style={{ willChange: 'transform, opacity' }}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredGrid;
