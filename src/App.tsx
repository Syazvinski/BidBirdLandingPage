import Navbar from './components/marketing/Navbar';
import Hero from './components/marketing/Hero';
import ScrollingTimeline from './components/marketing/ScrollingTimeline';
import ValueProps from './components/marketing/ValueProps';
import CTA from './components/marketing/CTA';
import Footer from './components/marketing/Footer';
import { Routes, Route } from 'react-router-dom';
import PricingSection from './components/marketing/PricingSection';

function Home() {
  return (
    <>
      <Hero />
      <ScrollingTimeline />
      <ValueProps />
      <PricingSection />
      <section id="faq" className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-gray-200 rounded-xl border border-gray-200 overflow-hidden">
            {[
              { q: 'Is Bid Bird only for small businesses?', a: 'Bid Bird is designed for small to mid-size contractors, but larger teams also use it to streamline discovery and materials.' },
              { q: 'Where do you source opportunities?', a: 'We monitor major government portals and normalize data so it’s easy to compare and act.' },
              { q: 'Can I collaborate with my team?', a: 'Yes. Invite teammates to review matches, add notes, and move items through your pipeline.' },
            ].map((item) => (
              <div key={item.q} className="p-6">
                <h3 className="font-semibold text-gray-900">{item.q}</h3>
                <p className="mt-2 text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
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
