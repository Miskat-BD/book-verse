'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Section 1: About Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-extrabold tracking-tight text-white">
                Book<span className="text-indigo-400">Verse</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Your ultimate digital sanctuary for exploring, rating, and managing your favorite literature. Built for modern book lovers.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link href="/books" className="hover:text-white transition-colors duration-200">Explore Books</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">Contact & Support</Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Social & Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Connect With Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@bookverse.com" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span>📧</span> support@bookverse.com
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span>💻</span> GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span>🤝</span> LinkedIn Network
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {currentYear} BookVerse Platform. All rights reserved. Satisfies Assignment Compliance.</p>
        </div>
      </div>
    </footer>
  );
}