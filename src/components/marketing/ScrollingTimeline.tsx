import { useEffect, useMemo, useRef, useState } from 'react';

type Feature = {
  title: string;
  description: string;
  videoSrc?: string;
};

export default function ScrollingTimeline() {
  const features: Feature[] = useMemo(
    () => [
      {
        title: 'Powerful Bid Bird search',
        description:
          'Find exactly what you need fast with smart filters, synonyms, and intent-aware queries across federal and state data—no noise, just relevant results.',
        videoSrc: '/search.mp4',
      },
      {
        title: 'Structured RFP summaries',
        description:
          'We parse long RFPs into key facts: scope, requirements, deadlines, set-asides, NAICS/PSC, budget, and evaluation criteria.',
        videoSrc: '/summaries.mp4',
      },
      {
        title: 'Best-in-class AI matching',
        description:
          'Not simple keywords—real large models evaluate fit using your capabilities and RFP content for exceptional match quality.',
        videoSrc: '/ai_matching.mp4',
      },
      {
        title: 'Auto capability statement',
        description:
          'Provide your business name and we build a polished capability statement we use to power matching and materials.',
        videoSrc: '/capability.mp4',
      },
      {
        title: 'Simple pursuit workflow',
        description:
          'Approve high-fit matches, bookmark, and collaborate in a focused pipeline—no sprawling spreadsheets.',
        videoSrc: '/like_dislike.mp4',
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(idx);
            }
          });
        },
        {
          root: null,
          // Expand the top/bottom viewport so items update when centered
          rootMargin: '-40% 0px -40% 0px',
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [features.length]);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Everything you need to find and win</h2>
          <p className="mt-3 text-gray-600">Scroll the timeline to see how Bid Bird supports your pursuit workflow.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Sticky media panel */}
          <div className="lg:col-span-6">
            <div className="sticky top-24">
              <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-md">
                <div className="aspect-[4/3] w-full bg-black">
                  {features[active]?.videoSrc ? (
                    <video
                      key={features[active].videoSrc}
                      src={features[active].videoSrc}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-50 text-gray-500 text-sm">
                      Visual preview coming soon
                    </div>
                  )}
                </div>
                <div className="p-4 border-t border-gray-100">
                  <div className="text-xs uppercase tracking-wider text-gray-500">Current step</div>
                  <div className="mt-1 font-semibold text-gray-900">{features[active].title}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll timeline */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" aria-hidden="true" />
              <div className="space-y-4 md:space-y-8">
                {features.map((f, idx) => (
                  <div
                    key={f.title}
                    ref={(el) => (itemRefs.current[idx] = el)}
                    className="scroll-mt-32 py-12 md:py-16"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative hidden sm:block">
                        <div
                          className={
                            'h-8 w-8 rounded-full flex items-center justify-center border transition-colors ' +
                            (idx === active
                              ? 'bg-primary/10 border-primary text-primary'
                              : 'bg-white border-gray-300 text-gray-400')
                          }
                        >
                          {idx + 1}
                        </div>
                      </div>
                      <div
                        className={
                          'flex-1 rounded-xl border p-5 transition ' +
                          (idx === active
                            ? 'border-primary/40 shadow-sm bg-white'
                            : 'border-gray-200 bg-white')
                        }
                        onClick={() => itemRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                        tabIndex={0}
                      >
                        <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                        <p className="mt-2 text-sm text-gray-600">{f.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
