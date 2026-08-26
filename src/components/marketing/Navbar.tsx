import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className={`mx-auto max-w-[1380px] rounded-2xl border transition-all duration-300 ${scrolled ? 'border-white/15 bg-[#071a35]/95 shadow-[0_18px_60px_rgba(0,18,45,.24)] backdrop-blur-xl' : 'border-white/10 bg-[#071a35]/85 backdrop-blur-md'}`}>
        <div className="flex h-[66px] items-center justify-between px-4 sm:px-6">
          <Link to="/" className="group flex items-center gap-2.5" aria-label="BidBird home">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white transition-transform duration-300 group-hover:-rotate-3">
              <img src="/bid_bird.png" alt="" className="h-7 w-7 object-contain" />
            </span>
            <span className="text-lg font-semibold tracking-[-0.03em] text-white">BidBird</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex" aria-label="Main navigation">
            <a href="#product" className="transition-colors hover:text-white">Product</a>
            <a href="#how-it-works" className="transition-colors hover:text-white">How it works</a>
            <a href="#govcon-guide" className="transition-colors hover:text-white">GovCon guide</a>
            <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href={`${APP_BASE}login`} className="px-3 py-2 text-sm font-semibold text-white/80 transition-colors hover:text-white">Sign in</a>
            <a href={`${APP_BASE}register`} className="group inline-flex items-center gap-2 rounded-xl bg-[#ffb54a] px-4 py-2.5 text-sm font-bold text-[#071a35] transition-all hover:bg-[#ffc56e]">
              Get started
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 px-4 pb-4 pt-3 md:hidden">
            <nav className="grid gap-1 text-sm font-medium text-white/80" aria-label="Mobile navigation">
              {[['Product', '#product'], ['How it works', '#how-it-works'], ['GovCon guide', '#govcon-guide'], ['Pricing', '#pricing']].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 hover:bg-white/10 hover:text-white">{label}</a>
              ))}
            </nav>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a href={`${APP_BASE}login`} className="rounded-xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white">Sign in</a>
              <a href={`${APP_BASE}register`} className="rounded-xl bg-[#ffb54a] px-4 py-3 text-center text-sm font-bold text-[#071a35]">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
