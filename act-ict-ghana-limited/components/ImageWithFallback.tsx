import React, { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

/**
 * ImageWithFallback Component
 *
 * A reusable image component that handles missing images gracefully.
 * - Displays the image from `src`
 * - If the image fails to load, either shows the fallback image or hides the element
 * - Logs errors to console for debugging
 *
 * @param src - Primary image source (should be a local path like '/images/about/...')
 * @param alt - Alternative text for accessibility
 * @param fallbackSrc - Optional fallback image URL (if not provided, image is hidden)
 * @param className - CSS classes to apply
 * @param onError - Optional callback for error handling
 */
const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  className = "",
  onError,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Failed to load image: ${imageSrc}`);

    // If we have a fallback and haven't tried it yet, use it
    if (fallbackSrc && imageSrc === src) {
      setImageSrc(fallbackSrc);
    } else {
      // Otherwise hide the image
      setHasError(true);
      e.currentTarget.style.display = "none";
    }

    // Call the provided onError callback if it exists
    if (onError) {
      onError(e);
    }
  };

  if (hasError) {
    return null;
  }

  return (
    <img src={imageSrc} alt={alt} className={className} onError={handleError} />
  );
};

export default ImageWithFallback;
