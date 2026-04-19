# Advanced Animation Patterns for Premium Feel

## Premium Design Principles (Like prospecgh.com)

The animations you're implementing follow these premium principles:

1. **Subtle, not flashy**: Animations enhance, not distract
2. **Purposeful motion**: Every animation serves a purpose
3. **Smooth easing**: Cubic-bezier(0.16, 1, 0.3, 1) for premium feel
4. **Staggered reveals**: Sequential animations feel intentional
5. **Hover responsiveness**: Immediate, smooth feedback to user interaction

---

## 🎭 Animation Patterns by Page Section

### Hero Section (Above Fold)
**Goal**: Capture attention with elegant, not aggressive animations

```tsx
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedButton from '@/components/AnimatedButton';

export const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
    {/* Background blur decoration */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-4xl text-center px-4">
      {/* Main heading - short delay, longer slide distance */}
      <ScrollReveal delay={0.1} slideDistance={40}>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Business Today
          </span>
        </h1>
      </ScrollReveal>

      {/* Subheading - medium delay */}
      <ScrollReveal delay={0.25} slideDistance={30}>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Cutting-edge technology solutions designed for success
        </p>
      </ScrollReveal>

      {/* CTA Buttons - longer delay for impact */}
      <ScrollReveal delay={0.4} slideDistance={20}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AnimatedButton className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg btn-lift">
            Get Started
          </AnimatedButton>
          <AnimatedButton className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg border border-white/20 btn-lift">
            Learn More
          </AnimatedButton>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
```

**Key Points:**
- Stagger delays: 0.1s → 0.25s → 0.4s (creates sense of depth)
- Longer slideDistance for hero (40px) = more dramatic entry
- Button scale is modest (1.05) for premium feel
- Uses gradient text for visual interest

---

### Services/Features Section
**Goal**: Introduce features with visual rhythm

```tsx
import StaggeredGrid from '@/components/StaggeredGrid';
import ScrollReveal from '@/components/ScrollReveal';

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export const ServicesSection = ({ services }: { services: ServiceItem[] }) => (
  <ScrollReveal>
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0} slideDistance={20}>
            <div className="inline-block bg-blue-600/20 border border-blue-500/50 rounded-full px-4 py-1 mb-4">
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wide">
                Our Solutions
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} slideDistance={25}>
            <h2 className="text-5xl font-bold text-white mb-6">
              Enterprise-Grade Solutions
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} slideDistance={20}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tailored technology solutions designed to scale with your business
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid with Stagger */}
        <StaggeredGrid
          staggerDelay={0.08}
          containerDelay={0.2}
          duration={0.6}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-${service.color}-500/50 overflow-hidden transition-all duration-300`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-${service.color}-600/0 to-${service.color}-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div className={`text-5xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Accent line */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-${service.color}-500 to-transparent w-0 group-hover:w-full transition-all duration-300`}
              />
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  </ScrollReveal>
);
```

**Key Points:**
- Section header staggered separately (creates anticipation)
- Grid items stagger after header reveal
- Each card has color-coded accent
- Icon scales on hover (subtle 1.1x)
- Accent line animates on hover (CSS class helper)

---

### Product/Portfolio Grid
**Goal**: Professional showcase with immediate visual feedback

```tsx
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import StaggeredGrid from '@/components/StaggeredGrid';
import BlurImage from '@/components/BlurImage';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  blurredImage?: string;
  description: string;
}

