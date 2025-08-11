import { Link } from 'react-router-dom';
const APP_BASE = import.meta.env.VITE_APP_BASE_URL || 'https://app.bidbird.ai/';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/bid_bird.png" alt="Bid Bird" className="h-8 w-auto" onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }} />
            <span className="text-primary font-semibold text-lg tracking-tight">Bid Bird</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/search" className="text-gray-600 hover:text-gray-900">Search</Link>
          </nav>
          <div className="flex items-center gap-2">
            <a href={APP_BASE + 'login'} className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-primary hover:text-primary-dark">Sign in</a>
            <a href={APP_BASE + 'register'} className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">Get started</a>
          </div>
        </div>
      </div>
    </header>
  );
}
