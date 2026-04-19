import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import AnimatedButton from './AnimatedButton';

const Hero: React.FC = () => {
  const { content } = useContent();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = content.hero.slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const stats = [
    { number: '25+', label: 'Engineers' },
    { number: '10', label: 'Service Vans' },
    { number: '14', label: 'Years Experience' },
    { number: '4', label: 'Industry Awards' },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0A1628] text-white">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {/* Background Image with Ken Burns Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  key={`${slide.id}-img`}
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.0, opacity: 0 }}
                  animate={{ scale: 1.08, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    scale: { duration: 7, ease: 'linear' },
                    opacity: { duration: 0.8, ease: 'easeInOut' },
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/60 to-transparent" />
                <div className="absolute inset-0 noise-overlay" />
              </div>

              {/* Content */}
              <motion.div
                className="relative h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                key={`${slide.id}-content`}
              >
                <div className="max-w-3xl space-y-6 text-center md:text-left">
                  {/* Headline */}
                  <motion.h2
                    initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                    className="font-display text-7xl md:text-9xl font-black leading-none tracking-tight text-white drop-shadow-2xl"
                  >
                    {slide.title}
                  </motion.h2>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                    className="text-lg md:text-xl text-[#E8EFF8] font-light max-w-2xl"
                  >
                    {slide.subtitle}
                  </motion.p>

                  {/* Stats Bar */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
                    className="flex flex-wrap justify-center md:justify-start gap-6 pt-6 text-sm md:text-base"
                  >
                    {stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-[#F59E0B] font-black text-xl md:text-2xl">{stat.number}</span>
                        <span className="text-white">{stat.label}</span>
                        {idx < stats.length - 1 && <span className="hidden md:inline text-[#7A9ABD]">|</span>}
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.65 }}
                    className="flex flex-col sm:flex-row gap-4 pt-6"
                  >
                    <AnimatedButton
                      onClick={() => window.location.href = '/solutions'}
                      className="inline-flex justify-center items-center px-8 py-3 bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00A8E8]/50 btn-lift rounded-lg"
                      hoverScale={1.08}
                    >
                      {slide.ctaPrimary} <ArrowRight className="ml-2" size={18} />
                    </AnimatedButton>
                    <AnimatedButton
                      onClick={() => window.location.href = '/projects'}
                      className="inline-flex justify-center items-center px-8 py-3 bg-transparent border border-white/50 hover:border-[#00A8E8] text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-[#00A8E8]/10 btn-lift rounded-lg"
                      hoverScale={1.05}
                    >
                      {slide.ctaSecondary}
                    </AnimatedButton>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute z-20 bottom-10 right-10 flex space-x-2">
        <AnimatedButton
          onClick={prevSlide}
          className="p-2 rounded-full bg-[#00A8E8]/20 hover:bg-[#00A8E8]/40 backdrop-blur text-white transition-all duration-300"
          hoverScale={1.1}
        >
          <ChevronLeft size={24} />
        </AnimatedButton>
        <AnimatedButton
          onClick={nextSlide}
          className="p-2 rounded-full bg-[#00A8E8]/20 hover:bg-[#00A8E8]/40 backdrop-blur text-white transition-all duration-300"
          hoverScale={1.1}
        >
          <ChevronRight size={24} />
        </AnimatedButton>
      </div>

      {/* Indicators */}
      <div className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? 'bg-[#00A8E8] w-8 h-3'
                : 'bg-white/30 hover:bg-white/50 w-3 h-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
