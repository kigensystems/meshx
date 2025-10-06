'use client';

import { Twitter, Github, Send } from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';

const stats = [
  "$50M+ Trading Volume",
  "10K+ Active Traders",
  "100+ Memecoin Pairs",
  "Community Owned",
  "Audited Smart Contracts",
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4 mt-24">
      <div className="mb-12">
        <Marquee pauseOnHover className="[--duration:30s]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-2xl font-bold bg-gradient-to-r from-mesh-gradient-red to-mesh-gradient-blue bg-clip-text text-transparent px-8"
            >
              {stat}
            </div>
          ))}
        </Marquee>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MeshX</h3>
            <p className="text-mesh-text-secondary text-sm">
              Perpetual futures for emerging memecoins. Trade with leverage, manage risk, maximize potential.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-mesh-text-secondary hover:text-white transition-colors">Trading Pairs</a></li>
              <li><a href="#" className="text-mesh-text-secondary hover:text-white transition-colors">Markets</a></li>
              <li><a href="#" className="text-mesh-text-secondary hover:text-white transition-colors">Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-mesh-text-secondary hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-mesh-text-secondary hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-mesh-text-secondary hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all"
              >
                <Send className="w-5 h-5 text-white" />
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3 text-sm">Newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-mesh-text-secondary">
          <p>© 2025 MeshX. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
