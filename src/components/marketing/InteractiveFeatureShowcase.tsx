import { useState } from 'react';
import { ArrowRight, Check, FileSearch, FileText, ScanSearch, Sparkles, ThumbsUp } from 'lucide-react';
import HeroSearchDemo from './HeroSearchDemo';

const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';
const DEMO_URL = 'https://calendar.app.google/xpkVTmZKzpyx3ZMMA';

type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  videoSrc: string;
  icon: typeof ScanSearch;
};

const features: Feature[] = [
  {
    id: 'search',
    eyebrow: '01 · Discover',
    title: 'Search government contracts without the noise',
    description: 'Use smart filters, synonyms, and intent-aware queries to find relevant opportunities across federal and state sources.',
    videoSrc: '/search.mp4',
    icon: ScanSearch,
  },
  {
    id: 'summaries',
    eyebrow: '02 · Understand',
    title: 'Get the point, fast',
    description: 'Turn dense RFPs into structured summaries of scope, requirements, deadlines, set-asides, budget, and evaluation criteria.',
    videoSrc: '/summaries.mp4',
    icon: FileText,
  },
  {
    id: 'matching',
    eyebrow: '03 · Prioritize',
    title: 'Know where you fit',
    description: 'BidBird evaluates the full opportunity against your capabilities—not just keywords—so the strongest matches rise to the top.',
    videoSrc: '/ai_matching.mp4',
    icon: Sparkles,
  },
  {
    id: 'capability',
    eyebrow: '04 · Position',
    title: 'Build your capability profile',
    description: 'Start with your business name and turn your experience into a polished profile that powers matching and materials.',
    videoSrc: '/capability.mp4',
    icon: FileSearch,
  },
  {
    id: 'workflow',
    eyebrow: '05 · Pursue',
    title: 'Move the right bids forward',
    description: 'Approve high-fit matches, bookmark opportunities, and keep your pursuit pipeline focused in one clear workflow.',
    videoSrc: '/like_dislike.mp4',
    icon: ThumbsUp,
  },
];

const tickerItems = ['Government contract opportunities', 'Federal and state RFP search', 'AI fit analysis', 'Structured RFP summaries', 'GovCon pursuit workflow'];

