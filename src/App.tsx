import Navbar from './components/marketing/Navbar';
import InteractiveFeatureShowcase from './components/marketing/InteractiveFeatureShowcase';
import ValueProps from './components/marketing/ValueProps';
import PricingSection from './components/marketing/PricingSection';
import CTA from './components/marketing/CTA';
import Footer from './components/marketing/Footer';
import { Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <InteractiveFeatureShowcase />
      <ValueProps />
      <PricingSection />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
