import { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Building2, CornerDownRight, ExternalLink, FileText, LoaderCircle, MapPin, Search, Sparkles } from 'lucide-react';
import { publicSearchRFPs, RFPCard } from '../../services/publicApi';

const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';
const RESULT_LIMIT = 10;
const TYPEWRITER_PROMPT = 'What RFP are you looking for?';
const EXAMPLE_PROMPTS = [
  {
    prompt: 'Find cybersecurity support and engineering opportunities',
    query: 'cybersecurity services',
  },
  {
    prompt: 'Show me government RFPs for IT modernization',
    query: 'IT modernization',
  },
  {
    prompt: 'Find software development and maintenance contracts',
    query: 'software development',
  },
];

function promptToSearchQuery(prompt: string) {
  const optimized = prompt
    .replace(/^(?:please\s+)?(?:find|show me|look for|search for|help me find)\s+/i, '')
    .replace(/\b(?:(?:government|federal|state|local)\s+)?(?:rfps?|opportunities|contracts?|solicitations?)\b/gi, ' ')
    .replace(/^\s*(?:for|about|related to)\s+/i, '')
    .replace(/\s+/g, ' ')
    .trim();

  return optimized.length >= 2 ? optimized : prompt.trim();
}

function formatDate(value?: string) {
  if (!value) return null;
  const date = new Date(/^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T12:00:00` : value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatDueDate(value?: string) {
  const label = formatDate(value);
  if (!label || !value) return 'Deadline varies';

  const date = new Date(/^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T12:00:00` : value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  return `${date < today ? 'Closed' : 'Due'} ${label}`;
}

function safeSourceUrl(value?: string) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null;
  } catch {
    return null;
  }
}

function sourceLabel(result: RFPCard) {
  const source = result.document.additional_info?.source;
  if (typeof source === 'string' && source.trim()) {
    return source.toLowerCase() === 'sam.gov' ? 'SAM.gov' : source;
  }

  const url = safeSourceUrl(result.document.link);
  if (!url) return 'Original source';
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return 'Original source';
  }
}

function useTypewriterPrompt() {
  const [typedPrompt, setTypedPrompt] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedPrompt(TYPEWRITER_PROMPT);
      return;
    }

    let character = 0;
    const timer = window.setInterval(() => {
      character += 1;
      setTypedPrompt(TYPEWRITER_PROMPT.slice(0, character));
      if (character >= TYPEWRITER_PROMPT.length) window.clearInterval(timer);
    }, 48);

    return () => window.clearInterval(timer);
  }, []);

  return typedPrompt;
}

