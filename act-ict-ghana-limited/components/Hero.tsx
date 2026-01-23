import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Hero: React.FC = () => {
  const { content } = useContent();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = content.hero.slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-screen max-h-[700px] w-full overflow-hidden bg-gray-900 text-white">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
             <img 
               src={slide.image} 
               alt={slide.title} 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 font-light max-w-xl">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/solutions" 
                  className="inline-flex justify-center items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:scale-105"
                >
                  {slide.ctaPrimary} <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link 
                  to="/projects" 
                  className="inline-flex justify-center items-center px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold rounded-full transition-all"
                >
                  {slide.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute z-20 bottom-10 right-10 flex space-x-2">
        <button onClick={prevSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur text-white transition">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur text-white transition">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
