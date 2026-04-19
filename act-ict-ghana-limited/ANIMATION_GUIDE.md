# Animation Components Implementation Guide

This guide covers how to use the premium animation components to match the **prospecgh.com** feel in your ACT-ICT website.

## Components Created

### 1. **AnimatedWrapper** - Image Hover Zoom
Wraps images/cards with smooth zoom on hover (overflow-hidden prevents overflow).

**Basic Usage:**
```tsx
import AnimatedWrapper from '@/components/AnimatedWrapper';

<AnimatedWrapper hoverScale={1.1} transitionDuration={0.6}>
  <img src="/images/product.jpg" alt="Product" className="w-full h-auto" />
</AnimatedWrapper>
```

**Props:**
- `hoverScale` (number, default: 1.1) - Scale factor on hover
- `transitionDuration` (number, default: 0.6) - Animation duration in seconds
- `className` (string) - Additional Tailwind classes

**Real-world Example (Product Card):**
```tsx
import AnimatedWrapper from '@/components/AnimatedWrapper';

<div className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
  <AnimatedWrapper>
    <img 
      src="/images/supplies/item.jpg" 
      alt="Supply item" 
      className="w-full h-64 object-cover"
    />
  </AnimatedWrapper>
  <div className="p-4">
    <h3 className="font-bold">Product Name</h3>
    <p className="text-gray-600">Description</p>
  </div>
</div>
```

---

### 2. **ScrollReveal** - Fade & Slide Up Animation
Animates content when it enters the viewport (fade-in + slide-up).

**Basic Usage:**
```tsx
import ScrollReveal from '@/components/ScrollReveal';

<ScrollReveal delay={0.2}>
  <section className="py-16">
    <h2>Our Services</h2>
  </section>
</ScrollReveal>
```

**Props:**
- `delay` (number, default: 0) - Initial animation delay in seconds
- `slideDistance` (number, default: 20) - Pixel distance to slide up from
- `duration` (number, default: 0.6) - Animation duration
- `className` (string) - Pass Tailwind classes

**Real-world Example (Hero Section):**
```tsx
import ScrollReveal from '@/components/ScrollReveal';

<ScrollReveal delay={0} slideDistance={30}>
  <div className="text-center py-20">
    <h1 className="text-5xl font-bold mb-4">Welcome to ACT-ICT</h1>
    <p className="text-xl text-gray-300">Leading technology solutions</p>
  </div>
</ScrollReveal>
```

---

### 3. **StaggeredGrid** - Grid Items Pop In Sequence
Animates grid items with staggered delays for a sequential "pop-in" effect.

**Basic Usage:**
```tsx
import StaggeredGrid from '@/components/StaggeredGrid';

<StaggeredGrid staggerDelay={0.1} className="grid grid-cols-3 gap-4">
  {items.map((item) => (
    <Card key={item.id}>{item.name}</Card>
  ))}
</StaggeredGrid>
```

**Props:**
- `staggerDelay` (number, default: 0.1) - Delay between each item in seconds
- `containerDelay` (number, default: 0) - Delay before animation starts
- `duration` (number, default: 0.5) - Each item's animation duration
- `className` (string) - Grid container classes

**Real-world Example (Supplies Grid):**
```tsx
import StaggeredGrid from '@/components/StaggeredGrid';
import AnimatedWrapper from '@/components/AnimatedWrapper';

<StaggeredGrid staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {supplies.map((supply) => (
    <div key={supply.id} className="bg-white rounded-lg shadow">
      <AnimatedWrapper hoverScale={1.05}>
        <img 
          src={supply.image} 
          alt={supply.name}
          className="w-full h-48 object-cover"
        />
      </AnimatedWrapper>
      <div className="p-4">
        <h3 className="font-bold">{supply.name}</h3>
      </div>
    </div>
  ))}
</StaggeredGrid>
```

---

### 4. **AnimatedButton** - Micro-Interactions
Button with hover scale, tap animation, and smooth transitions.

**Basic Usage:**
```tsx
import AnimatedButton from '@/components/AnimatedButton';

<AnimatedButton 
  className="bg-blue-600 text-white px-6 py-2 rounded-lg"
  hoverScale={1.05}
>
  Click Me
</AnimatedButton>
```

**Props:**
- `hoverScale` (number, default: 1.05) - Scale on hover
- `transitionDuration` (number, default: 0.3) - Animation duration
- `className` (string) - Button styling

**Real-world Example (CTA Button):**
```tsx
import AnimatedButton from '@/components/AnimatedButton';

<AnimatedButton 
  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-lg transition-all"
>
  Get in Touch →
</AnimatedButton>
```

---

### 5. **AnimatedLink** - Navigation Link Animation
Navigation links with smooth underline and subtle lift animation.

**Basic Usage:**
```tsx
import AnimatedLink from '@/components/AnimatedLink';

<AnimatedLink to="/services" className="text-blue-600 hover:text-blue-800">
  Services
</AnimatedLink>
```

**Props:**
- `hoverShift` (number, default: 2) - Pixel distance to lift on hover
- `className` (string) - Link styling

---

### 6. **BlurImage** - Blur-Up Loading Technique
Loads images with low-res blur placeholder, transitions to full quality.

