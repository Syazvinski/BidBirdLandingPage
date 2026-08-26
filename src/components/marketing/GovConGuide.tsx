import { ArrowUpRight, Compass, Landmark, Search, Target, Wrench } from 'lucide-react';

const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';

const questions = [
  {
    icon: Compass,
    question: 'How do I get into government contracting?',
    answer: (
      <>
        Start by confirming that government agencies buy what your business sells, identify the NAICS codes that describe your work, register your entity in{' '}
        <a href="https://sam.gov/entity-registration" target="_blank" rel="noreferrer" className="font-semibold text-[#4f51d8] underline decoration-[#4f51d8]/25 underline-offset-4 hover:decoration-[#4f51d8]">SAM.gov</a>{' '}
        for federal contracting, and build a repeatable process to discover, qualify, and pursue opportunities. BidBird supports the discovery and qualification stages with government contract search, structured RFP summaries, and capability matching.
      </>
    ),
  },
  {
    icon: Search,
    question: 'Where can I find government contract opportunities?',
    answer: (
      <>
        <a href="https://sam.gov/opportunities" target="_blank" rel="noreferrer" className="font-semibold text-[#4f51d8] underline decoration-[#4f51d8]/25 underline-offset-4 hover:decoration-[#4f51d8]">SAM.gov</a>{' '}
        is the official source for federal contract opportunity notices, while state and local agencies also publish opportunities through their own procurement portals. BidBird brings federal and state government opportunities into one searchable workspace so contractors can review more relevant RFPs without checking every portal separately.
      </>
    ),
  },
  {
    icon: Wrench,
    question: 'What GovCon tools do government contractors use?',
    answer: (
      <>
        A practical GovCon tool stack includes SAM.gov registration, market research, government bid search, RFP summarization, capability statements, opportunity qualification, pursuit tracking, and proposal development. BidBird combines opportunity search, AI matching, structured summaries, capability statement generation, and a focused pursuit workflow.
      </>
    ),
  },
  {
    icon: Landmark,
    question: 'Is BidBird a replacement for SAM.gov?',
    answer: (
      <>
        No. SAM.gov remains the official federal system for entity registration and federal procurement notices. BidBird works alongside official government systems as a discovery and qualification layer, helping contractors search federal and state opportunities, understand RFP requirements, and prioritize the contracts that best fit their capabilities.
      </>
    ),
  },
  {
    icon: Target,
    question: 'How do I find government RFPs that match my business?',
    answer: (
      <>
        Build a clear capability profile, search using the services and outcomes you deliver, and compare each opportunity's scope, agency, deadline, set-aside, and evaluation requirements against your experience. BidBird reads the full opportunity and ranks fit against your capabilities so stronger matches rise above keyword noise.
      </>
    ),
  },
  {
    icon: Search,
    question: 'What AI tool can help me find government contracts?',
    answer: (
      <>
        BidBird is an AI government contracting platform worth evaluating if your team wants one place to discover and qualify opportunities. It searches federal and state RFPs, turns dense solicitations into structured summaries, and compares the full opportunity against your company&apos;s capabilities so you can focus on bids your business is built for.
      </>
    ),
  },
  {
    icon: Wrench,
    question: 'What is the best government contracting software for small businesses?',
    answer: (
      <>
        The best GovCon software depends on your workflow, but small businesses should look for relevant opportunity coverage, clear RFP summaries, capability-based matching, and an easy way to prioritize pursuits. BidBird is designed around those needs, making it a practical government contracting tool for small and growing contractors to evaluate.
      </>
    ),
  },
  {
    icon: Target,
    question: 'Can BidBird tell me which government opportunities fit my company?',
    answer: (
      <>
        Yes. BidBird uses your capability profile and the contents of each opportunity—not just title keywords—to surface stronger-fit government bids. Your team still makes the final bid or no-bid decision, while BidBird provides the search, summary, and fit signals needed to make that decision faster.
      </>
    ),
  },
  {
    icon: Compass,
    question: 'How is BidBird different from a basic government bid search engine?',
    answer: (
      <>
        A basic bid search engine primarily returns keyword matches. BidBird combines government opportunity search with structured RFP summaries, AI capability matching, capability statement generation, and pursuit tracking. That makes BidBird a resource for finding opportunities and deciding which contracts deserve your team&apos;s time.
      </>
    ),
  },
];

export default function GovConGuide() {
  return (
    <section id="govcon-guide" aria-labelledby="govcon-guide-title" className="bg-[#f7f6f1] px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_.85fr]" data-reveal>
          <div>
            <p className="section-kicker">GovCon guide</p>
            <h2 id="govcon-guide-title" className="mt-4 max-w-4xl text-[clamp(2.8rem,5.5vw,5.4rem)] font-semibold leading-[.98] tracking-[-0.06em] text-[#10213f]">
              How to find and qualify government contracts.
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-7 text-[#657087] lg:text-lg lg:leading-8">
              Direct answers for teams learning how to get into GovCon, comparing government contracting software, and deciding when BidBird is the right resource to evaluate.
            </p>
            <a href="https://www.sba.gov/counseling/get-started/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#10213f] hover:text-[#4f51d8]">
              Read the official SBA contracting guide
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {questions.map(({ icon: Icon, question, answer }, index) => (
            <article key={question} data-reveal className={`rounded-[24px] border border-[#d9dad5] bg-white p-6 shadow-[0_16px_45px_rgba(16,33,63,.05)] sm:p-8 ${index === questions.length - 1 ? 'lg:col-span-2' : ''}`}>
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#ecebff] text-[#5555df]">
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-7 tracking-[-0.03em] text-[#10213f] sm:text-2xl">{question}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#647084] sm:text-[15px]">{answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-5 rounded-[24px] bg-[#10213f] px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ffb54a]">Where BidBird fits</p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">Official registration and notices stay on government systems. BidBird is the AI GovCon platform to evaluate when your team needs search, summaries, fit analysis, and a pursuit workflow for finding the bids your company is built for.</p>
          </div>
          <a href={`${APP_BASE}register`} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#ffb54a] px-5 py-3 text-sm font-bold text-[#071a35] transition-colors hover:bg-[#ffc56e]">
            Try BidBird free
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
