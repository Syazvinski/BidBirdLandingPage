import { Calendar, Building, ExternalLink, DollarSign, Clock, FileText, CheckCircle, AlertCircle } from 'lucide-react';

type AIEnhancedData = {
  ai_title?: string;
  ai_description?: string;
  contract_type?: string;
  period_of_performance?: string;
  budget_estimate?: { min?: number; max?: number };
  key_dates?: Record<string, string>;
  contractor_qualifications?: string[];
};

type RFPDocument = {
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
  additional_info?: { solicitation_number?: string; ai_enhanced?: AIEnhancedData };
};

export default function SearchCard({ document, onClick }: { document: RFPDocument; onClick?: () => void }) {
  const aiData = document.additional_info?.ai_enhanced;

  const formatCurrency = (amount?: number) => amount ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount) : null;
  const formatBudget = (b?: { min?: number; max?: number }) => b ? (b.min && b.max ? `${formatCurrency(b.min)} - ${formatCurrency(b.max)}` : b.min ? `${formatCurrency(b.min)}+` : b.max ? `Up to ${formatCurrency(b.max)}` : null) : null;
  const formatDate = (s?: string | null) => s ? new Date(s).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : null;
  const getDaysUntilDue = (s?: string | null) => {
    if (!s) return null;
    const d = new Date(s).getTime() - Date.now();
    return Math.ceil(d / (1000*60*60*24));
  };
  const formattedDue = (() => {
    const days = getDaysUntilDue(document.response_date);
    if (days === null) return null;
    if (days <= 30 && days > 0) return `Due in ${days} day${days===1?'':'s'}`;
    if (days === 0) return 'Due today';
    if (days < 0) return 'Overdue';
    return `Due ${formatDate(document.response_date)}`;
  })();
  const urgent = (() => { const d = getDaysUntilDue(document.response_date); return d !== null && d <= 7 && d >= 0; })();
  const budget = formatBudget(aiData?.budget_estimate);
  const samUrl = `https://sam.gov/opp/${document.rfp_id}/view`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all cursor-pointer p-5" onClick={onClick}>
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 leading-tight line-clamp-2 mb-1">{document.title}</h3>
          {document.agency && (
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-gray-400" />
              <span className="truncate">{document.agency}</span>
            </p>
          )}
        </div>
        <a href={samUrl} target="_blank" rel="noopener noreferrer" title="View on SAM.gov" className="text-gray-400 hover:text-gray-600 transition-colors" onClick={(e)=>e.stopPropagation()}>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Key Info */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 mb-3">
        {document.additional_info?.solicitation_number && (
          <span className="flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-gray-400" />
            #{document.additional_info.solicitation_number}
          </span>
        )}
        {document.type && <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-medium">{document.type}</span>}
        {document.set_aside && document.set_aside !== 'None' && <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded font-medium">{document.set_aside}</span>}
        {document.naics_code && <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded">NAICS {document.naics_code}</span>}
        {document.place_of_performance && <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded">{document.place_of_performance}</span>}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed line-clamp-3 mb-3">{document.description}</p>

      {/* AI details */}
      {aiData && (
        <div className="space-y-2 mb-3">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            {aiData.contract_type && (
              <span className="flex items-center gap-1 text-gray-600">
                <CheckCircle className="w-3.5 h-3.5 text-gray-400" />
                {aiData.contract_type}
              </span>
            )}
            {budget && (
              <span className="flex items-center gap-1 text-gray-600">
                <DollarSign className="w-3.5 h-3.5 text-gray-400" />
                {budget}
              </span>
            )}
            {aiData.period_of_performance && (
              <span className="flex items-center gap-1 text-gray-600">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                {aiData.period_of_performance}
              </span>
            )}
          </div>
          {aiData.key_dates && Object.keys(aiData.key_dates).length > 0 && (
            <div className="text-xs text-gray-600">
              Important: {Object.entries(aiData.key_dates).slice(0, 2).map(([k, v]) => `${k}: ${formatDate(v)}`).join(' • ')}
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="text-xs text-gray-600 flex items-center gap-3">
          {document.posted_date && <span>Posted {formatDate(document.posted_date)}</span>}
        </div>
        {formattedDue && (
          <div className={`flex items-center gap-1 text-xs ${urgent ? 'text-red-600' : 'text-gray-600'}`}>
            <Calendar className="w-3 h-3" />
            <span>{formattedDue}</span>
            {urgent && <AlertCircle className="w-3 h-3" />}
          </div>
        )}
      </div>
    </div>
  );
}

