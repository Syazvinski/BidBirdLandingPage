import { ReactNode } from 'react';

type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureGrid() {
  const features: Feature[] = [
    {
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 5h18M3 12h18M3 19h18" />
        </svg>
      ),
      title: 'Federal + state aggregation',
      description: 'All your opportunities in one place. We aggregate across major federal and state procurement portals into a unified feed.'
    },
    {
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6h16M4 12h10M4 18h7" />
        </svg>
      ),
      title: 'Structured RFP summaries',
      description: 'We parse long RFPs into key facts: scope, requirements, deadlines, set-asides, NAICS/PSC, budget, and evaluation criteria.'
    },
    {
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 12l4 4 10-10" />
        </svg>
      ),
      title: 'Best-in-class AI matching',
      description: 'Not simple keywords—real large models evaluate fit using your capabilities and RFP content for exceptional match quality.'
    },
    {
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l3 6 6 .5-4.5 4 1.5 6-6-3-6 3 1.5-6L3 9.5 9 9l3-6z" />
        </svg>
      ),
      title: 'Auto capability statement',
      description: 'Provide your business name and we build a polished capability statement we use to power matching and materials.'
    },
    {
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M7 10h10M7 14h6" />
        </svg>
      ),
      title: 'RFP writer',
      description: 'Draft accurate, tailored responses quickly using your capability statement and the RFP’s structured data.'
    },
    {
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 6h8M4 10h16M6 14h12M8 18h8" />
        </svg>
      ),
      title: 'Simple pursuit workflow',
      description: 'Approve high-fit matches, bookmark, and collaborate in a focused pipeline—no sprawling spreadsheets.'
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Everything you need to find and win</h2>
          <p className="mt-3 text-gray-600">From discovery to delivery, streamline the GovCon pursuit process.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.description}</p>
              <div className="mt-4 aspect-[16/10] rounded-md border-2 border-dashed border-gray-200 bg-gray-50 text-gray-500 flex items-center justify-center text-xs">
                Placeholder for GIF / demo
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
