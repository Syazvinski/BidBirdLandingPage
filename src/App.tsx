import Navbar from './components/marketing/Navbar';
import Hero from './components/marketing/Hero';
import FeatureGrid from './components/marketing/FeatureGrid';
import ValueProps from './components/marketing/ValueProps';
import CTA from './components/marketing/CTA';
import Footer from './components/marketing/Footer';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/Search';
import PricingSection from './components/marketing/PricingSection';
import SocialProofSection from './components/marketing/SocialProofSection';

function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">How Bid Bird works</h2>
              <ol className="mt-6 space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">1. Tell us your business name:</span> We research and build a polished capability statement for you—no heavy setup.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">2. We aggregate opportunities:</span> Federal and state RFPs flow into a single, unified feed.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">3. We parse the RFPs:</span> Key details are extracted into structured summaries you can scan in seconds.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">4. AI matches you to the best fits:</span> Advanced models—not keywords—score which opportunities deserve your time.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">5. Approve and draft:</span> Approve matches and use the RFP writer to generate accurate, tailored drafts quickly.
                </li>
              </ol>
            </div>
            <div>
              <div className="rounded-xl bg-white p-3 border border-gray-200">
                <div className="aspect-[16/10] w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-500">
                  Placeholder for pipeline walkthrough GIF
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ValueProps />
      <PricingSection />
      <SocialProofSection />
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
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
