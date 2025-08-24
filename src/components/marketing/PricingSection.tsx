const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Simple pricing</h2>
          <p className="mt-3 text-gray-600">Pick the plan that fits. Cancel anytime.</p>
        </div>

        {/* Risk reversal panel (subtle, clear) */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 md:p-5">
          <div className="flex items-start gap-3 justify-center text-sm md:text-base">
            <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <div className="text-gray-800">
              <span className="font-medium">Premium:</span> 30-day money-back guarantee.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-8">
          {/* Premium */}
          <div className="relative w-full lg:w-auto lg:max-w-[18rem] rounded-2xl border border-primary/25 bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col min-h-[480px]">
            <span className="absolute -top-3 left-4 inline-flex items-center rounded-full bg-primary text-white px-3 py-1 text-xs font-medium shadow-sm">Limited-time</span>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-gray-900">Premium</h3>
              <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs font-medium">Best value</span>
            </div>
            <div className="mt-2 flex items-end gap-2">
              <div className="text-4xl font-bold text-gray-900">$149</div>
              <div className="text-sm text-gray-600">/ month</div>
            </div>
            <p className="mt-3 text-gray-600">Everything you need to find and qualify the right RFPs.</p>

            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">•</span> Advanced search through RFPs</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">•</span> AI matching to RFPs</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">•</span> Capability statement generation</li>
            </ul>

            <p className="mt-5 text-sm text-gray-700"><span className="font-medium text-primary">Risk-free:</span> 30-day money-back guarantee.</p>

            <div className="mt-auto space-y-3">
              <button
                onClick={() => window.open('https://calendly.com/jonathanli19975', '_blank')}
                className="inline-flex w-full items-center justify-center rounded-md border border-primary text-primary px-5 py-3 text-sm font-semibold hover:bg-primary/5"
              >
                Book Demo First
              </button>
              <a
                href={APP_BASE + 'register'}
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
              >
                Start Premium
              </a>
            </div>
          </div>

          {/* Basic */}
          <div className="w-full lg:w-auto lg:max-w-[18rem] rounded-2xl border border-gray-200 p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col min-h-[480px]">
            <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
            <div className="mt-2 flex items-end gap-2">
              <div className="text-4xl font-bold text-gray-900">$9.99</div>
              <div className="text-sm text-gray-600">/ month</div>
            </div>
            <p className="mt-3 text-gray-600">Core access for quick discovery.</p>

            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">•</span> Search our aggregated RFP database</li>
              <li className="flex items-start gap-2 text-gray-500"><span className="mt-0.5">•</span> Matching and capability statement not included</li>
            </ul>

            {/* Removed trial messaging per request */}

            <div className="mt-auto space-y-3">
              <button
                onClick={() => window.open('https://calendly.com/jonathanli19975', '_blank')}
                className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Book Demo
              </button>
              <a
                href={APP_BASE + 'register'}
                className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Start Basic
              </a>
            </div>
          </div>

          {/* Enterprise */}
          <div className="w-full lg:w-auto lg:max-w-[18rem] rounded-2xl border border-gray-200 p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col min-h-[480px]">
            <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
            <div className="mt-2 flex items-end gap-2">
              <div className="text-4xl font-bold text-gray-900">Custom</div>
            </div>
            <p className="mt-3 text-gray-600">For large teams and organizations with custom requirements.</p>

            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">•</span> Everything in Premium</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">•</span> Dedicated account manager</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">•</span> Custom integrations</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">•</span> Advanced reporting & analytics</li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">•</span> Priority support</li>
            </ul>

            <div className="mt-auto space-y-3">
              <button
                onClick={() => window.open('https://calendly.com/jonathanli19975', '_blank')}
                className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">Prices in USD. Billed monthly. Cancel anytime.</p>
      </div>
    </section>
  );
}