**Basic Usage (without placeholder):**
```tsx
import BlurImage from '@/components/BlurImage';

<BlurImage 
  src="/images/hero/main.jpg" 
  alt="Hero image"
  className="w-full h-96 object-cover"
/>
```

**Usage (with blur placeholder):**
```tsx
import BlurImage from '@/components/BlurImage';

<BlurImage 
  src="/images/hero/main.jpg"
  blurDataUrl="data:image/jpeg;base64/9j/4AAQSkZJRgABAQEA..." // low-res encoded image
  alt="Hero image"
  className="w-full h-96 object-cover"
  containerClassName="rounded-lg overflow-hidden"
/>
```

**Props:**
- `src` (string) - Full image URL
- `blurDataUrl` (string, optional) - Base64-encoded low-res placeholder
- `alt` (string) - Alt text
- `className` (string) - Image classes
- `containerClassName` (string) - Container div classes
- `fallbackSrc` (string, optional) - Fallback image if main fails

---

### 7. **ImageWithFallbackEnhanced** - Enhanced Version of Original
Extends the original ImageWithFallback with blur-up and fade-in animations.

**Basic Usage:**
```tsx
import ImageWithFallbackEnhanced from '@/components/ImageWithFallbackEnhanced';

<ImageWithFallbackEnhanced
  src="/images/about/team.jpg"
  alt="Team photo"
  enableBlurUp={true}
  blurDataUrl="data:image/jpeg;base64/9j/..."
/>
```

**Props:**
- `src` (string) - Primary image
- `enableBlurUp` (boolean, default: false) - Enable blur-up technique
- `blurDataUrl` (string) - Low-res placeholder
- All props from original ImageWithFallback

---

## Advanced Examples

### Complete Product Card with All Animations

```tsx
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import BlurImage from '@/components/BlurImage';
import AnimatedButton from '@/components/AnimatedButton';

const ProductCard = ({ product, index }) => (
  <ScrollReveal delay={index * 0.1}>
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200">
      <AnimatedWrapper hoverScale={1.08} transitionDuration={0.7}>
        <BlurImage
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
          blurDataUrl={product.blurredImage}
        />
      </AnimatedWrapper>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        <AnimatedButton
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
          hoverScale={1.03}
        >
          Learn More
        </AnimatedButton>
      </div>
    </div>
  </ScrollReveal>
);
```

### Section with Staggered Content Grid

```tsx
import StaggeredGrid from '@/components/StaggeredGrid';
import ScrollReveal from '@/components/ScrollReveal';

const ServicesSection = ({ services }) => (
  <ScrollReveal>
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Our Services
        </h2>
        
        <StaggeredGrid 
          staggerDelay={0.12} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  </ScrollReveal>
);
```

---

## Tailwind Classes for Animation Support

Add these to your `index.css` for enhanced animation control:

```css
/* Overflow control for image zoom effects */
.overflow-hidden {
  overflow: hidden;
}

/* Smooth timing functions */
.ease-out-smooth {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.ease-in-smooth {
  transition-timing-function: cubic-bezier(0.7, 0, 0.84, 0);
}

/* Transition durations for animations */
.duration-slow {
  transition-duration: 700ms;
}

.duration-fast {
  transition-duration: 300ms;
}

/* Image loading state */
.blur-sm-animation {
  filter: blur(10px);
  animation: blurRemove 0.6s ease-out forwards;
}

@keyframes blurRemove {
  from {
    filter: blur(10px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
}

/* Scale transitions */
.scale-on-hover {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.scale-on-hover:hover {
  transform: scale(1.1);
}
```

---

## Integration Checklist

- [ ] Install Framer Motion: `npm install framer-motion`
- [ ] Copy all animation components to `/components/`
- [ ] Copy `useScrollReveal` hook to `/hooks/`
- [ ] Add CSS animations to `index.css`
- [ ] Import components in pages where needed
- [ ] Replace `<img>` tags with `BlurImage` or `ImageWithFallbackEnhanced`
- [ ] Wrap image containers with `AnimatedWrapper`
- [ ] Wrap sections with `ScrollReveal`
- [ ] Wrap grid items parent with `StaggeredGrid`
- [ ] Replace buttons with `AnimatedButton`
- [ ] Replace nav links with `AnimatedLink`

---

## Performance Tips

1. **Use `once={true}`** in ScrollReveal to trigger animation only once
2. **Lazy load blur placeholders** for large images
3. **Stagger delays** of 0.08-0.12s feel natural
4. **Transition durations** of 0.5-0.7s feel premium, not jumpy
5. **Use viewport margin** (`margin: '0px 0px -50px 0px'`) to trigger slightly before element appears

---

## Browser Support

All components use Framer Motion which supports:
- Chrome/Edge (all versions)
- Firefox (all versions)
- Safari 12.1+
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

---

## Customization

Feel free to adjust:
- **hoverScale**: Increase for more dramatic zoom (1.15-1.2 for strong effect)
- **transitionDuration**: Increase for slower, more emphatic animations
- **staggerDelay**: Decrease for faster sequential reveals
- **slideDistance**: Increase for more pronounced slide-up effect

All components are designed to be wrapped around your existing Tailwind elements without changing layout or content.
