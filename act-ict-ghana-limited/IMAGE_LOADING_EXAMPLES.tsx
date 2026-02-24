/**
 * IMAGE LOADING EXAMPLES
 *
 * This file demonstrates the correct way to load images in your React + Vite app
 * after the local image setup.
 */

// ============================================================================
// EXAMPLE 1: Basic Image (Simple img tag)
// ============================================================================

export function BasicImageExample() {
  return (
    <div>
      <h2>Basic Image Loading</h2>
      <img
        src="/images/about/cisco-router-hack.jpg"
        alt="Cisco Router"
        className="w-full h-96 object-cover rounded-lg"
      />
    </div>
  );
}

// ============================================================================
// EXAMPLE 2: Image with Error Handling
// ============================================================================

export function ImageWithErrorHandling() {
  return (
    <div>
      <h2>Image with Error Handling</h2>
      <img
        src="/images/projects/ugmc.jpg"
        alt="UG Medical Centre Project"
        className="w-full h-96 object-cover rounded-lg"
        onError={(e) => {
          console.error("Failed to load image: /images/projects/ugmc.jpg");
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

// ============================================================================
// EXAMPLE 3: Using the ImageWithFallback Component (Recommended)
// ============================================================================

// NOTE: Uncomment this import when using the component
// import ImageWithFallback from "../components/ImageWithFallback";

export function ImageWithFallbackExample() {
  // When using the ImageWithFallback component:
  // import ImageWithFallback from "../components/ImageWithFallback";

  return (
    <div>
      <h2>Using ImageWithFallback Component</h2>
      {/* <ImageWithFallback
        src="/images/projects/weather-stations.jpg"
        alt="Weather Stations Project"
        fallbackSrc="/images/projects/default.jpg"
        className="w-full h-96 object-cover rounded-lg"
      /> */}
      {/* Or use the simple approach with error handling: */}
      <img
        src="/images/projects/weather-stations.jpg"
        alt="Weather Stations Project"
        className="w-full h-96 object-cover rounded-lg"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

// ============================================================================
// EXAMPLE 4: Dynamic Image Path in Loop
// ============================================================================

export function DynamicImageInLoop() {
  const projects = [
    { id: 1, title: "Project 1", filename: "ug-medical-centre" },
    { id: 2, title: "Project 2", filename: "weather-stations" },
    { id: 3, title: "Project 3", filename: "leaky-feeder" },
  ];

  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative h-48 rounded-lg overflow-hidden"
        >
          <img
            src={`/images/projects/${project.filename}.jpg`}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// EXAMPLE 5: Responsive Hero Image
// ============================================================================

export function ResponsiveHeroImage() {
  return (
    <div className="relative h-screen max-h-[700px] w-full overflow-hidden">
      <img
        src="/images/hero/slide-1.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          console.error("Hero image failed to load");
          e.currentTarget.style.display = "none";
        }}
      />
      {/* Overlay and content go here */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
    </div>
  );
}

// ============================================================================
// EXAMPLE 6: Background Image with CSS
// ============================================================================

export function BackgroundImageExample() {
  return (
    <div
      className="w-full h-96 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: "url(/images/divisions/act-ict.jpg)",
        backgroundAttachment: "fixed", // Parallax effect
      }}
    >
      {/* Content overlay */}
      <div className="w-full h-full bg-black/40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">ACT-ICT Division</h1>
      </div>
    </div>
  );
}

// ============================================================================
// EXAMPLE 7: Partner Logo in Carousel
// ============================================================================

export function PartnerLogoExample() {
  const partners = [
    { id: 1, name: "Motorola Solutions", logoFile: "motorola-solutions.png" },
    { id: 2, name: "CISCO", logoFile: "cisco.png" },
    { id: 3, name: "BEKA Schréder", logoFile: "beka-schreder.png" },
  ];

  return (
    <div className="flex gap-8">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="h-16 flex items-center justify-center bg-white rounded-lg p-4"
        >
          <img
            src={`/images/partners/${partner.logoFile}`}
            alt={partner.name}
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              console.error(`Partner logo failed: ${partner.logoFile}`);
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// EXAMPLE 8: Image with Hover Scale Effect
// ============================================================================

export function HoverScaleImageExample() {
  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden">
      <img
        src="/images/projects/tetra-installation.jpg"
        alt="TETRA Installation"
        className="w-full h-full object-cover transition duration-500 hover:scale-110"
      />
    </div>
  );
}

// ============================================================================
// EXAMPLE 9: Loading State (Skeleton)
// ============================================================================

import { useState } from "react";

export function ImageWithLoadingState() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
      )}
      <img
        src="/images/projects/perseus-fence.jpg"
        alt="Perseus Fence"
        className="w-full h-full object-cover"
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          setIsLoaded(false);
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

// ============================================================================
// EXAMPLE 10: Image with Overlay and Text
// ============================================================================

export function ImageWithOverlay() {
  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden group">
      <img
        src="/images/divisions/act-global.jpg"
        alt="ACTGlobal"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
        <div>
          <h3 className="text-2xl font-bold text-white">ACTGlobal</h3>
          <p className="text-gray-200">Industrial solutions and equipment</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MIGRATION NOTES
// ============================================================================

/*
BEFORE (Using Placeholder URLs):
  <img src="https://picsum.photos/800/600?random=10" alt="Project" />

AFTER (Using Local Images):
  <img src="/images/projects/ug-medical-centre.jpg" alt="Project" />

KEY DIFFERENCES:
1. Images are served from public/images/ folder
2. No external API calls (faster, reliable, offline capable)
3. Images are under your control (can be updated anytime)
4. Proper error handling prevents broken images from displaying
5. Better for SEO and performance (Vite optimization)

BEST PRACTICES:
✓ Always use absolute paths starting with /
✓ Include alt text for accessibility
✓ Add error handling for missing images
✓ Use appropriate image formats (JPG for photos, PNG for logos)
✓ Optimize image sizes before uploading
✓ Name files descriptively and consistently
✓ Keep images organized in categorized folders
*/
