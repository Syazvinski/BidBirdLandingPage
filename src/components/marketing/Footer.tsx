export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/bid_bird.png" alt="Bid Bird" className="h-6 w-auto" onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }} />
            <span className="text-gray-700 font-medium">Bid Bird</span>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Bid Bird. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

