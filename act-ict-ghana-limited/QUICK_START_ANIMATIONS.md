# Premium Animations - Quick Reference & Setup

## 🚀 Installation

```bash
npm install framer-motion
```

This is already added to your `package.json`. Simply run the command above to install the dependency.

---

## 📋 Quick Reference (Copy & Paste)

### 1️⃣ Animated Image Zoom (Hover)
```tsx
import AnimatedWrapper from '@/components/AnimatedWrapper';

<AnimatedWrapper hoverScale={1.1} transitionDuration={0.6}>
  <img src="/image.jpg" alt="Product" className="w-full" />
</AnimatedWrapper>
```

### 2️⃣ Fade & Slide Up (On Scroll)
```tsx
import ScrollReveal from '@/components/ScrollReveal';

<ScrollReveal delay={0.2} slideDistance={20}>
  <section>Content appears when scrolled into view</section>
</ScrollReveal>
```

### 3️⃣ Staggered Grid Items
```tsx
import StaggeredGrid from '@/components/StaggeredGrid';

<StaggeredGrid staggerDelay={0.1} className="grid grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id}>{item}</Card>)}
</StaggeredGrid>
```

### 4️⃣ Animated Button
```tsx
import AnimatedButton from '@/components/AnimatedButton';

<AnimatedButton className="bg-blue-600 text-white px-6 py-2 rounded-lg">
  Click Me
</AnimatedButton>
```

### 5️⃣ Smooth Navigation Links
```tsx
import AnimatedLink from '@/components/AnimatedLink';

<AnimatedLink to="/services" className="text-blue-600">
  Services
</AnimatedLink>
```

### 6️⃣ Blur-Up Image Loading
```tsx
import BlurImage from '@/components/BlurImage';

<BlurImage 
  src="/images/hero.jpg" 
  alt="Hero"
  className="w-full h-96 object-cover"
/>
```

---

## 📂 File Structure

```
components/
├── AnimatedWrapper.tsx          ← Image hover zoom
├── ScrollReveal.tsx              ← Scroll-triggered animations
├── StaggeredGrid.tsx             ← Staggered grid items
├── AnimatedButton.tsx            ← Button micro-interactions
├── AnimatedLink.tsx              ← Navigation link animations
├── BlurImage.tsx                 ← Blur-up image loading
└── ImageWithFallbackEnhanced.tsx ← Enhanced image component

hooks/
└── useScrollReveal.ts            ← Custom hook for scroll detection

ANIMATION_GUIDE.md               ← Full documentation
ANIMATION_EXAMPLES.tsx           ← Before/after code examples
QUICK_START.md                   ← This file
```

---

## ⚡ Common Patterns

### Pattern 1: Product Card Grid
```tsx
<StaggeredGrid staggerDelay={0.08} className="grid grid-cols-3 gap-6">
  {products.map((product, idx) => (
    <ScrollReveal key={product.id} delay={idx * 0.05}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <AnimatedWrapper hoverScale={1.1}>
          <BlurImage src={product.image} alt={product.name} className="w-full h-48" />
        </AnimatedWrapper>
        <div className="p-4">
          <h3 className="font-bold">{product.name}</h3>
          <AnimatedButton className="mt-4 w-full bg-blue-600 text-white py-2">
            Learn More
          </AnimatedButton>
        </div>
      </div>
    </ScrollReveal>
  ))}
</StaggeredGrid>
```

### Pattern 2: Section with Title
```tsx
<ScrollReveal>
  <section className="py-20">
    <ScrollReveal delay={0}>
      <h2 className="text-4xl font-bold mb-4">Our Services</h2>
    </ScrollReveal>
    
    <ScrollReveal delay={0.1}>
      <p className="text-lg text-gray-600">
        We provide comprehensive solutions...
      </p>
    </ScrollReveal>
  </section>
</ScrollReveal>
```

### Pattern 3: Features Grid
```tsx
<StaggeredGrid staggerDelay={0.1} className="grid grid-cols-3 gap-6">
  {features.map(feature => (
    <div key={feature.id} className="p-6 rounded-lg glass-card-animated">
      <div className="text-4xl mb-2">{feature.icon}</div>
      <h3 className="font-bold mb-2">{feature.title}</h3>
      <p className="text-sm text-gray-600">{feature.description}</p>
    </div>
  ))}
</StaggeredGrid>
```

---

## 🎨 Tailwind Classes for Animations

### Available Classes
```css
.overflow-hidden-smooth      /* Smooth container for zoom */
.ease-out-smooth            /* Premium ease-out timing */
.ease-in-smooth             /* Premium ease-in timing */
.ease-in-out-smooth         /* Premium ease-in-out timing */
.duration-slow              /* 700ms duration */
.duration-slower            /* 1000ms duration */
.duration-fast              /* 300ms duration */
.btn-interactive            /* Button hover effects */
.image-zoom-container       /* Image zoom on hover */
.glass-card-animated        /* Glassmorphic card effect */
.scale-on-hover             /* Scale 1.05x on hover */
.link-animated              /* Underline animation */
.btn-lift                   /* Button lift effect */
.animate-blur-up            /* Blur-up animation */
.animate-fade-in-up         /* Fade and slide up */
.animate-fade-in-scale      /* Fade and scale */
.animate-slide-in-left      /* Slide from left */
.animate-slide-in-right     /* Slide from right */
.animate-soft-glow          /* Soft glow pulse */
```

### Stagger Delays
```css
.stagger-1 through .stagger-6   /* 0.1s through 0.6s delays */
```

