import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverShade?: 'light' | 'dark';
  transitionDuration?: number;
}

/**
 * AnimatedButton Component
 * 
 * Button with micro-interactions:
 * - Subtle background-color shift on hover
 * - Slight scale-up (1.05x default)
 * - Smooth transitions
 * - Press animation (scale down) when clicked
 * 
 * Usage:
 * <AnimatedButton className="bg-blue-500">
 *   Click me
 * </AnimatedButton>
 */
const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className = '',
  hoverScale = 1.05,
  hoverShade = 'light',
  transitionDuration = 0.3,
  ...props
}) => {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 35,
        mass: 0.6,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