export default function InteractiveFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-[#071a35] px-2 pb-2 pt-[78px] sm:px-5 sm:pb-6 sm:pt-[100px]">
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0a2142]/72 px-4 py-5 shadow-[0_40px_100px_rgba(0,8,24,.35)] sm:rounded-[28px] sm:px-8 sm:py-12 lg:px-12 lg:py-12">
          <div className="grid min-w-0 items-center gap-5 sm:gap-9 lg:grid-cols-[.92fr_1.08fr] lg:gap-12">
            <div className="relative z-10 min-w-0 max-w-2xl" data-reveal>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.07] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/80 sm:mb-5 sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.15em]">
                <span className="h-2 w-2 rounded-full bg-[#70e1bd] shadow-[0_0_0_5px_rgba(112,225,189,.12)]" />
                AI government contracting software
              </div>
              <h1 className="max-w-[680px] text-[clamp(3rem,6vw,5.7rem)] font-semibold leading-[.94] tracking-[-0.062em] text-white">
                Find the bids your company is <span className="text-[#ffb54a]">built for.</span>
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#c3cddd] sm:mt-5 sm:text-lg sm:leading-7">
                Search federal and state RFPs, understand the requirements, and prioritize your strongest fits—fast.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:flex sm:gap-3">
                <a href={DEMO_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffb54a] px-2 py-3 text-xs font-bold text-[#071a35] transition-all hover:-translate-y-0.5 hover:bg-[#ffc56e] sm:px-6 sm:py-3.5 sm:text-sm">
                  Book a demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href={`${APP_BASE}register`} className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[.06] px-2 py-3 text-xs font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:px-6 sm:py-3.5 sm:text-sm">
                  Start free
                </a>
              </div>
              <p className="mt-3 hidden items-center gap-2 text-xs font-medium text-white/55 sm:flex">
                <Check className="h-3.5 w-3.5 text-[#70e1bd]" />
                No credit card required
              </p>
            </div>

            <div className="relative min-w-0 lg:translate-x-4" data-reveal>
              <div className="absolute -inset-10 rounded-full bg-[#6e57ff]/20 blur-3xl" />
              <HeroSearchDemo />
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-4 hidden max-w-[1380px] overflow-hidden border-y border-white/10 py-3 sm:block">
          <div className="ticker-track flex min-w-max items-center">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center">
                <span className="px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55 sm:px-10">{item}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffb54a]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="overflow-hidden bg-[#f7f6f1] px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-2" data-reveal>
            <div>
              <p className="section-kicker">See BidBird in action</p>
              <h2 className="mt-4 max-w-3xl text-[clamp(2.7rem,5vw,5.2rem)] font-semibold leading-[.96] tracking-[-0.055em] text-[#10213f]">
                From search to shortlist, <span className="text-[#5d62e8]">see it happen.</span>
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#657087] lg:justify-self-end lg:text-lg">
              One clear workflow replaces scattered portals, endless documents, and spreadsheet triage. Explore each step below.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[.72fr_1.28fr] lg:gap-5" data-reveal>
            <div className="flex gap-2 overflow-x-auto pb-2 lg:grid lg:gap-2 lg:overflow-visible lg:pb-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group min-w-[250px] rounded-2xl border p-4 text-left transition-all duration-300 lg:min-w-0 lg:p-5 ${isActive ? 'border-[#10213f] bg-[#10213f] text-white shadow-[0_18px_45px_rgba(16,33,63,.16)]' : 'border-[#d9dcd7] bg-white/70 text-[#10213f] hover:-translate-y-0.5 hover:border-[#aeb5c0] hover:bg-white'}`}
                    aria-pressed={isActive}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${isActive ? 'bg-[#ffb54a] text-[#10213f]' : 'bg-[#ececf9] text-[#5d62e8]'}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-[0.15em] ${isActive ? 'text-white/50' : 'text-[#8a91a0]'}`}>{feature.eyebrow}</p>
                        <h3 className="mt-1 text-base font-semibold tracking-[-0.02em]">{feature.title}</h3>
                      </div>
                    </div>
                    <p className={`mt-3 hidden text-sm leading-6 lg:block ${isActive ? 'text-white/65' : 'text-[#687286]'}`}>{feature.description}</p>
                    <div className="mt-4 h-1 overflow-hidden rounded-full bg-current/10">
                      <div className={`h-full rounded-full bg-[#ffb54a] transition-all duration-500 ${isActive ? 'w-full' : 'w-0'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="relative self-start overflow-hidden rounded-[26px] border border-[#d5d8d3] bg-[#10213f] p-2 shadow-[0_30px_80px_rgba(16,33,63,.14)] sm:p-3">
              <div className="flex h-10 items-center justify-between px-3 text-white/50">
                <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-white/25" /><span className="h-2 w-2 rounded-full bg-white/25" /><span className="h-2 w-2 rounded-full bg-white/25" /></div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em]">Live product preview</p>
                <p className="text-[10px] font-semibold">{String(activeIndex + 1).padStart(2, '0')} / {String(features.length).padStart(2, '0')}</p>
              </div>
              <div className="aspect-[16/10] overflow-hidden rounded-[18px] bg-white">
                <video key={activeFeature.videoSrc} src={activeFeature.videoSrc} className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata">
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="grid gap-3 px-3 pb-3 pt-5 text-white sm:grid-cols-[1fr_auto] sm:items-end sm:px-5 sm:pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ffb54a]">{activeFeature.eyebrow}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">{activeFeature.description}</p>
                </div>
                <a href={`${APP_BASE}register`} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#ffb54a]">
                  Try it free <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
