import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ImageWithFallbackEnhancedProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  containerClassName?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  blurDataUrl?: string;
  enableBlurUp?: boolean;
}

/**
 * Enhanced ImageWithFallback Component
 * 
 * Builds on the original ImageWithFallback with premium animations:
 * - Blur-up loading technique (optional)
 * - Smooth fade-in on load
 * - Proper fallback handling
 * - Works with AnimatedWrapper for hover effects
 * 
 * Usage:
 * <ImageWithFallbackEnhanced
 *   src="/images/about/team.jpg"
 *   alt="Team photo"
 *   enableBlurUp={true}
 *   blurDataUrl="data:image/jpeg;base64,..."
 * />
 */
const ImageWithFallbackEnhanced: React.FC<ImageWithFallbackEnhancedProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  containerClassName = '',
  onError,
  blurDataUrl,
  enableBlurUp = false,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(!enableBlurUp || !blurDataUrl);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Failed to load image: ${imageSrc}`);

    if (fallbackSrc && imageSrc === src) {
      setImageSrc(fallbackSrc);
    } else {
      setHasError(true);
      e.currentTarget.style.display = 'none';
    }

    if (onError) {
      onError(e);
    }
  };

  if (hasError) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Blur placeholder */}
      {enableBlurUp && blurDataUrl && !isLoaded && (
        <img
          src={blurDataUrl}
          alt={alt}
          className={`${className} absolute inset-0`}
          aria-hidden="true"
          style={{ filter: 'blur(10px)' }}
        />
      )}

      {/* Main image with fade-in */}
      <motion.img
        src={imageSrc}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    </div>
  );
};

export default ImageWithFallbackEnhanced;