export const PortfolioGrid = ({ items }: { items: PortfolioItem[] }) => (
  <ScrollReveal className="py-24 bg-white">
    <section className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <ScrollReveal delay={0} slideDistance={20}>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} slideDistance={20}>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Successful projects across various industries and scales
          </p>
        </ScrollReveal>
      </div>

      {/* Grid */}
      <StaggeredGrid
        staggerDelay={0.06}
        containerDelay={0.15}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {items.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 0.03}>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {/* Image Container */}
              <AnimatedWrapper
                hoverScale={1.08}
                transitionDuration={0.7}
                className="relative h-64 w-full bg-gray-200"
              >
                <BlurImage
                  src={item.image}
                  blurDataUrl={item.blurredImage}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  containerClassName="h-full"
                />
              </AnimatedWrapper>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-blue-400 text-sm font-semibold uppercase tracking-wide mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </StaggeredGrid>
    </section>
  </ScrollReveal>
);
```

**Key Points:**
- Double stagger: Grid stagger + individual ScrollReveal stagger
- Image zoom on hover (1.08x for subtle effect)
- Content slides up from bottom on hover
- Blur-up image loading for perceived performance
- Shadow intensifies on hover

---

### Client Testimonials Section
**Goal**: Build trust through rotating social proof

```tsx
import ScrollReveal from '@/components/ScrollReveal';
import StaggeredGrid from '@/components/StaggeredGrid';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export const TestimonialsSection = ({ testimonials }: { testimonials: Testimonial[] }) => (
  <ScrollReveal>
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0} slideDistance={20}>
            <h2 className="text-5xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1} slideDistance={20}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See what our clients have to say about their experience
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <StaggeredGrid
          staggerDelay={0.1}
          containerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold text-white group-hover:text-blue-400 transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  </ScrollReveal>
);
```

**Key Points:**
- Background decoration (blurred circles) adds depth
- Testimonials stagger in from left-to-right
- Border color animates on hover
- Author name color shifts on hover
- Star rating visible immediately (no animation needed)

---

### Call-to-Action Section
**Goal**: Convert with urgency but elegance

```tsx
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedButton from '@/components/AnimatedButton';

export const CTASection = () => (
  <ScrollReveal>
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <ScrollReveal delay={0} slideDistance={30}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} slideDistance={25}>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of businesses transforming with our solutions. 
            Schedule your free consultation today.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} slideDistance={20}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 btn-lift text-lg"
              hoverScale={1.05}
            >
              Schedule a Demo →
            </AnimatedButton>
            <AnimatedButton
              className="bg-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-400 btn-lift text-lg border-2 border-white/20"
              hoverScale={1.05}
            >
              Contact Sales
            </AnimatedButton>
          </div>
        </ScrollReveal>

        {/* Trust badge */}
        <ScrollReveal delay={0.45} slideDistance={15}>
          <div className="mt-12 flex justify-center items-center gap-4 text-blue-100">
            <span className="text-sm">✓ No credit card required</span>
            <span className="opacity-50">•</span>
            <span className="text-sm">✓ 30-minute demo</span>
            <span className="opacity-50">•</span>
            <span className="text-sm">✓ Free consultation</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </ScrollReveal>
);
```

**Key Points:**
- Animated background for visual interest (subtle)
- Progressive delays create anticipation
- Two CTA buttons (primary + secondary)
- Trust badges build credibility
- Overall longer delay sequence (0 → 0.45s)

---

## 🎯 Timing Values Reference

| Use Case | Delay | Slide Distance | Duration |
|----------|-------|---|---|
| Hero Title | 0.1s | 40px | 0.6s |
| Hero Subtitle | 0.25s | 30px | 0.6s |
| Hero CTA | 0.4s | 20px | 0.6s |
| Section Header | 0s | 20px | 0.6s |
| Section Description | 0.1s | 20px | 0.6s |
| Grid Container | 0.15s | - | - |
| Grid Items | 0.08s (stagger) | - | 0.5s |
| Card Hover Zoom | - | - | 0.7s |
| Button Hover | - | - | 0.3s |

---

## 🎨 Color Integration Pattern

Match your brand colors in animations:

```tsx
// Blue accent variants
const animationColors = {
  primary: 'from-blue-600 to-blue-700',
  accent: 'from-blue-400 to-cyan-400',
  dark: 'from-gray-900 to-gray-950',
  hover: 'hover:border-blue-500/50'
};

// Use in components
<div className={`bg-gradient-to-r ${animationColors.primary}`}>
```

---

## ✨ Complete Implementation Flow

1. **Import components** in your page
2. **Wrap sections** with ScrollReveal
3. **Wrap grids** with StaggeredGrid
4. **Wrap images** with AnimatedWrapper
5. **Replace buttons/links** with animated versions
6. **Test** scroll behavior and timing
7. **Adjust delays** based on page flow
8. **Deploy** and monitor performance

---

## 📈 Premium Feel Checklist

- [ ] All images use blur-up technique
- [ ] Buttons have lift effect on hover
- [ ] Nav links have underline animation
- [ ] Sections fade-in on scroll
- [ ] Grids stagger with 0.08-0.1s delay
- [ ] No animations feel jumpy (0.3-0.7s range)
- [ ] Hover states provide immediate feedback
- [ ] Background animations are subtle (not distracting)
- [ ] Mobile animations work smoothly
- [ ] Loading states are visible (blur-up loading)

---

This should give your ACT-ICT website the premium, professional feel matching prospecgh.com! 🚀
