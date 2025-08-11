const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';

export default function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-10 md:p-12 border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Ready to see the right opportunities—fast?</h3>
          <p className="mt-3 text-gray-600 max-w-2xl">Sign up in minutes and start matching to high-fit opportunities today. No credit card required.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={APP_BASE + 'register'} className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">
              Create your account
            </a>
            <a href={APP_BASE + 'login'} className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              I already have an account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
