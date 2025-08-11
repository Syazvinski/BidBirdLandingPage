import { useEffect, useState } from 'react';
import { publicRFPDetail } from '../../services/publicApi';

type Tab = 'overview' | 'requirements' | 'attachments' | 'contacts';

export default function PublicRFPDetail({ rfpId }: { rfpId: string }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);
  const [detail, setDetail] = useState<any>(null);
  const [tab, setTab] = useState<Tab>('overview');

  useEffect(() => {
    let cancelled = false;
    async function run(){
      setLoading(true); setError(null);
      try {
        const d = await publicRFPDetail(rfpId);
        if (!cancelled) setDetail(d);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Failed to load detail');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [rfpId]);

  if (loading) return <div className="p-6 text-gray-500">Loading…</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!detail) return null;

  const fmtDate = (s?: string) => (s ? new Date(s).toLocaleString() : 'Not specified');

  return (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0 border-b border-gray-200 bg-white">
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">{detail.title}</h2>
          <div className="mt-1 text-sm text-gray-600 flex flex-wrap gap-3">
            {detail.rfp_id && <span className="flex items-center gap-1 text-gray-500">#<span>{detail.rfp_id}</span></span>}
            {detail.agency && <span className="flex items-center gap-1">{detail.agency}</span>}
            {detail.type && <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700">{detail.type}</span>}
            {detail.naics_codes?.length>0 && <span>NAICS: {detail.naics_codes.join(', ')}</span>}
            {detail.place_of_performance && <span>{detail.place_of_performance}</span>}
          </div>
          {/* Key stats */}
          <div className="mt-3 bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Deadline</div>
                <div className="text-gray-900">{fmtDate(detail.response_date)}</div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Period of Performance</div>
                <div className="text-gray-900">{detail.enriched_data?.periodOfPerformance || 'Not specified'}</div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Place of Performance</div>
                <div className="text-gray-900">{detail.place_of_performance || 'Not specified'}</div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Archive Date</div>
                <div className="text-gray-900">{fmtDate(detail.archive_date)}</div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            {(['overview','requirements','attachments','contacts'] as Tab[]).map(t => (
              <button key={t} onClick={() => setTab(t)} className={`px-3 py-1.5 text-sm rounded border ${tab===t ? 'bg-primary/10 text-primary border-primary/20' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}>{t[0].toUpperCase()+t.slice(1)}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {tab==='overview' && (
            <div className="space-y-6">
              {detail.enriched_data?.rfpSummary && (
                <section className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Summary</h3>
                  <p className="text-sm text-gray-700">{detail.enriched_data.rfpSummary}</p>
                </section>
              )}
              <section className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Key Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                  <div><span className="text-gray-500">Notice Type:</span> {detail.type || 'Not specified'}</div>
                  <div><span className="text-gray-500">Set Aside:</span> {detail.set_aside || 'Not specified'}</div>
                  <div><span className="text-gray-500">Contract Type:</span> {detail.enriched_data?.contractType || 'Not specified'}</div>
                  <div><span className="text-gray-500">Budget:</span> {detail.enriched_data?.budgetEstimate ? `$${detail.enriched_data.budgetEstimate.min?.toLocaleString()} - $${detail.enriched_data.budgetEstimate.max?.toLocaleString()}` : 'TBD'}</div>
                  <div className="md:col-span-2"><span className="text-gray-500">Period of Performance:</span> {detail.enriched_data?.periodOfPerformance || 'Not specified'}</div>
                </div>
              </section>
              <section className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Key Dates</h3>
                <div className="flex gap-3 overflow-x-auto">
                  {[
                    { label: 'Posted', date: detail.posted_date },
                    { label: 'Response Due', date: detail.response_date },
                    { label: 'Archive Date', date: detail.archive_date },
                    ...(detail.enriched_data?.keyDates ? Object.entries(detail.enriched_data.keyDates).map(([k,v]) => ({ label: k, date: v as string })) : [])
                  ].filter(d => d.date).map((d, i) => (
                    <div key={i} className="flex-shrink-0 w-40 p-3 rounded border border-gray-200 bg-gray-50">
                      <div className="text-xs text-gray-500 mb-1">{d.label}</div>
                      <div className="text-sm text-gray-900">{fmtDate(d.date)}</div>
                    </div>
                  ))}
                </div>
              </section>
              {detail.enriched_data?.statementOfWork && (
                <section className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Statement of Work</h3>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{detail.enriched_data.statementOfWork}</p>
                </section>
              )}
            </div>
          )}

          {tab==='requirements' && (
            <div className="space-y-6">
              {detail.enriched_data?.submissionRequirements && (
                <section className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Submission Requirements</h3>
                  <p className="text-sm text-gray-700">{detail.enriched_data.submissionRequirements}</p>
                </section>
              )}
              {detail.enriched_data?.contractorQualifications && (
                <section className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Contractor Qualifications</h3>
                  <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                    {detail.enriched_data.contractorQualifications.map((q: string, i: number) => <li key={i}>{q}</li>)}
                  </ul>
                </section>
              )}
              {detail.enriched_data?.deliverables && (
                <section className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Deliverables</h3>
                  <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                    {detail.enriched_data.deliverables.map((d: string, i: number) => <li key={i}>{d}</li>)}
                  </ul>
                </section>
              )}
              {detail.enriched_data?.evaluationFactors && (
                <section className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Evaluation Factors</h3>
                  <p className="text-sm text-gray-700">{detail.enriched_data.evaluationFactors}</p>
                </section>
              )}
              {detail.enriched_data?.pricingRequirements && (
                <section className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Pricing Requirements</h3>
                  <p className="text-sm text-gray-700">{detail.enriched_data.pricingRequirements}</p>
                </section>
              )}
            </div>
          )}

          {tab==='attachments' && (
            <section className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">Attachments</h3>
              {detail.attachments && detail.attachments.length > 0 ? (
                <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
                  {detail.attachments.map((att: any) => (
                    <li key={att.uuid} className="p-3 text-sm flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">{att.filename || att.uuid}.{att.ext}</div>
                        {att.size_bytes && <div className="text-xs text-gray-500">{(att.size_bytes/1024/1024).toFixed(2)} MB</div>}
                      </div>
                      {att.classification && (
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${att.classification.is_relevant ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                          {att.classification.is_relevant ? 'Relevant' : 'Unclassified'}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-700">No attachments available.</p>
              )}
            </section>
          )}

          {tab==='contacts' && (
            <div className="space-y-4">
              <section className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Point of Contact</h3>
                {detail.point_of_contact ? (
                  <div className="text-sm text-gray-700 space-y-1">
                    {detail.point_of_contact.name && <div><span className="text-gray-500">Name:</span> {detail.point_of_contact.name}</div>}
                    {detail.point_of_contact.title && <div><span className="text-gray-500">Title:</span> {detail.point_of_contact.title}</div>}
                    {detail.point_of_contact.email && <div><span className="text-gray-500">Email:</span> {detail.point_of_contact.email}</div>}
                    {detail.point_of_contact.phone && <div><span className="text-gray-500">Phone:</span> {detail.point_of_contact.phone}</div>}
                  </div>
                ) : (
                  <p className="text-sm text-gray-700">No contact information available.</p>
                )}
              </section>
              {detail.original_sam_link && (
                <a href={detail.original_sam_link} target="_blank" className="inline-flex items-center text-accent hover:underline">View on SAM.gov</a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
