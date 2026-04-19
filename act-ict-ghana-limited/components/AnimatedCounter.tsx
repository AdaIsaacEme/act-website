import React, { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
}

/**
 * AnimatedCounter Component
 * 
 * Animates a numeric value counting from 0 to the target number
 * when the element enters the viewport.
 * 
 * Usage:
 * <AnimatedCounter value={100} duration={2} />
 */
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });
  const [displayValue, setDisplayValue] = useState(0);

  // Extract numeric value
  const numericValue = parseInt(String(value).replace(/\D/g, ''), 10);
  const suffix = String(value).replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = numericValue / (duration * 60); // Assuming 60fps
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
