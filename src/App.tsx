import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/marketing/Navbar';
import InteractiveFeatureShowcase from './components/marketing/InteractiveFeatureShowcase';
import ValueProps from './components/marketing/ValueProps';
import GovConGuide from './components/marketing/GovConGuide';
import PricingSection from './components/marketing/PricingSection';
import CTA from './components/marketing/CTA';
import Footer from './components/marketing/Footer';
import BookingConfirmation from './pages/BookingConfirmation';
import BookDemo from './pages/BookDemo';
import { trackHubSpotPageView } from './services/analytics';

function Home() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -64px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <InteractiveFeatureShowcase />
      <ValueProps />
      <GovConGuide />
      <PricingSection />
      <CTA />
    </>
  );
}

export default function App() {
  const location = useLocation();
  const trackedPath = useRef(`${location.pathname}${location.search}`);

  useEffect(() => {
    // HubSpot records the first page load itself; client-side route changes need an explicit page view.
    const path = `${location.pathname}${location.search}`;
    if (path === trackedPath.current) return;
    trackedPath.current = path;
    trackHubSpotPageView(path);
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-[#f7f6f1] text-[#10213f]">
      <Routes>
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route
          path="/*"
          element={(
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/book-demo" element={<BookDemo />} />
                </Routes>
              </main>
              <Footer />
            </>
          )}
        />
      </Routes>
    </div>
  );
}
