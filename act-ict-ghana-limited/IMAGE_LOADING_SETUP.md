# Local Image Loading Guide - ACT-ICT Ghana Website

## Overview

Your React + Vite application is now configured to load images from local folders instead of placeholder URLs. All `picsum.photos` URLs have been removed and replaced with proper local image paths.

## Folder Structure Created

```
act-ict-ghana-limited/
└── public/
    └── images/
        ├── about/              # About page images
        │   └── cisco-router-hack.jpg  (main image for company story)
        ├── hero/               # Hero carousel images
        │   ├── slide-1.jpg     (Leading Technology Solutions)
        │   ├── slide-2.jpg     (Platinum Partner of Motorola)
        │   └── slide-3.jpg     (Engineering Excellence)
        ├── divisions/          # Division-specific images
        │   ├── act-ict.jpg     (ACT-ICT division card)
        │   ├── act-global.jpg  (ACTGlobal division card)
        │   ├── act-ict-1.jpg   (Radio Communications)
        │   ├── act-ict-2.jpg   (Network Infrastructure)
        │   ├── act-ict-3.jpg   (Video Surveillance)
        │   ├── act-global-1.jpg (Industrial LED Lights)
        │   ├── act-global-2.jpg (LED Mobile Worklamps)
        │   ├── act-global-3.jpg (Safety Equipment)
        │   └── act-global-4.jpg (Industrial Tires)
        ├── projects/           # Project showcase images
        │   ├── ug-medical-centre.jpg
        │   ├── weather-stations.jpg
        │   ├── leaky-feeder.jpg
        │   ├── tetra-installation.jpg
        │   ├── weather-balloon.jpg
        │   ├── perseus-fence.jpg
        │   └── default.jpg     (default for new projects)
        └── partners/           # Partner logos
            ├── motorola-solutions.png
            ├── cisco.png
            ├── beka-schreder.png
            └── gm-afcon.png
```

## Files Updated

### 1. **Context Layer** (`context/ContentContext.tsx`)

- **Hero slides**: Updated all 3 carousel images to `/images/hero/slide-*.jpg`
- **Projects**: Updated all 6 project images to use proper paths
- **Partners**: Updated all 4 partner logos to `/images/partners/`

### 2. **Pages**

- **About.tsx** (Line 42): Updated image to `/images/about/cisco-router-hack.jpg`
- **Home.tsx** (Division cards): Updated to `/images/divisions/act-ict.jpg` and `/images/divisions/act-global.jpg`
- **DivisionACTICT.tsx**: Updated 3 section images with error handling
- **DivisionACTGlobal.tsx**: Updated 4 product images with error handling
- **Admin.tsx**: Set default project image to `/images/projects/default.jpg`

### 3. **New Component** (`components/ImageWithFallback.tsx`)

- Reusable component for images with fallback support
- Handles missing images gracefully
- Logs errors to console for debugging

## Image Path Conventions

### Vite + React Image Paths

In Vite, images in the `public/` folder are served from the root of your site:

```tsx
// ✅ CORRECT - Images in public/images/
<img src="/images/hero/slide-1.jpg" alt="Hero Slide 1" />

// ❌ INCORRECT - Don't use ./public/ or other prefixes
<img src="public/images/hero/slide-1.jpg" alt="Hero Slide 1" />
<img src="./images/hero/slide-1.jpg" alt="Hero Slide 1" />
```

### Why Not Use `import` Statements?

While Vite supports importing images as modules for better optimization:

```tsx
import slide1 from "../public/images/hero/slide-1.jpg";
<img src={slide1} alt="Hero 1" />;
```

We're using direct paths for simplicity because:

- Images are served from `public/` which doesn't get bundled
- Direct paths work immediately without import overhead
- Easier to manage for content updates

## Error Handling Pattern

All images now have error handling:

```tsx
<img
  src="/images/projects/ug-medical-centre.jpg"
  alt="Project Title"
  className="w-full h-full object-cover"
  onError={(e) => {
    console.error("Failed to load image");
    e.currentTarget.style.display = "none"; // Hide broken image
  }}
/>
```

### Alternative: Use the ImageWithFallback Component

For more sophisticated error handling:

```tsx
import ImageWithFallback from "../components/ImageWithFallback";

<ImageWithFallback
  src="/images/projects/ug-medical-centre.jpg"
  alt="Project Title"
  className="w-full h-full object-cover"
  fallbackSrc="/images/projects/default.jpg"
/>;
```

## Adding New Images

1. **Place image file** in the appropriate folder under `public/images/`
2. **Reference in code**:
   ```tsx
   <img src="/images/category/image-name.jpg" alt="Description" />
   ```
3. **Add error handling** for robustness:
   ```tsx
   onError={(e) => { e.currentTarget.style.display = 'none'; }}
   ```

## Image Format Recommendations

- **Hero/Large images**: JPG (compressed, good for large images)
- **Partner logos**: PNG (transparent backgrounds)
- **Product images**: JPG or PNG depending on quality needs
- **Resolution**: Optimize for web (typically 1920x1080 for hero, 800x600 for projects)

## Next Steps

1. **Add actual images** to the `public/images/` folders
2. **Update metadata.json** or admin panel if you manage images dynamically
3. **Test in development**: `npm run dev` to verify images load correctly
4. **Build for production**: `npm run build` - Vite will serve images from public/ folder

## Deployment Considerations

When deploying:

- All images in `public/` are served as static assets
- No build processing needed for images in `public/`
- Ensure your hosting serves the `public/` folder at the root
- If using a subdirectory, you may need to adjust paths (contact your hosting provider)

## Troubleshooting

### Images not loading in development

- Check browser console for 404 errors
- Verify image path starts with `/` (absolute from public root)
- Ensure image file exists in `public/images/` folder
- Check file extensions match (case-sensitive on Linux/Mac)

### Images work in dev but not in production

- Verify hosting serves `public/` folder at root
- Check if your domain uses a subdirectory
- Ensure image file paths don't have spaces (use hyphens instead)

### Logs showing image failures

- Images will log to console when they fail to load
- Check that the filename matches exactly (case-sensitive)
- For `.png` files, ensure they have transparency if needed

## CSS Image Loading Tips

For background images with Tailwind:

```tsx
<div style={{ backgroundImage: 'url(/images/hero/slide-1.jpg)' }} />

// Or use bg-cover utility with background-image property
<div
  className="bg-cover bg-center"
  style={{ backgroundImage: 'url(/images/hero/slide-1.jpg)' }}
/>
```

## References

- [Vite Asset Handling Docs](https://vitejs.dev/guide/assets.html)
- [React Image Best Practices](https://react.dev/learn/rendering-lists#keeping-list-items-in-order)
- [Image Optimization Tips](https://web.dev/optimize-images/)