export default function HeroSearchDemo() {
  const [query, setQuery] = useState('');
  const [submittedPrompt, setSubmittedPrompt] = useState('');
  const [results, setResults] = useState<RFPCard[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const requestId = useRef(0);
  const typedPrompt = useTypewriterPrompt();
  const selectedResult = results.find((result) => result.rfp_id === selectedId) || null;

  const runSearch = async (rawPrompt: string, searchQueryOverride?: string) => {
    const cleanPrompt = rawPrompt.trim().slice(0, 160);
    if (cleanPrompt.length < 2) {
      setHasSearched(true);
      setSubmittedPrompt(cleanPrompt);
      setSelectedId(null);
      setResults([]);
      setError('Describe the opportunity you want to find.');
      return;
    }

    const searchQuery = (searchQueryOverride || promptToSearchQuery(cleanPrompt)).slice(0, 120);
    const currentRequest = ++requestId.current;
    setQuery(cleanPrompt);
    setSubmittedPrompt(cleanPrompt);
    setHasSearched(true);
    setSelectedId(null);
    setLoading(true);
    setError(null);

    try {
      const response = await publicSearchRFPs({
        query: searchQuery,
        offset: 0,
        limit: RESULT_LIMIT,
        has_extracted_details: true,
        skip_query_expansion: true,
        filters: { active_only: true },
      });

      if (currentRequest !== requestId.current) return;
      setResults(response.results.slice(0, RESULT_LIMIT));
      setTotalResults(response.total_results);
    } catch {
      if (currentRequest !== requestId.current) return;
      setResults([]);
      setTotalResults(0);
      setError('Live search is taking a break. Please try again.');
    } finally {
      if (currentRequest === requestId.current) setLoading(false);
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void runSearch(query);
  };

  const sourceUrl = selectedResult ? safeSourceUrl(selectedResult.document.link) : null;
  const additionalInfo = selectedResult?.document.additional_info;
  const solicitationNumber = typeof additionalInfo?.solicitation_number === 'string' ? additionalInfo.solicitation_number : null;

  return (
    <div className="relative h-full min-h-[350px] overflow-hidden rounded-[24px] border border-white/10 bg-[#071629] p-4 shadow-[0_32px_90px_rgba(0,0,0,.4)] sm:min-h-[430px] sm:rounded-[28px] sm:p-6">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#665ee8]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-[#123f67]/45 blur-3xl" />

      <div className="relative flex h-full min-h-[316px] flex-col sm:min-h-[388px]">
        <div className={`flex-1 ${!hasSearched ? 'flex flex-col justify-center' : ''}`}>
          {!hasSearched && (
            <h2 aria-label={TYPEWRITER_PROMPT} className="min-h-8 text-center text-[clamp(1.3rem,2.5vw,2rem)] font-medium tracking-[-0.035em] text-white sm:min-h-9">
              <span aria-hidden="true">{typedPrompt}</span>
              {typedPrompt.length < TYPEWRITER_PROMPT.length && <span aria-hidden="true" className="ml-0.5 inline-block h-6 w-[2px] translate-y-1 bg-[#ffb54a] animate-pulse" />}
            </h2>
          )}

          <form onSubmit={submit} className={hasSearched ? '' : 'mt-4 sm:mt-6'}>
            <div className="group relative flex min-h-[56px] items-center rounded-[26px] border border-white/10 bg-[#102642] p-1.5 pl-3 shadow-[0_18px_38px_rgba(0,0,0,.22)] transition focus-within:border-[#7772ef]/65 focus-within:bg-[#132b4a] focus-within:ring-4 focus-within:ring-[#655ff0]/10 sm:min-h-[64px] sm:p-2 sm:pl-4">
              <label htmlFor="hero-rfp-search" className="sr-only">Ask BidBird to find an RFP</label>
              <Search className="h-[18px] w-[18px] shrink-0 text-[#8997ad] transition group-focus-within:text-[#aaa6ff]" />
              <input
                id="hero-rfp-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                maxLength={160}
                autoComplete="off"
                spellCheck={false}
                placeholder="Ask BidBird to find an opportunity"
                className="min-w-0 flex-1 bg-transparent px-3 text-sm font-medium text-white outline-none placeholder:text-[#8997ad]"
              />
              <span className="mr-2 hidden shrink-0 items-center gap-2 rounded-full bg-white/[.055] px-3 py-2 text-[10px] font-semibold text-white/60 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8580ff]" />
                Agent search
              </span>
              <button
                type="submit"
                disabled={loading}
                aria-label="Search opportunities"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#ffb54a] text-[#071629] shadow-[0_10px_24px_rgba(255,181,74,.2)] transition hover:bg-[#ffc46b] disabled:cursor-wait disabled:opacity-70 sm:h-12 sm:w-12"
              >
                {loading ? <LoaderCircle className="h-[18px] w-[18px] animate-spin" /> : <ArrowRight className="h-[18px] w-[18px]" />}
              </button>
            </div>
          </form>

          {!hasSearched && (
            <div className="mt-3 space-y-0 sm:mt-5 sm:space-y-1">
              {EXAMPLE_PROMPTS.map((example) => (
                <button
                  key={example.prompt}
                  type="button"
                  disabled={loading}
                  onClick={() => void runSearch(example.prompt, example.query)}
                  className="group flex w-full items-start gap-2.5 rounded-xl px-2 py-1.5 text-left text-[11px] leading-[18px] text-white/60 transition hover:bg-white/[.05] hover:text-white disabled:opacity-50 sm:gap-3 sm:px-3 sm:py-2.5 sm:text-[12px] sm:leading-5"
                >
                  <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0 text-[#8580ff] transition-transform group-hover:translate-x-0.5" />
                  <span>{example.prompt}</span>
                </button>
              ))}
            </div>
          )}

          {hasSearched && !selectedResult && (
            <div className="mt-4 min-h-[280px]" aria-live="polite" aria-busy={loading}>
              <div className="flex items-center justify-between gap-3 px-1">
                <p className="min-w-0 truncate text-xs font-semibold text-white/80">
                  {loading ? 'Searching live opportunities…' : `Results for “${submittedPrompt}”`}
                </p>
                {!loading && results.length > 0 && (
                  <p className="shrink-0 text-[10px] font-medium text-white/40">Showing {results.length} of {totalResults.toLocaleString()}</p>
                )}
              </div>

              {loading && (
                <div className="mt-3 space-y-2">
                  {[0, 1, 2, 3].map((item) => (
                    <div key={item} className="h-[58px] animate-pulse rounded-xl border border-white/[.06] bg-white/[.04] p-3">
                      <div className="h-3 w-4/5 rounded bg-white/10" />
                      <div className="mt-3 h-2.5 w-2/5 rounded bg-white/[.07]" />
                    </div>
                  ))}
                </div>
              )}

              {!loading && error && (
                <div role="alert" className="mt-3 grid min-h-[245px] place-items-center rounded-2xl border border-dashed border-white/10 bg-white/[.025] px-5 text-center">
                  <div>
                    <Search className="mx-auto h-6 w-6 text-white/30" />
                    <p className="mt-2 text-sm font-semibold text-white/70">{error}</p>
                  </div>
                </div>
              )}

              {!loading && !error && results.length === 0 && (
                <div className="mt-3 grid min-h-[245px] place-items-center rounded-2xl border border-dashed border-white/10 bg-white/[.025] px-5 text-center">
                  <div>
                    <Search className="mx-auto h-6 w-6 text-white/30" />
                    <p className="mt-2 text-sm font-semibold text-white/70">No matches in this preview.</p>
                    <p className="mt-1 text-xs text-white/40">Try describing a broader service or capability.</p>
                  </div>
                </div>
              )}

              {!loading && results.length > 0 && (
                <ol className="demo-results-scroll mt-3 max-h-[270px] space-y-1.5 overflow-y-auto pr-1">
                  {results.map((result, index) => (
                    <li key={result.rfp_id}>
                      <button
                        type="button"
                        onClick={() => setSelectedId(result.rfp_id)}
                        className="group flex w-full items-center gap-3 rounded-xl border border-transparent bg-white/[.045] px-3 py-2.5 text-left transition hover:border-white/10 hover:bg-white/[.075]"
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/[.07] text-[10px] font-bold text-white/40 ring-1 ring-white/[.06] group-hover:text-[#aaa6ff]">{String(index + 1).padStart(2, '0')}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[11px] font-semibold text-white/90">{result.document.title}</span>
                          <span className="mt-1 flex items-center gap-2 text-[9px] text-white/40">
                            <span className="min-w-0 truncate">{result.document.agency || 'Government agency'}</span>
                            <span aria-hidden="true">·</span>
                            <span className="shrink-0">{formatDueDate(result.document.response_date)}</span>
                          </span>
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white/25 transition group-hover:translate-x-0.5 group-hover:text-[#aaa6ff]" />
                      </button>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          )}

          {selectedResult && (
            <section className="mt-4 min-h-[280px]" aria-label="Opportunity preview">
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-white/40 transition hover:text-[#aaa6ff]"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to {results.length} results
              </button>

              <div className="demo-results-scroll mt-3 max-h-[228px] overflow-y-auto rounded-2xl border border-white/[.08] bg-white/[.035] p-4">
                <div className="flex flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-[0.1em]">
                  {selectedResult.document.type && <span className="rounded-full bg-[#6963e8]/18 px-2.5 py-1 text-[#aaa6ff]">{selectedResult.document.type}</span>}
                  <span className="rounded-full bg-white/[.05] px-2.5 py-1 text-white/50 ring-1 ring-white/[.07]">{formatDueDate(selectedResult.document.response_date)}</span>
                </div>

                <h3 className="mt-3 text-base font-semibold leading-6 tracking-[-0.02em] text-white">{selectedResult.document.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-white/40">
                  <Building2 className="h-3.5 w-3.5" />
                  {selectedResult.document.agency || 'Government agency'}
                </p>

                {selectedResult.document.description && (
                  <p className="mt-3 text-[11px] leading-5 text-white/50">{selectedResult.document.description}</p>
                )}

                <dl className="mt-4 grid gap-2 sm:grid-cols-2">
                  {solicitationNumber && (
                    <div className="rounded-xl bg-white/[.045] p-3 ring-1 ring-white/[.06]">
                      <dt className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white/30"><FileText className="h-3 w-3" /> Solicitation</dt>
                      <dd className="mt-1.5 truncate text-[11px] font-semibold text-white/70">{solicitationNumber}</dd>
                    </div>
                  )}
                  {selectedResult.document.naics_code && (
                    <div className="rounded-xl bg-white/[.045] p-3 ring-1 ring-white/[.06]">
                      <dt className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/30">NAICS</dt>
                      <dd className="mt-1.5 text-[11px] font-semibold text-white/70">{selectedResult.document.naics_code}</dd>
                    </div>
                  )}
                  {selectedResult.document.place_of_performance && (
                    <div className="rounded-xl bg-white/[.045] p-3 ring-1 ring-white/[.06] sm:col-span-2">
                      <dt className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white/30"><MapPin className="h-3 w-3" /> Place of performance</dt>
                      <dd className="mt-1.5 text-[11px] font-semibold text-white/70">{selectedResult.document.place_of_performance}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {sourceUrl && (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ffb54a] px-4 py-3 text-xs font-bold text-[#071629] transition hover:bg-[#ffc46b]"
                >
                  View on {sourceLabel(selectedResult)}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </section>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/[.08] pt-3 sm:mt-4 sm:pt-3.5">
          <p className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.11em] text-white/30">
            <Sparkles className="h-3 w-3 text-[#8580ff]" />
            Live demo · up to 10 results
          </p>
          <a href={`${APP_BASE}register`} className="group flex shrink-0 items-center gap-1 text-[10px] font-semibold text-white/50 hover:text-[#ffb54a]">
            Open BidBird
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
