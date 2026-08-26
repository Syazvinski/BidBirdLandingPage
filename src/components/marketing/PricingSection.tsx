import { ArrowRight, Check } from 'lucide-react';
import { DEMO_BOOKING_PATH } from '../../config/links';

const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    cadence: '/ month',
    description: 'Core access for straightforward opportunity discovery.',
    features: ['Aggregated government RFP database', 'Federal and state opportunity search'],
    action: 'Start Basic',
    href: `${APP_BASE}register`,
  },
  {
    name: 'Premium',
    price: '$149',
    cadence: '/ month',
    description: 'The complete BidBird workflow for finding and qualifying the right RFPs.',
    features: ['Advanced government contract search', 'AI matching to your capabilities', 'Capability statement generation', '30-day money-back guarantee'],
    action: 'Start Premium',
    href: `${APP_BASE}register`,
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    description: 'A tailored setup for larger teams and custom requirements.',
    features: ['Everything in Premium', 'Dedicated account manager', 'Custom integrations', 'Priority support'],
    action: 'Contact sales',
    href: DEMO_BOOKING_PATH,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#ebe9e2] px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-2" data-reveal>
          <div>
            <p className="section-kicker">Simple pricing</p>
            <h2 className="mt-4 text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[.98] tracking-[-0.055em] text-[#10213f]">Start lean. Scale when the wins do.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#657087] lg:justify-self-end lg:text-lg">Choose the level of opportunity intelligence your team needs today. Every plan is billed monthly and can be canceled anytime.</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3" data-reveal>
          {plans.map((plan) => (
            <article key={plan.name} className={`relative flex min-h-[500px] flex-col overflow-hidden rounded-[26px] border p-7 sm:p-8 ${plan.featured ? 'border-[#10213f] bg-[#10213f] text-white shadow-[0_28px_70px_rgba(16,33,63,.2)]' : 'border-[#d5d6d0] bg-[#f7f6f1] text-[#10213f]'}`}>
              {plan.featured && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#ffb54a] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#10213f]">Best value</div>
              )}
              <p className={`text-xs font-bold uppercase tracking-[0.16em] ${plan.featured ? 'text-[#ffb54a]' : 'text-[#737d8c]'}`}>{plan.name}</p>
              <div className="mt-7 flex items-end gap-2">
                <p className="text-[clamp(3.2rem,6vw,4.8rem)] font-semibold leading-none tracking-[-0.065em]">{plan.price}</p>
                {plan.cadence && <p className={`pb-2 text-sm ${plan.featured ? 'text-white/50' : 'text-[#727b8a]'}`}>{plan.cadence}</p>}
              </div>
              <p className={`mt-6 min-h-[52px] text-sm leading-6 ${plan.featured ? 'text-white/60' : 'text-[#667184]'}`}>{plan.description}</p>
              <div className={`my-7 h-px ${plan.featured ? 'bg-white/10' : 'bg-[#d8dad5]'}`} />
              <ul className="space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-3 text-sm ${plan.featured ? 'text-white/75' : 'text-[#3d4a60]'}`}>
                    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${plan.featured ? 'bg-[#ffb54a] text-[#10213f]' : 'bg-[#e4e3fa] text-[#5d62e8]'}`}><Check className="h-3 w-3" strokeWidth={3} /></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={plan.href} className={`group mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${plan.featured ? 'bg-[#ffb54a] text-[#10213f] hover:bg-[#ffc56e]' : 'bg-[#10213f] text-white hover:bg-[#19365f]'}`}>
                {plan.action}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
