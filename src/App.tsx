import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/marketing/Navbar';
import InteractiveFeatureShowcase from './components/marketing/InteractiveFeatureShowcase';
import ValueProps from './components/marketing/ValueProps';
import GovConGuide from './components/marketing/GovConGuide';
import PricingSection from './components/marketing/PricingSection';
import CTA from './components/marketing/CTA';
import Footer from './components/marketing/Footer';
import BookingConfirmation from './pages/BookingConfirmation';

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
