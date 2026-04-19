import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link, LinkProps } from 'react-router-dom';

interface AnimatedLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  hoverShift?: number;
  magneticStrength?: number;
}

/**
 * AnimatedLink Component
 * 
 * Navigation link with smooth magnetic-like transitions:
 * - Subtle color shift on hover
 * - Optional tracking underline animation
 * - Smooth ease-out transitions
 * 
 * Usage:
 * <AnimatedLink to="/page" className="text-blue-500">
 *   Link Text
 * </AnimatedLink>
 */
const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  children,
  className = '',
  hoverShift = 2,
  magneticStrength = 0.05,
  ...props
}) => {
  return (
    <motion.div
      whileHover={{ y: -hoverShift }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="inline-block"
    >
      <Link className={className} {...props}>
        <span className="relative inline-block">
          {children}
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-current"
            initial={{ width: '0%' }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </span>
      </Link>
    </motion.div>
  );
};

export default AnimatedLink;
