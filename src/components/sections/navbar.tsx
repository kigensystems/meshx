'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-xl font-bold text-white">
              MeshX
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm text-mesh-text-secondary hover:text-white transition-colors">
                Markets
              </a>
              <a href="#" className="text-sm text-mesh-text-secondary hover:text-white transition-colors">
                Trade
              </a>
              <a href="#" className="text-sm text-mesh-text-secondary hover:text-white transition-colors">
                Docs
              </a>
            </div>
          </div>

          <button className="px-6 py-2 bg-gradient-to-r from-mesh-gradient-red to-mesh-gradient-blue text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Launch App
          </button>
        </div>
      </div>
    </nav>
  );
}
