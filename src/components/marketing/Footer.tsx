import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';
const DEMO_URL = 'https://calendar.app.google/xpkVTmZKzpyx3ZMMA';

export default function Footer() {
  return (
    <footer className="bg-[#071a35] px-4 pb-7 pt-16 text-white sm:px-6 sm:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2.5" aria-label="BidBird home">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white"><img src="/bid_bird.png" alt="" className="h-8 w-8 object-contain" /></span>
              <span className="text-xl font-semibold tracking-[-0.035em]">BidBird</span>
            </Link>
            <p className="mt-5 text-sm leading-6 text-white/48">AI-powered opportunity intelligence for government contractors who want to spend less time searching and more time winning.</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">Explore</p>
            <div className="mt-5 grid gap-3 text-sm text-white/65">
              <a href="#product" className="hover:text-white">Product</a>
              <a href="#how-it-works" className="hover:text-white">How it works</a>
              <a href="#govcon-guide" className="hover:text-white">GovCon guide</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">Get started</p>
            <div className="mt-5 grid gap-3 text-sm text-white/65">
              <a href={`${APP_BASE}register`} className="inline-flex items-center gap-1.5 hover:text-white">Create an account <ArrowUpRight className="h-3.5 w-3.5" /></a>
              <a href={`${APP_BASE}login`} className="hover:text-white">Sign in</a>
              <a href={DEMO_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">Book a demo <ArrowUpRight className="h-3.5 w-3.5" /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BidBird. All rights reserved.</p>
          <p>Built for the teams doing the hard work of government contracting.</p>
        </div>
      </div>
    </footer>
  );
}
