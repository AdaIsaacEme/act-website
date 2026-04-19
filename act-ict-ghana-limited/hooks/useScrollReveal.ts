import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface UseScrollRevealOptions {
  once?: boolean;
  margin?: string;
  amount?: 'some' | 'all';
}

/**
 * useScrollReveal Hook
 * 
 * Simplifies scroll-triggered animations by managing intersection observer state.
 * Returns a ref to attach to your element and an isInView boolean.
 * 
 * Usage:
 * const { ref, isInView } = useScrollReveal();
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     animate={isInView ? { opacity: 1 } : { opacity: 0 }}
 *   >
 *     Content
 *   </motion.div>
 * );
 */
export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const {
    once = true,
    margin = '0px 0px -50px 0px',
    amount = 'some',
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin,
    amount,
  });

  return { ref, isInView };
};
