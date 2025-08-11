const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-gray-900">
              All state and federal contracts in one place
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              We aggregate opportunities across federal and state portals, parse RFPs into structured summaries, and deliver the best AI matching—so you can quickly grok each opportunity and focus on the right bids.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={APP_BASE + 'register'} className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">
                Get started free
              </a>
              <Link to="/search" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                Try the search
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">No credit card required.</p>
          </div>
          <div className="relative">
            <div className="rounded-xl bg-white p-3 border border-gray-200">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-black">
                <video
                  src="/hero_demo.mp4"
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        {/* Inline search bar */}
        <div className="mt-10">
          <HomeSearchBar />
          <p className="mt-1 text-xs text-gray-500">Search is free — no account needed.</p>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function HomeSearchBar() {
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    navigate(`/search?q=${encodeURIComponent(q.trim())}&page=1`);
  };
  return (
    <form onSubmit={onSubmit} className="max-w-3xl">
      <div className="flex gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Try: cybersecurity, facilities maintenance, healthcare staffing…"
          className="flex-1 px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <button className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">Search</button>
      </div>
    </form>
  );
}
