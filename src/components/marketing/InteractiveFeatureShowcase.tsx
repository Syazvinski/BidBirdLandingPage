import { useState } from 'react';

const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';

type Feature = {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
};

const features: Feature[] = [
  {
    id: 'search',
    title: 'Powerful Bid Bird search',
    description: 'Find exactly what you need fast with smart filters, synonyms, and intent-aware queries across federal and state data—no noise, just relevant results.',
    videoSrc: '/search.mp4',
  },
  {
    id: 'summaries',
    title: 'Structured RFP summaries',
    description: 'We parse long RFPs into key facts: scope, requirements, deadlines, set-asides, NAICS/PSC, budget, and evaluation criteria.',
    videoSrc: '/summaries.mp4',
  },
  {
    id: 'matching',
    title: 'Best-in-class AI matching',
    description: 'Not simple keywords—real large models evaluate fit using your capabilities and RFP content for exceptional match quality.',
    videoSrc: '/ai_matching.mp4',
  },
  {
    id: 'capability',
    title: 'Auto capability statement',
    description: 'Provide your business name and we build a polished capability statement we use to power matching and materials.',
    videoSrc: '/capability.mp4',
  },
  {
    id: 'workflow',
    title: 'Simple pursuit workflow',
    description: 'Approve high-fit matches, bookmark, and collaborate in a focused pipeline—no sprawling spreadsheets.',
    videoSrc: '/like_dislike.mp4',
  },
];

export default function InteractiveFeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <>
    <section className="relative min-h-[50vh] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Gradient overlay and animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[35vh]">
          {/* Left side - Content */}
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
            Find Government Contracts You're
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"> Built to Win </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
            BidBird’s AI instantly pinpoints RFPs where you have the strongest advantage—saving you hundreds of hours by helping you focus on the bids most likely to succeed.
            </p>
            
            {/* Prominent CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => window.open('https://calendly.com/jonathanli19975', '_blank')}
                className="inline-flex items-center rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105"
              >
                Book a Demo
              </button>
              <a
                href={APP_BASE + 'register'}
                className="inline-flex items-center rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-white/20 transition-all duration-200"
              >
                Get Started Free
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-300">No credit card required</p>
          </div>

          {/* Right side - Logo/Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Animated background circles */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 blur-lg animate-pulse delay-500"></div>
              
              {/* BidBird Logo */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                <img
                  src="/bid_bird_inverted.png"
                  alt="BidBird"
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain mx-auto filter drop-shadow-lg"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Feature showcase section with white background */}
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-gray-900">
            See BidBird in action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Click through our features to see how BidBird transforms your RFP discovery process
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Video Display */}
          <div className="lg:col-span-8">
            <div className="relative">
              <div className="rounded-2xl bg-white p-4 border border-gray-200 shadow-lg">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-black">
                  <video
                    key={activeFeature.videoSrc}
                    src={activeFeature.videoSrc}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900">{activeFeature.title}</h3>
                  <p className="mt-2 text-gray-600">{activeFeature.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Navigation */}
          <div className="lg:col-span-4">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Features</h2>
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    activeFeature.id === feature.id
                      ? 'border-primary bg-primary/5 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <h3 className={`font-semibold ${
                    activeFeature.id === feature.id ? 'text-primary' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                    {feature.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
