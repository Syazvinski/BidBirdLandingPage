export default function ValueProps() {
  const items = [
    {
      title: 'Cut RFP reading time by 90%',
      desc: 'Structured summaries surface what matters—scope, requirements, deadlines, and fit—so you grok opportunities fast.',
      icon: '⚡'
    },
    {
      title: 'Higher match quality',
      desc: 'Advanced models—not keywords—rank opportunities using your capabilities and the RFP\'s content for better results.',
      icon: '🎯'
    },
    {
      title: 'From discovery to draft',
      desc: 'Approve matches and generate strong first drafts with the RFP writer to move faster to submission.',
      icon: '🚀'
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why contractors choose BidBird</h2>
          <p className="mt-3 text-gray-600">Transform your RFP discovery and bidding process with intelligent automation</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-2xl mb-4">{i.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{i.title}</h3>
              <p className="mt-3 text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
