export default function ValueProps() {
  const items = [
    {
      title: 'Cut RFP reading time',
      desc: 'Structured summaries surface what matters—scope, requirements, deadlines, and fit—so you grok opportunities fast.'
    },
    {
      title: 'Higher match quality',
      desc: 'Advanced models—not keywords—rank opportunities using your capabilities and the RFP’s content.'
    },
    {
      title: 'From discovery to draft',
      desc: 'Approve matches and generate strong first drafts with the RFP writer to move faster to submission.'
    },
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="">
              <h3 className="text-xl font-semibold text-gray-900">{i.title}</h3>
              <p className="mt-2 text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
