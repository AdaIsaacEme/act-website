import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Seo from './components/Seo';
import { ContentProvider } from './context/ContentContext';
import { ThemeProvider } from './context/ThemeContext';

// Each page is its own JavaScript file, loaded only when visited.
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Projects = lazy(() => import('./pages/Projects'));
const DivisionACTICT = lazy(() => import('./pages/DivisionACTICT'));
const DivisionACTGlobal = lazy(() => import('./pages/DivisionACTGlobal'));
const MiningIndustrial = lazy(() => import('./pages/MiningIndustrial'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

/** The whole site, without a router — wrapped by BrowserRouter (browser) or StaticRouter (pre-render). */
const App: React.FC = () => (
  <ThemeProvider>
    <ContentProvider>
      {/* reducedMotion="user": animations switch off for visitors whose device asks for less motion. */}
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        <Seo />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div
          className="flex flex-col min-h-screen font-sans"
          style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
        >
          <Navbar />
          <main id="main" className="flex-grow">
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/act-ict" element={<DivisionACTICT />} />
                <Route path="/act-global" element={<DivisionACTGlobal />} />
                <Route path="/mining" element={<MiningIndustrial />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </MotionConfig>
    </ContentProvider>
  </ThemeProvider>
);

export default App;
