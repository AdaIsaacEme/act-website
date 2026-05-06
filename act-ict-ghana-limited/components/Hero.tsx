import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useContent } from "../context/ContentContext";
import AnimatedButton from "./AnimatedButton";

const Hero: React.FC = () => {
  const { content } = useContent();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);
  const slides = content.hero.slides;
  const preloadedRef = useRef<Set<string>>(new Set());

  // Preload all hero images on mount
  useEffect(() => {
    let loaded = 0;
    const total = slides.length;
    slides.forEach((slide) => {
      if (preloadedRef.current.has(slide.image)) {
        loaded++;
        if (loaded >= total) setImagesReady(true);
        return;
      }
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        preloadedRef.current.add(slide.image);
        loaded++;
        if (loaded >= total) setImagesReady(true);
      };
      img.onerror = () => {
        loaded++;
        if (loaded >= total) setImagesReady(true);
      };
    });
  }, [slides]);

  useEffect(() => {
    if (!imagesReady) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, imagesReady]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const navigate = useNavigate();
  const slideLinks: Record<string, { primary: string; secondary: string }> = {
    "1": { primary: "/solutions", secondary: "/projects" },
    "2": { primary: "/about", secondary: "/contact" },
    "3": { primary: "/solutions", secondary: "/projects" },
    "4": { primary: "/solutions", secondary: "/projects" },
  };

  const stats = [
    { number: "25+", label: "Engineers" },
    { number: "10", label: "Service Vans" },
    { number: "15+", label: "Years of Experience" },
    { number: "8", label: "Industry Awards" },
  ];

  return (
    <div
      className="relative w-full overflow-hidden overflow-x-hidden bg-[#0A1628] text-white"
      style={{ minHeight: "100svh" }}
    >
      {/* Preloaded background images — all always in DOM for instant transitions */}
      {slides.map((slide, index) => (
        <div
          key={`bg-${slide.id}`}
          className="absolute inset-0 overflow-hidden transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover ${index === currentSlide ? `kenburns-${index % 2 === 0 ? "a" : "b"}` : ""}`}
            style={{ willChange: "transform" }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-[#0A1628]/30" />
        </div>
      ))}

      {/* Animated text content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Content — uses flex-col justify-center and targeted breakpoints for spacing */}
          <div className="relative w-full h-full flex flex-col justify-center pt-32 pb-20 lg:pt-40 lg:pb-24 2xl:pt-64 2xl:pb-32">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl lg:max-w-3xl">
                <motion.h2
                  key={`${slides[currentSlide].id}-title`}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.15,
                  }}
                  className="font-display leading-[0.9] tracking-tight text-white drop-shadow-2xl mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                >
                  {slides[currentSlide].title}
                </motion.h2>

                <motion.p
                  key={`${slides[currentSlide].id}-sub`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.3,
                  }}
                  className="text-base sm:text-lg md:text-xl text-[#E8EFF8]/90 font-light max-w-xl mb-6"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  key={`${slides[currentSlide].id}-stats`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.45,
                  }}
                  className="flex flex-wrap gap-4 sm:gap-6 mb-6 text-xs sm:text-sm md:text-base"
                >
                  {stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#F59E0B] font-black text-lg sm:text-xl md:text-2xl">
                        {stat.number}
                      </span>
                      <span className="text-white/80">{stat.label}</span>
                      {idx < stats.length - 1 && (
                        <span className="hidden sm:inline text-[#7A9ABD]">
                          |
                        </span>
                      )}
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  key={`${slides[currentSlide].id}-cta`}
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.6,
                  }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <AnimatedButton
                    onClick={() => {
                      if (slides[currentSlide].id === "2") {
                        navigate("/");
                        setTimeout(() => {
                          document.getElementById("partners")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }, 100);
                      } else {
                        navigate(
                          slideLinks[slides[currentSlide].id]?.primary ??
                            "/solutions",
                        );
                      }
                    }}
                    className="inline-flex justify-center items-center px-6 sm:px-8 py-3 bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold rounded-lg text-sm sm:text-base transition-colors duration-200"
                    hoverScale={1.04}
                  >
                    {slides[currentSlide].ctaPrimary}{" "}
                    <ArrowRight className="ml-2 flex-shrink-0" size={16} />
                  </AnimatedButton>
                  <AnimatedButton
                    onClick={() =>
                      navigate(
                        slideLinks[slides[currentSlide].id]?.secondary ??
                          "/projects",
                      )
                    }
                    className="inline-flex justify-center items-center px-6 sm:px-8 py-3 border border-white/40 hover:border-[#00A8E8] text-white font-semibold rounded-lg text-sm sm:text-base transition-colors duration-200"
                    hoverScale={1.03}
                  >
                    {slides[currentSlide].ctaSecondary}
                  </AnimatedButton>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators — responsive positioning */}
      <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? "bg-[#00A8E8] w-6 h-2.5"
                : "bg-white/30 w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>

      {/* Nav arrows — hidden on mobile */}
      <div className="absolute z-20 bottom-6 right-4 sm:right-10 hidden sm:flex gap-2">
        <AnimatedButton
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-[#00A8E8]/40 text-white"
          hoverScale={1.1}
        >
          <ChevronLeft size={20} />
        </AnimatedButton>
        <AnimatedButton
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-[#00A8E8]/40 text-white"
          hoverScale={1.1}
        >
          <ChevronRight size={20} />
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Hero;
