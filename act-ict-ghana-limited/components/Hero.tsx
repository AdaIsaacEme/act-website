import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useContent } from "../context/ContentContext";
import AnimatedButton from "./AnimatedButton";

const SLIDE_MS = 6000;

const srcSetFor = (src: string) =>
  `${src.replace(/\.webp$/, "-960.webp")} 960w, ${src} 1920w`;

const Hero: React.FC = () => {
  const { content } = useContent();
  const slides = content.hero.slides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false); // set by the pause button
  const [hovered, setHovered] = useState(false); // pointer or keyboard focus inside
  // Only slides that have been (or are about to be) shown get an <img>, so a visitor
  // who never waits for slide 4 never downloads it.
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set([0]));
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const autoplay = !paused && !hovered && !reduceMotion;

  useEffect(() => {
    // Warm up the next slide shortly before it is needed.
    const next = (currentSlide + 1) % slides.length;
    setLoaded((prev) => (prev.has(currentSlide) && prev.has(next) ? prev : new Set([...prev, currentSlide, next])));
  }, [currentSlide, slides.length]);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(timer);
  }, [slides.length, autoplay]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const slideLinks: Record<string, { primary: string; secondary: string }> = {
    "1": { primary: "/solutions", secondary: "/projects" },
    "2": { primary: "/about", secondary: "/contact" },
    "3": { primary: "/solutions", secondary: "/projects" },
    "4": { primary: "/solutions", secondary: "/projects" },
  };

  const stats = [
    { number: "25+", label: "Engineers" },
    { number: "10", label: "Service Vans" },
    { number: "2011", label: "Established" },
    { number: "8", label: "Industry Awards" },
  ];

  const slide = slides[currentSlide];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative w-full overflow-hidden overflow-x-hidden bg-[#0A1628] text-white"
      style={{ minHeight: "100svh" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setHovered(false);
      }}
    >
      {/* Background images */}
      {slides.map((s, index) =>
        loaded.has(index) ? (
          <div
            key={`bg-${s.id}`}
            className="absolute inset-0 overflow-hidden transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === currentSlide ? 1 : 0 }}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={s.image}
              srcSet={srcSetFor(s.image)}
              sizes="100vw"
              alt=""
              className={`absolute inset-0 w-full h-full object-cover ${
                index === currentSlide ? `kenburns-${index % 2 === 0 ? "a" : "b"}` : ""
              }`}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-[#0A1628]/30" />
          </div>
        ) : null,
      )}

      {/* Animated text content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          aria-live={autoplay ? "off" : "polite"}
        >
          <div className="hero-pad relative w-full h-full flex flex-col justify-center pt-[calc(8rem*var(--short-zoom,1))] pb-[calc(6rem*var(--short-zoom,1))] lg:pt-[calc(10rem*var(--short-zoom,1))] lg:pb-[calc(7rem*var(--short-zoom,1))] 2xl:pt-64 2xl:pb-32">
            <div className="short-zoom w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl lg:max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="font-display leading-[0.9] tracking-tight text-white drop-shadow-2xl mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="text-base sm:text-lg md:text-xl text-[#E8EFF8]/90 font-light max-w-xl mb-6"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                  className="hero-stats flex flex-wrap gap-4 sm:gap-6 mb-6 text-xs sm:text-sm md:text-base"
                >
                  {stats.map((stat, idx) => (
                    <li key={stat.label} className="flex items-center gap-2">
                      <span className="text-[#F59E0B] font-black text-lg sm:text-xl md:text-2xl">
                        {stat.number}
                      </span>
                      <span className="text-white/85">{stat.label}</span>
                      {idx < stats.length - 1 && (
                        <span className="hidden sm:inline text-[#7A9ABD]" aria-hidden="true">
                          |
                        </span>
                      )}
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <AnimatedButton
                    onClick={() => {
                      if (slide.id === "2") {
                        document.getElementById("partners")?.scrollIntoView({
                          behavior: reduceMotion ? "auto" : "smooth",
                          block: "start",
                        });
                      } else {
                        navigate(slideLinks[slide.id]?.primary ?? "/solutions");
                      }
                    }}
                    className="inline-flex justify-center items-center px-6 sm:px-8 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg text-sm sm:text-base transition-colors duration-200"
                    hoverScale={1.04}
                  >
                    {slide.ctaPrimary}{" "}
                    <ArrowRight className="ml-2 flex-shrink-0" size={16} aria-hidden="true" />
                  </AnimatedButton>
                  <AnimatedButton
                    onClick={() => navigate(slideLinks[slide.id]?.secondary ?? "/projects")}
                    className="inline-flex justify-center items-center px-6 sm:px-8 py-3 border border-white/60 hover:border-white text-white font-semibold rounded-lg text-sm sm:text-base transition-colors duration-200"
                    hoverScale={1.03}
                  >
                    {slide.ctaSecondary}
                  </AnimatedButton>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls — bottom-left, clear of the WhatsApp button (bottom-right). */}
      <div className="short-zoom absolute z-20 bottom-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white mr-1"
        >
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="hidden sm:inline-flex p-2 rounded-full bg-white/10 hover:bg-white/25 text-white"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        {slides.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}: ${s.title}`}
            aria-current={idx === currentSlide ? "true" : undefined}
            className="p-2 -m-1 group"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                idx === currentSlide ? "bg-[#00A8E8] w-6 h-2.5" : "bg-white/50 group-hover:bg-white/80 w-2.5 h-2.5"
              }`}
            />
          </button>
        ))}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="hidden sm:inline-flex p-2 rounded-full bg-white/10 hover:bg-white/25 text-white"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
