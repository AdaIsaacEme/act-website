/**
 * ANIMATION IMPLEMENTATION EXAMPLES
 * 
 * This file shows practical before/after examples of how to integrate
 * the premium animation components into your existing pages and components.
 * 
 * Copy these patterns to apply animations to your actual code.
 */

import React from 'react';
import AnimatedWrapper from '../components/AnimatedWrapper';
import ScrollReveal from '../components/ScrollReveal';
import StaggeredGrid from '../components/StaggeredGrid';
import AnimatedButton from '../components/AnimatedButton';
import AnimatedLink from '../components/AnimatedLink';
import BlurImage from '../components/BlurImage';
import { useScrollReveal } from '../hooks/useScrollReveal';

// ============================================================
// EXAMPLE 1: Hero Section with Scroll Reveals
// ============================================================

export const HeroExampleBefore = () => (
  <section className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-900">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to ACT-ICT</h1>
      <p className="text-xl text-blue-100 mb-8">Leading technology solutions for Ghana</p>
      <button className="bg-white text-blue-600 px-8 py-3 font-bold rounded-lg hover:bg-gray-100">
        Get Started
      </button>
    </div>
  </section>
);

export const HeroExampleAfter = () => (
  <section className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-900">
    <div className="text-center">
      <ScrollReveal delay={0} slideDistance={30}>
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to ACT-ICT</h1>
      </ScrollReveal>
      
      <ScrollReveal delay={0.15} slideDistance={20}>
        <p className="text-xl text-blue-100 mb-8">Leading technology solutions for Ghana</p>
      </ScrollReveal>
      
      <ScrollReveal delay={0.3} slideDistance={20}>
        <AnimatedButton
          className="bg-white text-blue-600 px-8 py-3 font-bold rounded-lg hover:bg-gray-100 btn-lift"
          hoverScale={1.05}
        >
          Get Started
        </AnimatedButton>
      </ScrollReveal>
    </div>
  </section>
);

// ============================================================
// EXAMPLE 2: Product/Supply Card with Zoom Effect
// ============================================================

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
}

export const ProductCardBefore = ({ product }: { product: Product }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img 
      src={product.image} 
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>
      {product.price && <p className="text-blue-600 font-bold mt-2">{product.price}</p>}
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Learn More
      </button>
    </div>
  </div>
);

export const ProductCardAfter = ({ product, index }: { product: Product; index: number }) => (
  <ScrollReveal delay={index * 0.1}>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <AnimatedWrapper hoverScale={1.08} transitionDuration={0.6}>
        <BlurImage
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          containerClassName="h-48"
        />
      </AnimatedWrapper>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
        {product.price && <p className="text-blue-600 font-bold mt-2">{product.price}</p>}
        
        <AnimatedButton
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 btn-lift"
          hoverScale={1.02}
        >
          Learn More
        </AnimatedButton>
      </div>
    </div>
  </ScrollReveal>
);

// ============================================================
// EXAMPLE 3: Product Grid with Staggered Animation
// ============================================================

export const ProductGridBefore = ({ products }: { products: Product[] }) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCardBefore key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export const ProductGridAfter = ({ products }: { products: Product[] }) => (
  <ScrollReveal className="py-16 bg-gray-50">
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal delay={0}>
          <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
        </ScrollReveal>
        
        <StaggeredGrid
          staggerDelay={0.08}
          containerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <ProductCardAfter key={product.id} product={product} index={index} />
          ))}
        </StaggeredGrid>
      </div>
    </section>
  </ScrollReveal>
);

