import { useEffect } from 'react';
import { ArrowUpRight, CalendarDays, Check, Clock3, SearchCheck, Sparkles } from 'lucide-react';
import { GOOGLE_CALENDAR_BOOKING_URL, GOOGLE_CALENDAR_EMBED_URL } from '../config/links';

const PAGE_TITLE = 'Book a BidBird demo | AI GovCon software';
const PAGE_DESCRIPTION = 'Schedule a 30-minute BidBird demo to see AI-powered government contract search, RFP summaries, and capability matching in action.';
const PAGE_URL = 'https://www.bidbird.ai/book-demo';

const updateMeta = (selector: string, content: string) => {
  const element = document.querySelector<HTMLMetaElement>(selector);
  const previousContent = element?.content;
  element?.setAttribute('content', content);
  return () => {
    if (element && previousContent !== undefined) element.content = previousContent;
  };
};

export default function BookDemo() {
  useEffect(() => {
    const previousTitle = document.title;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonical?.href;
    const restoreMeta = [
      updateMeta('meta[name="description"]', PAGE_DESCRIPTION),
      updateMeta('meta[property="og:title"]', PAGE_TITLE),
      updateMeta('meta[property="og:description"]', PAGE_DESCRIPTION),
      updateMeta('meta[property="og:url"]', PAGE_URL),
      updateMeta('meta[name="twitter:title"]', PAGE_TITLE),
      updateMeta('meta[name="twitter:description"]', PAGE_DESCRIPTION),
    ];

    document.title = PAGE_TITLE;
    canonical?.setAttribute('href', PAGE_URL);
    window.scrollTo(0, 0);

    return () => {
      document.title = previousTitle;
      if (canonical && previousCanonical) canonical.href = previousCanonical;
      restoreMeta.forEach((restore) => restore());
    };
  }, []);

  return (
    <div className="overflow-hidden bg-[#f7f6f1]">
      <section className="relative overflow-hidden bg-[#071a35] px-4 pb-28 pt-32 text-white sm:px-6 sm:pb-36 sm:pt-40">
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.07] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
            <span className="h-2 w-2 rounded-full bg-[#70e1bd] shadow-[0_0_0_5px_rgba(112,225,189,.12)]" />
            A focused 30-minute walkthrough
          </div>
          <h1 className="mx-auto mt-6 max-w-5xl text-[clamp(3.1rem,7vw,6.6rem)] font-semibold leading-[.91] tracking-[-0.065em]">
            See the bids your team should <span className="text-[#ffb54a]">pursue next.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#c3cddd] sm:text-lg sm:leading-8">
            Pick a time that works. We’ll show you how BidBird finds stronger-fit opportunities, turns dense RFPs into clear decisions, and keeps your pipeline moving.
          </p>
        </div>
      </section>

      <section className="relative z-10 -mt-16 px-4 pb-20 sm:-mt-24 sm:px-6 sm:pb-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] border border-[#d8d9d4] bg-white shadow-[0_35px_100px_rgba(16,33,63,.16)] lg:grid-cols-[.36fr_.64fr]">
          <aside className="relative overflow-hidden bg-[#10213f] px-6 py-9 text-white sm:px-9 sm:py-12 lg:px-10 lg:py-14">
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#655ff0]/25 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#70e1bd]">Your demo</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">Clear answers, tailored to your workflow.</h2>
              <p className="mt-5 text-sm leading-6 text-white/60">Bring your current search process, target agencies, or a live opportunity. We’ll shape the conversation around what your team actually needs.</p>

              <div className="mt-9 space-y-4">
                {[
                  { icon: Clock3, title: '30 focused minutes', body: 'A practical walkthrough with time for your questions.' },
                  { icon: SearchCheck, title: 'Your market in view', body: 'See how BidBird surfaces and qualifies relevant contracts.' },
                  { icon: Sparkles, title: 'The full AI workflow', body: 'Search, summaries, fit analysis, and pursuit decisions.' },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[.055] p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#ffb54a] text-[#10213f]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-white/50">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 flex items-center gap-2 text-xs font-medium text-white/45">
                <Check className="h-4 w-4 text-[#70e1bd]" /> No pressure. Just a useful look at the product.
              </p>
            </div>
          </aside>

          <div className="min-w-0 bg-[#f7f6f1] p-3 sm:p-5 lg:p-6">
            <div className="overflow-hidden rounded-[22px] border border-[#dedfd9] bg-white">
              <div className="flex flex-col gap-3 border-b border-[#e5e6e1] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ecebff] text-[#5d62e8]">
                    <CalendarDays className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#10213f]">Choose your time</p>
                    <p className="text-xs text-[#778194]">Times automatically display in your local time zone.</p>
                  </div>
                </div>
                <a
                  href={GOOGLE_CALENDAR_BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5d62e8] hover:text-[#474bbd]"
                >
                  Open in a new tab <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <iframe
                src={GOOGLE_CALENDAR_EMBED_URL}
                title="Book a BidBird product demo"
                className="block h-[760px] w-full bg-white sm:h-[790px]"
                loading="eager"
                frameBorder="0"
              />
            </div>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-5 text-[#7a8495]">
          Google Calendar securely handles appointment availability and confirmation. You’ll receive the meeting details by email immediately after booking.
        </p>
      </section>
    </div>
  );
}
