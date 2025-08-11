export default function SocialProofSection() {
  const reviews = [
    {
      quote:
        'We cut our RFP screening time by more than half. The matches surface the right ones instantly.',
      name: 'Jordan M.',
      role: 'Owner, IT Services',
    },
    {
      quote:
        'The capability statement generation was spot on and saved us hours. It also improved our match quality.',
      name: 'Alicia R.',
      role: 'BD Lead, Facilities',
    },
    {
      quote:
        'All the state and federal opportunities in one place is a game changer for our small team.',
      name: 'Marcus T.',
      role: 'Principal, Consulting',
    },
    {
      quote:
        'Search is fast and the summaries make it easy to decide what’s worth pursuing.',
      name: 'Priya S.',
      role: 'Ops, Healthcare',
    },
    {
      quote:
        'We won our first contract using Bid Bird—having good shortlists each week made the difference.',
      name: 'Devon K.',
      role: 'Founder, Cyber',
    },
    {
      quote:
        'The team is responsive and keeps adding useful features. It already replaced our spreadsheets.',
      name: 'Lena F.',
      role: 'COO, Staffing',
    },
  ];

  return (
    <section id="social-proof" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900">Trusted by growing GovCon teams</h3>
          <p className="mt-2 text-gray-600">From discovery to draft, teams save hours each week.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow">
              <p className="text-gray-800">“{r.quote}”</p>
              <div className="mt-4 text-sm text-gray-600">
                <span className="font-medium text-gray-900">{r.name}</span> · {r.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