// ============================================================
// EXAMPLE 4: Features Section with Icons and Stagger
// ============================================================

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeaturesSectionBefore = ({ features }: { features: Feature[] }) => (
  <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-950">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.id} className="p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FeaturesSectionAfter = ({ features }: { features: Feature[] }) => (
  <ScrollReveal>
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal delay={0}>
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Us</h2>
        </ScrollReveal>
        
        <StaggeredGrid
          staggerDelay={0.12}
          containerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="p-6 rounded-lg glass-card-animated hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  </ScrollReveal>
);

// ============================================================
// EXAMPLE 5: Navigation with Animated Links
// ============================================================

export const NavbarBefore = () => (
  <nav className="bg-gray-900 px-4 py-4">
    <div className="flex gap-8">
      <a href="/" className="text-white hover:text-blue-400">Home</a>
      <a href="/services" className="text-white hover:text-blue-400">Services</a>
      <a href="/products" className="text-white hover:text-blue-400">Products</a>
      <a href="/contact" className="text-white hover:text-blue-400">Contact</a>
    </div>
  </nav>
);

export const NavbarAfter = () => (
  <nav className="bg-gray-900 px-4 py-4">
    <div className="flex gap-8">
      <AnimatedLink to="/" className="text-white hover:text-blue-400">
        Home
      </AnimatedLink>
      <AnimatedLink to="/services" className="text-white hover:text-blue-400">
        Services
      </AnimatedLink>
      <AnimatedLink to="/products" className="text-white hover:text-blue-400">
        Products
      </AnimatedLink>
      <AnimatedLink to="/contact" className="text-white hover:text-blue-400">
        Contact
      </AnimatedLink>
    </div>
  </nav>
);

// ============================================================
// EXAMPLE 6: Team/People Cards with Image Zoom
// ============================================================

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const TeamCardBefore = ({ member }: { member: TeamMember }) => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <img 
      src={member.image}
      alt={member.name}
      className="w-full h-64 object-cover"
    />
    <div className="p-4 text-center">
      <h3 className="font-bold text-lg">{member.name}</h3>
      <p className="text-gray-600">{member.role}</p>
    </div>
  </div>
);

export const TeamCardAfter = ({ member, index }: { member: TeamMember; index: number }) => (
  <ScrollReveal delay={index * 0.1}>
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <AnimatedWrapper hoverScale={1.05} transitionDuration={0.7}>
        <img 
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover"
        />
      </AnimatedWrapper>
      
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">{member.name}</h3>
        <p className="text-gray-600">{member.role}</p>
      </div>
    </div>
  </ScrollReveal>
);

// ============================================================
// EXAMPLE 7: CTA Section with Multiple Animations
// ============================================================

export const CTASectionBefore = () => (
  <section className="py-20 bg-blue-600 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform?</h2>
    <p className="text-xl text-blue-100 mb-8">Contact us today for a free consultation</p>
    <button className="bg-white text-blue-600 px-8 py-3 font-bold rounded-lg hover:bg-gray-100">
      Get in Touch
    </button>
  </section>
);

export const CTASectionAfter = () => (
  <ScrollReveal>
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-center">
      <ScrollReveal delay={0} slideDistance={30}>
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform?</h2>
      </ScrollReveal>
      
      <ScrollReveal delay={0.1} slideDistance={20}>
        <p className="text-xl text-blue-100 mb-8">
          Contact us today for a free consultation
        </p>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2} slideDistance={20}>
        <AnimatedButton
          className="bg-white text-blue-600 px-8 py-3 font-bold rounded-lg hover:bg-gray-100 btn-lift"
          hoverScale={1.08}
        >
          Get in Touch →
        </AnimatedButton>
      </ScrollReveal>
    </section>
  </ScrollReveal>
);

// ============================================================
// EXAMPLE 8: Using useScrollReveal Hook for Custom Animations
// ============================================================

export const CustomAnimationExample = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section ref={ref} className="py-16">
      <div
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <h2>Custom Animation Content</h2>
        <p>This animates custom styles when scrolled into view</p>
      </div>
    </section>
  );
};

// ============================================================
// INTEGRATION NOTES
// ============================================================

/**
 * QUICK INTEGRATION STEPS:
 * 
 * 1. For any section/heading: Wrap with <ScrollReveal>
 * 2. For image containers: Wrap with <AnimatedWrapper>
 * 3. For grids: Wrap parent with <StaggeredGrid>
 * 4. For buttons: Replace <button> with <AnimatedButton>
 * 5. For nav links: Replace <a> with <AnimatedLink>
 * 6. For images: Replace <img> with <BlurImage> or <ImageWithFallbackEnhanced>
 * 
 * TIMING ADJUSTMENTS:
 * - Increase delay for staggered effects: 0.08-0.15s feels good
 * - Increase hoverScale for dramatic zoom: 1.1-1.15
 * - Increase transitionDuration for slower feel: 0.6-0.8s
 * 
 * CSS CLASSES AVAILABLE:
 * - .btn-lift - Button with lift and shadow effect
 * - .glass-card-animated - Glassmorphic card with animations
 * - .scale-on-hover - Simple scale hover effect
 * - .link-animated - Underline animation for links
 * - .animate-blur-up - Blur-up animation
 * - .animate-fade-in-up - Fade and slide up
 * - .animate-fade-in-scale - Fade and scale
 */
