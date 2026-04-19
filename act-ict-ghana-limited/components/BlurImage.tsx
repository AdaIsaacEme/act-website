import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BlurImageProps {
  src: string;
  blurDataUrl?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackSrc?: string;
}

/**
 * BlurImage Component
 * 
 * Implements the "blur-up" technique:
 * - Loads a low-res blurred placeholder first
 * - Transitions to full-quality image when loaded
 * - Smooth fade transition
 * - Better perceived performance
 * 
 * Usage (with placeholder):
 * <BlurImage 
 *   src="/images/hero/main.jpg" 
 *   blurDataUrl="data:image/jpeg;base64,/9j/..." 
 *   alt="Hero"
 * />
 * 
 * Simple usage (without placeholder):
 * <BlurImage src="/images/hero/main.jpg" alt="Hero" />
 */
const BlurImage: React.FC<BlurImageProps> = ({
  src,
  blurDataUrl,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  fallbackSrc,
}) => {
  const [isLoaded, setIsLoaded] = useState(!blurDataUrl);
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleImageLoadingComplete = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    if (fallbackSrc && imageSrc === src) {
      setImageSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Blurred placeholder - only show if we have one and main image not loaded */}
      {blurDataUrl && !isLoaded && (
        <img
          src={blurDataUrl}
          alt={alt}
          className={`${className} absolute inset-0`}
          aria-hidden="true"
          style={{ filter: 'blur(10px)' }}
        />
      )}

      {/* Main image - fades in when loaded */}
      <motion.img
        src={imageSrc}
        alt={alt}
        className={className}
        onLoad={handleImageLoadingComplete}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    </div>
  );
};

export default BlurImage;
