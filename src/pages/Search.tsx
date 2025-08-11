import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { publicSearchRFPs, RFPSearchResponse, RFPCard } from '../services/publicApi';
import PublicRFPDetail from '../components/rfp/PublicRFPDetail';
import SearchCard from '../components/rfp/SearchCard';

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const q = params.get('q') || '';
  const page = parseInt(params.get('page') || '1', 10);

  const [input, setInput] = useState(q);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [data, setData] = useState<RFPSearchResponse | null>(null);
  const [selected, setSelected] = useState<RFPCard | null>(null);

  useEffect(() => setInput(q), [q]);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (!q.trim()) { setData(null); setSelected(null); return; }
      setLoading(true); setError(null);
      try {
        const res = await publicSearchRFPs({ query: q, offset: (page-1)*12, limit: 12, has_extracted_details: true });
        if (!cancelled) {
          setData(res);
          setSelected(res.results[0] || null);
        }
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Search failed');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [q, page]);

  const totalPages = useMemo(() => data ? Math.max(1, Math.ceil(data.total_results / (data.limit || 12))) : 1, [data]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const np = new URLSearchParams();
    if (input.trim()) np.set('q', input.trim());
    np.set('page', '1');
    setParams(np, { replace: true });
  };

  const gotoPage = (p: number) => {
    const np = new URLSearchParams(params);
    np.set('page', String(p));
    setParams(np, { replace: true });
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <div className="border-b border-gray-200 bg-white flex-shrink-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
          <form onSubmit={submit} className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search federal and state RFPs..."
              className="w-full md:w-[600px] px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
            <button className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">
              Search
            </button>
          </form>
          {data && (<p className="mt-1 text-xs text-gray-600">{data.total_results.toLocaleString()} results</p>)}
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-full md:w-2/5 border-r border-gray-200 overflow-y-auto">
          <div className="p-4 space-y-3">
            {loading && (
              <div className="text-gray-500">Loading…</div>
            )}
            {!loading && data?.results.map((r) => (
              <div key={r.rfp_id} className={`${selected?.rfp_id===r.rfp_id ? 'ring-2 ring-primary rounded-lg' : ''}`} onClick={() => setSelected(r)}>
                <SearchCard document={r.document as any} />
              </div>
            ))}
          </div>

          {data && totalPages > 1 && (
            <div className="border-t border-gray-200 p-3 flex items-center justify-center gap-2">
              <button disabled={page<=1} onClick={() => gotoPage(page-1)} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
              <span className="text-sm text-gray-600">Page {page} / {totalPages}</span>
              <button disabled={page>=totalPages} onClick={() => gotoPage(page+1)} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
            </div>
          )}
        </div>

        <div className="hidden md:block flex-1 overflow-hidden">
          {selected ? <PublicRFPDetail rfpId={selected.rfp_id} /> : (
            <div className="h-full flex items-center justify-center text-gray-400">Select an RFP to view details</div>
          )}
        </div>
      </div>
    </div>
  );
}
