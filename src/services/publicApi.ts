export const API_BASE = import.meta.env.VITE_API_BASE_URL || 'https://bidbird.yazvinski.com/api/v3.1';

export type RFPSearchRequest = {
  query: string;
  offset?: number;
  limit?: number;
  has_extracted_details?: boolean;
};

export type RFPDocument = {
  rfp_id: string;
  title: string;
  description: string;
  agency?: string;
  posted_date?: string;
  response_date?: string;
  type?: string;
  set_aside?: string;
  naics_code?: string;
  place_of_performance?: string;
  link?: string;
  additional_info?: Record<string, any>;
};

export type RFPCard = {
  rfp_id: string;
  similarity_score: number;
  document: RFPDocument;
};

export type RFPSearchResponse = {
  results: RFPCard[];
  total_results: number;
  offset: number;
  limit: number;
  processing_time_ms: number;
  embedding_time_ms: number;
  search_time_ms: number;
  db_query_time_ms: number;
};

export async function publicSearchRFPs(req: RFPSearchRequest): Promise<RFPSearchResponse> {
  const res = await fetch(`${API_BASE}/public/rfps/search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function publicRFPDetail(rfp_id: string): Promise<any> {
  const res = await fetch(`${API_BASE}/public/rfps/${encodeURIComponent(rfp_id)}/detail`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

