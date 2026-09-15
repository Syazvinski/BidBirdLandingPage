import { useEffect } from 'react';
import { CalendarDays, Check, Clock3, SearchCheck, Sparkles } from 'lucide-react';
import { HUBSPOT_DEMO_MEETING_URL } from '../config/links';
import { listenForDemoBookings } from '../services/analytics';

const PAGE_TITLE = 'Book a BidBird demo | AI GovCon software';
const PAGE_DESCRIPTION = 'Schedule a 30-minute BidBird demo to see AI-powered government contract search, RFP summaries, and capability matching in action.';
const PAGE_URL = 'https://www.bidbird.ai/book-demo';
const MEETINGS_EMBED_SCRIPT = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';

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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = MEETINGS_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
    const stopListening = listenForDemoBookings();

    return () => {
      stopListening();
      script.remove();
    };
  }, []);

  return (
    <div className="overflow-hidden bg-[#f7f6f1]">
      <section className="relative overflow-hidden bg-[#071a35] px-3 pb-9 pt-[92px] sm:px-5 sm:pb-12 sm:pt-[104px]">
        <div className="hero-grid absolute inset-0 opacity-20" />
        <div className="hero-glow hero-glow-one" />

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[24px] border border-white/15 bg-white shadow-[0_35px_100px_rgba(0,8,24,.4)] sm:rounded-[28px]">
          <div className="flex items-center justify-between gap-4 bg-[#10213f] px-4 py-3.5 text-white sm:px-6 sm:py-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#ffb54a] text-[#10213f]">
                <CalendarDays className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h1 className="truncate text-base font-semibold tracking-[-0.025em] sm:text-xl">Book your BidBird demo</h1>
                <p className="mt-0.5 text-[11px] text-white/50 sm:text-xs">30 minutes · Times shown in your local time zone</p>
              </div>
            </div>
          </div>

          <div
            className="meetings-iframe-container min-h-[680px] bg-white"
            data-src={`${HUBSPOT_DEMO_MEETING_URL}?embed=true`}
          />
        </div>

        <p className="relative mx-auto mt-4 max-w-2xl text-center text-[11px] leading-5 text-white/40 sm:text-xs">
          HubSpot securely handles availability and confirmations. You’ll receive the meeting details by email immediately after booking.
        </p>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:gap-16">
            <div>
              <p className="section-kicker">What to expect</p>
              <h2 className="mt-4 text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[.96] tracking-[-0.06em] text-[#10213f]">
                See the bids your team should <span className="text-[#5d62e8]">pursue next.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#657087] sm:text-lg sm:leading-8">
                We’ll show you how BidBird finds stronger-fit opportunities, turns dense RFPs into clear decisions, and keeps your pipeline moving.
              </p>
              <p className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#697387]">
                <Check className="h-4 w-4 text-[#4bbf9d]" /> No pressure. Just a useful look at the product.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { icon: Clock3, title: '30 focused minutes', body: 'A practical walkthrough with time for your questions.' },
                { icon: SearchCheck, title: 'Your market in view', body: 'See how BidBird surfaces and qualifies relevant contracts.' },
                { icon: Sparkles, title: 'The full AI workflow', body: 'Search, summaries, fit analysis, and pursuit decisions.' },
              ].map(({ icon: Icon, title, body }) => (
                <article key={title} className="flex gap-4 rounded-[22px] border border-[#d9dcd7] bg-white p-5 shadow-[0_14px_36px_rgba(16,33,63,.05)] sm:block lg:flex lg:p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ecebff] text-[#5d62e8]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="sm:mt-5 lg:mt-0">
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-[#10213f]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#687286]">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
