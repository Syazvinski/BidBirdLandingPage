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
        {/* Search removed from landing page */}
      </div>
    </section>
  );
}

// Search and demo controls removed from landing page
