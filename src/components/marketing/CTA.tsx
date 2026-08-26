import { ArrowRight, Check } from 'lucide-react';
import { DEMO_BOOKING_PATH } from '../../config/links';

const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';

export default function CTA() {
  return (
    <section className="overflow-hidden bg-[#f7f6f1] px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#655ff0] px-6 py-16 text-center text-white shadow-[0_35px_90px_rgba(61,58,160,.22)] sm:px-10 sm:py-24" data-reveal>
        <div className="cta-orbit cta-orbit-one" />
        <div className="cta-orbit cta-orbit-two" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Your next best-fit bid is already out there</p>
          <h2 className="mt-5 text-[clamp(3rem,7vw,6.7rem)] font-semibold leading-[.92] tracking-[-0.065em]">Find it before the deadline does.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">Create your profile and start matching to stronger opportunities—or get a guided look at the full workflow.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`${APP_BASE}register`} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffb54a] px-6 py-3.5 text-sm font-bold text-[#10213f] transition-all hover:-translate-y-0.5 hover:bg-[#ffc56e]">
              Start free <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={DEMO_BOOKING_PATH} className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15">Book a demo</a>
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-white/55"><Check className="h-3.5 w-3.5" /> No credit card required</p>
        </div>
      </div>
    </section>
  );
}