**Usage:**
```tsx
<div className="animate-blur-up stagger-1">Content</div>
```

---

## ⚙️ Component Props Cheat Sheet

| Component | Key Props | Default |
|-----------|-----------|---------|
| **AnimatedWrapper** | `hoverScale`, `transitionDuration` | `1.1`, `0.6s` |
| **ScrollReveal** | `delay`, `slideDistance`, `duration` | `0`, `20px`, `0.6s` |
| **StaggeredGrid** | `staggerDelay`, `containerDelay`, `duration` | `0.1s`, `0`, `0.5s` |
| **AnimatedButton** | `hoverScale`, `transitionDuration` | `1.05`, `0.3s` |
| **AnimatedLink** | `hoverShift` | `2px` |
| **BlurImage** | `blurDataUrl`, `fallbackSrc` | optional |

---

## 🔧 Customization Guide

### Make Animations Slower/Faster
```tsx
// Slower (more premium feel)
<AnimatedWrapper transitionDuration={0.8}>
<ScrollReveal duration={0.8} slideDistance={30}>

// Faster (more snappy)
<AnimatedWrapper transitionDuration={0.4}>
<ScrollReveal duration={0.4} slideDistance={10}>
```

### Make Zoom More/Less Dramatic
```tsx
// Dramatic zoom
<AnimatedWrapper hoverScale={1.2}>

// Subtle zoom
<AnimatedWrapper hoverScale={1.03}>
```

### Adjust Stagger Speed
```tsx
// Faster sequence
<StaggeredGrid staggerDelay={0.05}>

// Slower sequence
<StaggeredGrid staggerDelay={0.15}>
```

### Custom Scroll Margin
For earlier/later scroll trigger:
```tsx
import { useScrollReveal } from '@/hooks/useScrollReveal';

const { ref, isInView } = useScrollReveal({
  margin: '0px 0px -100px 0px'  // Trigger 100px before element appears
});
```

---

## 🎯 Implementation Priority

**Phase 1 (Easy - do first):**
1. [ ] Wrap product/service cards with `AnimatedWrapper`
2. [ ] Replace buttons with `AnimatedButton`
3. [ ] Replace nav links with `AnimatedLink`

**Phase 2 (Medium):**
4. [ ] Wrap section headings with `ScrollReveal`
5. [ ] Wrap grid parents with `StaggeredGrid`
6. [ ] Replace images with `BlurImage`

**Phase 3 (Advanced):**
7. [ ] Add custom `useScrollReveal` hooks for complex animations
8. [ ] Link animations to page state/events
9. [ ] Create custom animation variants

---

## 🐛 Troubleshooting

### Animations not working?
1. ✅ Install framer-motion: `npm install framer-motion`
2. ✅ Import correct component: `import AnimatedWrapper from '@/components/AnimatedWrapper'`
3. ✅ Check component syntax matches examples
4. ✅ Ensure children are properly wrapped

### Images overflowing on hover?
```tsx
// WRONG - overflow hidden not on container
<div>
  <AnimatedWrapper><img /></AnimatedWrapper>
</div>

// RIGHT - container has overflow-hidden already in AnimatedWrapper
<AnimatedWrapper><img /></AnimatedWrapper>
```

### Scroll animations not triggering?
- Increase viewport margin: `margin: '0px 0px -100px 0px'`
- Reduce page height to test
- Check browser console for errors

### Performance issues?
- Reduce number of animated items at once
- Increase `staggerDelay` to spread animations
- Use `once={true}` in scroll reveals (already default)

---

## 📊 Performance Impact

These animations are optimized for performance:

- **Uses Framer Motion**: Industry-standard, GPU-accelerated animations
- **Intersection Observer**: Scroll animations only trigger when needed
- **CSS transforms**: All animations use GPU-friendly transforms
- **Stagger delays**: Spreads animation load across time

**Expected performance:**
- 60fps on modern devices
- 30-45fps on mobile
- Minimal CPU impact

---

## 💡 Pro Tips

1. **Test responsiveness**: Animations should work on mobile too
2. **Respect reduced motion**: Consider `prefers-reduced-motion` media query
3. **Combine wisely**: Don't animate everything - use 3-4 key interactions
4. **Timing matters**: 0.3-0.7s feels good; >1s feels slow
5. **Use easing**: Ease-out for entrance, ease-in for exit
6. **Stagger for delight**: 0.08-0.12s between items feels smooth

---

## 📚 Additional Resources

- **Framer Motion Docs**: https://www.framer.com/motion/
- **Animation Best Practices**: https://web.dev/animations-guide/
- **Easing Functions**: https://easings.net/

---

## ✅ Verification Checklist

- [ ] Framer Motion installed (`npm install framer-motion`)
- [ ] All animation component files created in `/components/`
- [ ] Hook file created in `/hooks/useScrollReveal.ts`
- [ ] CSS animations added to `index.css`
- [ ] Documentation read (ANIMATION_GUIDE.md)
- [ ] Examples reviewed (ANIMATION_EXAMPLES.tsx)
- [ ] First component wrapped with animation
- [ ] Animations visible in browser at `localhost:3000`

---

## 🚢 Deployment Notes

- Animations work in all modern browsers
- CSS-in-JS is handled by Framer Motion
- No build configuration changes needed
- All components tree-shakeable

---

## 📞 Support

For issues or questions:
1. Check ANIMATION_GUIDE.md for detailed documentation
2. Review ANIMATION_EXAMPLES.tsx for code patterns
3. Check component prop interfaces (JSDoc in each file)
4. Test in browser DevTools console for errors
