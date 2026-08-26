import { ArrowDown, ArrowRight, FileCheck2, Gauge, Layers3, SearchCheck, Sparkles } from 'lucide-react';

const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';

const steps = [
  {
    number: '01',
    title: 'Tell BidBird what you do',
    description: 'Build a capability profile that gives the matching engine real context about your business.',
    icon: Layers3,
  },
  {
    number: '02',
    title: 'See the strongest fits first',
    description: 'BidBird evaluates opportunities against your capabilities and surfaces what is worth your attention.',
    icon: SearchCheck,
  },
  {
    number: '03',
    title: 'Move from review to pursuit',
    description: 'Read the essentials, approve the right opportunities, and keep the next action clear.',
    icon: FileCheck2,
  },
];

export default function ValueProps() {
  return (
    <>
      <section id="benefits" className="bg-[#10213f] px-4 py-20 text-white sm:px-6 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-16" data-reveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-kicker section-kicker-light">Built for better bid decisions</p>
              <h2 className="mt-4 text-[clamp(2.8rem,5.5vw,5.8rem)] font-semibold leading-[.94] tracking-[-0.06em]">
                Spend your time <span className="text-[#ffb54a]">where it can win.</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
                The hard part is not finding more solicitations. It is knowing which ones deserve your team’s finite time.
              </p>
              <a href={`${APP_BASE}register`} className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-white">
                Build your first shortlist
                <ArrowRight className="h-4 w-4 text-[#ffb54a] transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="relative min-h-[330px] overflow-hidden rounded-[26px] bg-[#ffb54a] p-7 text-[#10213f] sm:col-span-2 sm:min-h-[360px] sm:p-10">
                <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border-[46px] border-[#10213f]/[.08]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#10213f] text-white"><Gauge className="h-5 w-5" /></span>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#10213f]/55">Less document triage</span>
                  </div>
                  <div className="mt-16">
                    <p className="text-[clamp(4rem,11vw,8rem)] font-semibold leading-none tracking-[-0.075em]">90%</p>
                    <h3 className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">less time reading RFPs to find what matters.</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#10213f]/65 sm:text-base">Structured summaries pull scope, requirements, deadlines, and evaluation criteria into focus.</p>
                  </div>
                </div>
              </article>

              <article className="group min-h-[310px] rounded-[26px] border border-white/10 bg-white/[.055] p-7 transition-colors hover:bg-white/[.08]">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#6d68f3] text-white"><Sparkles className="h-5 w-5" /></span>
                <p className="mt-16 text-xs font-bold uppercase tracking-[0.15em] text-white/40">Smarter matching</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">More signal than a keyword alert.</h3>
                <p className="mt-4 text-sm leading-6 text-white/55">Full opportunity content is evaluated against your capability profile to surface stronger fits.</p>
              </article>

              <article className="group min-h-[310px] rounded-[26px] bg-[#e6e2ff] p-7 text-[#10213f]">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#5d62e8]"><FileCheck2 className="h-5 w-5" /></span>
                <p className="mt-16 text-xs font-bold uppercase tracking-[0.15em] text-[#10213f]/40">One focused workflow</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">Discovery, decisions, and next steps together.</h3>
                <p className="mt-4 text-sm leading-6 text-[#10213f]/60">Approve matches, save opportunities, and move priority bids forward without another sprawling spreadsheet.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#f7f6f1] px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="section-kicker">A clearer path to go / no-go</p>
            <h2 className="mt-4 text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-[.98] tracking-[-0.055em] text-[#10213f]">Get oriented in minutes, not hours.</h2>
          </div>

          <div className="relative mt-14 grid gap-4 lg:grid-cols-3" data-reveal>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative rounded-[24px] border border-[#d9dcd7] bg-white p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7f8794]">Step {step.number}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#ececf9] text-[#5d62e8]"><Icon className="h-5 w-5" /></span>
                  </div>
                  <h3 className="mt-14 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#10213f]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#697387]">{step.description}</p>
                  {index < steps.length - 1 && (
                    <span className="absolute -bottom-3 left-1/2 z-10 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full border border-[#d9dcd7] bg-[#f7f6f1] text-[#5d62e8] lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:-rotate-90">
                      <ArrowDown className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
